<script setup>
  import { ref,onMounted, watch, nextTick } from 'vue'

  const emit = defineEmits(['pointerup','pointerdown'])


    const shader=`
    vec3 random3(vec3 c) {
      float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
      vec3 r;
      r.z = fract(512.0*j);
      j *= .125;
      r.x = fract(512.0*j);
      j *= .125;
      r.y = fract(512.0*j);
      return r-0.5;
    }

    /* skew constants for 3d simplex functions */
    const float F3 =  0.3333333;
    const float G3 =  0.1666667;

    /* 3d simplex noise */
    float simplex3d(vec3 p) {
      /* 1. find current tetrahedron T and it's four vertices */
      /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
      /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/
      
      /* calculate s and x */
      vec3 s = floor(p + dot(p, vec3(F3)));
      vec3 x = p - s + dot(s, vec3(G3));
      
      /* calculate i1 and i2 */
      vec3 e = step(vec3(0.0), x - x.yzx);
      vec3 i1 = e*(1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        
      /* x1, x2, x3 */
      vec3 x1 = x - i1 + G3;
      vec3 x2 = x - i2 + 2.0*G3;
      vec3 x3 = x - 1.0 + 3.0*G3;
      
      /* 2. find four surflets and store them in d */
      vec4 w, d;
      
      /* calculate surflet weights */
      w.x = dot(x, x);
      w.y = dot(x1, x1);
      w.z = dot(x2, x2);
      w.w = dot(x3, x3);
      
      /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
      w = max(0.6 - w, 0.0);
      
      /* calculate surflet components */
      d.x = dot(random3(s), x);
      d.y = dot(random3(s + i1), x1);
      d.z = dot(random3(s + i2), x2);
      d.w = dot(random3(s + 1.0), x3);
      
      /* multiply d by w^4 */
      w *= w;
      w *= w;
      d *= w;
      
      /* 3. return the sum of the four surflets */
      return dot(d, vec4(52.0));
    }

    /* const matrices for 3d rotation */
    const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
    const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
    const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);

    /* directional artifacts can be reduced by rotating each octave */
    float simplex3d_fractal(vec3 m) {
        return   0.5333333*simplex3d(m*rot1)
          +0.2666667*simplex3d(2.0*m*rot2)
          +0.1333333*simplex3d(4.0*m*rot3)
          +0.0666667*simplex3d(8.0*m);
    }

    void main() {
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        // vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
	      vec3 p3 = vec3(uv, u_time*u_speed);
        float value = simplex3d(p3*.35);
        value += 0.6;
        // value *= 1.5;
        vec3 perlinCol = vec3(value);
        perlinCol = clamp(perlinCol , 0.3 , 1.0);
        gl_FragColor = vec4(perlinCol,perlinCol.x);
    }`;
    const shaderCode = ref(shader)
    const speed = ref(0.05)
    const light = ref(0.5)
    const time = ref(0)
    function glslUpdate(tickData){
      time.value +=speed.value;
    }
    function pressDown(){
      speed.value = 0.3;
      light.value = 0.9;
      emit('pointerdown')
    }
    function pressUp(){
      speed.value = 0.05;
      light.value = 0.5;
      emit('pointerup')
    }
</script>

<template>
  <div id="buttonContainer">

    <div class="pulse"></div>
    <div id="back">
    </div>
    <div id="button" @pointerdown="pressDown" @pointerleave="pressUp">
      <img class="icon" src="../assets/icone.svg" alt="">
      <gl-canvas class="canvas" @update="glslUpdate" :style="{ opacity: light }" >
        <gl-program name="main" :code="shaderCode">
          <gl-float name="u_speed" :value="speed" />*
          <gl-float name="u_light" :value="light" />
          <gl-float name="u_time" :value="time" />
        </gl-program>
      </gl-canvas>
    </div>
  </div>


</template>

<style scoped>
  #buttonContainer{
    display: block;
    position: absolute;
    z-index: 999;
  }
  p{
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 600;
    color: white;
    position: absolute;
    left: 50%;
    top : 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    pointer-events: none;
  }
  #button{
    width:14.517rem;
    height: 14.517rem;
    border: 1px solid white;
    position: relative;
    background-color: #122220;
    z-index: 20;
    border-radius: 100%;
    transition: background-position 0.1s ease;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.20);
    overflow: hidden;
  }
  #button.actif{
    background-position: 100%;
  }
  .canvas{
    transition: opacity 0.2 ease;
  }
  .icon{
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  #back{
    width:16.519rem;
    height: 16.519rem;
    flex-shrink: 0;
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-color: rgba(80,190,155,0.2);
    backdrop-filter: blur(6.5px);
    z-index: 10;
    border-radius: 100%;
    border: 1px solid rgba(80,190,155,0.7);
  }
  .pulse{
    background-color: #55BE9B;
    width:16.519rem;
    height: 16.519rem;
    position: absolute;
    top:50%;
    left: 50%;
    z-index: -5;
    opacity: 0.25;
    border-radius: 100%;
    animation: pulse 2s infinite ease;
    transform:  translate(-50%,-50%) scale(0.6);
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%,-50%) scale(0.6);
      opacity: 1;
    }

    100% {
      transform: translate(-50%,-50%) scale(1.20);
      opacity: 0;
    }
  }
</style>
