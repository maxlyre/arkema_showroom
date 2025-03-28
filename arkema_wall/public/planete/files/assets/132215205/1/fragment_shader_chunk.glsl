
varying vec2 vUv;

uniform vec3 uUsineColor;
uniform vec3 uCommercialColor;
uniform vec3 uRDColor;
uniform vec3 uSiegeColor;
uniform vec3 uTechniqueColor;

uniform float uUsine;
uniform float uCommercial;
uniform float uRD;
uniform float uSiege;
uniform float uTechnique;


void getAlbedo()
{
     
    vec3 color = vec3(.0,.0,0.0);
    vec2 uv = $UV;

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
    
    dAlbedo = color;
}

