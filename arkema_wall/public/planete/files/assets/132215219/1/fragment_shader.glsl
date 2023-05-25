
varying vec2 vUv;

uniform vec4 uUsineColor;
uniform vec4 uCommercialColor;
uniform vec4 uRDColor;
uniform vec4 uSiegeColor;
uniform vec4 uTechniqueColor;

uniform float uUsine;
uniform float uCommercial;
uniform float uRD;
uniform float uSiege;
uniform float uTechnique;

vec2 rotateUV(vec2 uv, float rotation)
{
    float mid = 0.5;
    return vec2(
        cos(rotation) * (uv.x - mid) + sin(rotation) * (uv.y - mid) + mid,
        cos(rotation) * (uv.y - mid) - sin(rotation) * (uv.x - mid) + mid
    );
}

void main(void)
{
        
    vec4 color = vec4(0.0);
    vec2 uv = vUv;
    uv.x = uv.x*4.0;
    uv.x -= 1.51;
    if(uv.x < uUsine){
        color = uUsineColor;
    }else if(uv.x <uUsine+uCommercial){
        color = uCommercialColor;
    }else if(uv.x <uUsine+uCommercial+uRD){
        color = uRDColor;
    }else if(uv.x <uUsine+uCommercial+uRD+uSiege){
        color = uSiegeColor;
    }else if(uv.x <uUsine+uCommercial+uRD+uSiege+uTechnique){
        color = uTechniqueColor;
    }
    
    gl_FragColor = color;
}

