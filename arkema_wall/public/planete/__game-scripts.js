var OrbitCamera=pc.createScript("orbitCamera");OrbitCamera.attributes.add("distanceMax",{type:"number",default:0,title:"Distance Max",description:"Setting this at 0 will give an infinite distance limit"}),OrbitCamera.attributes.add("distanceMin",{type:"number",default:0,title:"Distance Min"}),OrbitCamera.attributes.add("pitchAngleMax",{type:"number",default:90,title:"Pitch Angle Max (degrees)"}),OrbitCamera.attributes.add("pitchAngleMin",{type:"number",default:-90,title:"Pitch Angle Min (degrees)"}),OrbitCamera.attributes.add("inertiaFactor",{type:"number",default:0,title:"Inertia Factor",description:"Higher value means that the camera will continue moving after the user has stopped dragging. 0 is fully responsive."}),OrbitCamera.attributes.add("focusEntity",{type:"entity",title:"Focus Entity",description:"Entity for the camera to focus on. If blank, then the camera will use the whole scene"}),OrbitCamera.attributes.add("frameOnStart",{type:"boolean",default:!0,title:"Frame on Start",description:'Frames the entity or scene at the start of the application."'}),Object.defineProperty(OrbitCamera.prototype,"distance",{get:function(){return this._targetDistance},set:function(t){this._targetDistance=this._clampDistance(t)}}),Object.defineProperty(OrbitCamera.prototype,"pitch",{get:function(){return this._targetPitch},set:function(t){this._targetPitch=this._clampPitchAngle(t)}}),Object.defineProperty(OrbitCamera.prototype,"yaw",{get:function(){return this._targetYaw},set:function(t){this._targetYaw=t;var i=(this._targetYaw-this._yaw)%360;this._targetYaw=i>180?this._yaw-(360-i):i<-180?this._yaw+(360+i):this._yaw+i}}),Object.defineProperty(OrbitCamera.prototype,"pivotPoint",{get:function(){return this._pivotPoint},set:function(t){this._pivotPoint.copy(t)}}),OrbitCamera.prototype.focus=function(t){this._buildAabb(t,0);var i=this._modelsAabb.halfExtents,e=Math.max(i.x,Math.max(i.y,i.z));e/=Math.tan(.5*this.entity.camera.fov*pc.math.DEG_TO_RAD),e*=2,this.distance=e,this._removeInertia(),this._pivotPoint.copy(this._modelsAabb.center)},OrbitCamera.distanceBetween=new pc.Vec3,OrbitCamera.prototype.resetAndLookAtPoint=function(t,i){this.pivotPoint.copy(i),this.entity.setPosition(t),this.entity.lookAt(i);var e=OrbitCamera.distanceBetween;e.sub2(i,t),this.distance=e.length(),this.pivotPoint.copy(i);var a=this.entity.getRotation();this.yaw=this._calcYaw(a),this.pitch=this._calcPitch(a,this.yaw),this._removeInertia(),this._updatePosition()},OrbitCamera.prototype.resetAndLookAtEntity=function(t,i){this._buildAabb(i,0),this.resetAndLookAtPoint(t,this._modelsAabb.center)},OrbitCamera.prototype.reset=function(t,i,e){this.pitch=i,this.yaw=t,this.distance=e,this._removeInertia()},OrbitCamera.prototype.initialize=function(){var t=this,onWindowResize=function(){t._checkAspectRatio()};window.addEventListener("resize",onWindowResize,!1),this._checkAspectRatio(),this._modelsAabb=new pc.BoundingBox,this._buildAabb(this.focusEntity||this.app.root,0),this.entity.lookAt(this._modelsAabb.center),this._pivotPoint=new pc.Vec3,this._pivotPoint.copy(this._modelsAabb.center);var i=this.entity.getRotation();if(this._yaw=this._calcYaw(i),this._pitch=this._clampPitchAngle(this._calcPitch(i,this._yaw)),this.entity.setLocalEulerAngles(this._pitch,this._yaw,0),this._distance=0,this._targetYaw=this._yaw,this._targetPitch=this._pitch,this.frameOnStart)this.focus(this.focusEntity||this.app.root);else{var e=new pc.Vec3;e.sub2(this.entity.getPosition(),this._pivotPoint),this._distance=this._clampDistance(e.length())}this._targetDistance=this._distance,this.on("attr:distanceMin",(function(t,i){this._targetDistance=this._clampDistance(this._distance)})),this.on("attr:distanceMax",(function(t,i){this._targetDistance=this._clampDistance(this._distance)})),this.on("attr:pitchAngleMin",(function(t,i){this._targetPitch=this._clampPitchAngle(this._pitch)})),this.on("attr:pitchAngleMax",(function(t,i){this._targetPitch=this._clampPitchAngle(this._pitch)})),this.on("attr:focusEntity",(function(t,i){this.frameOnStart?this.focus(t||this.app.root):this.resetAndLookAtEntity(this.entity.getPosition(),t||this.app.root)})),this.on("attr:frameOnStart",(function(t,i){t&&this.focus(this.focusEntity||this.app.root)})),this.on("destroy",(function(){window.removeEventListener("resize",onWindowResize,!1)}))},OrbitCamera.prototype.update=function(t){var i=0===this.inertiaFactor?1:Math.min(t/this.inertiaFactor,1);this._distance=pc.math.lerp(this._distance,this._targetDistance,i),this._yaw=pc.math.lerp(this._yaw,this._targetYaw,i),this._pitch=pc.math.lerp(this._pitch,this._targetPitch,i),this._updatePosition()},OrbitCamera.prototype._updatePosition=function(){this.entity.setLocalPosition(0,0,0),this.entity.setLocalEulerAngles(this._pitch,this._yaw,0);var t=this.entity.getPosition();t.copy(this.entity.forward),t.scale(-this._distance),t.add(this.pivotPoint),this.entity.setPosition(t)},OrbitCamera.prototype._removeInertia=function(){this._yaw=this._targetYaw,this._pitch=this._targetPitch,this._distance=this._targetDistance},OrbitCamera.prototype._checkAspectRatio=function(){var t=this.app.graphicsDevice.height,i=this.app.graphicsDevice.width;this.entity.camera.horizontalFov=t>i},OrbitCamera.prototype._buildAabb=function(t,i){var e=0,a=0,n=null,s=[],r=t.findComponents("render");for(e=0;e<r.length;++e)for(n=r[e].meshInstances,a=0;a<n.length;a++)s.push(n[a]);var h=t.findComponents("model");for(e=0;e<h.length;++e)for(n=h[e].meshInstances,a=0;a<n.length;a++)s.push(n[a]);for(e=0;e<s.length;e++)0===i?this._modelsAabb.copy(s[e].aabb):this._modelsAabb.add(s[e].aabb),i+=1;return i},OrbitCamera.prototype._calcYaw=function(t){var i=new pc.Vec3;return t.transformVector(pc.Vec3.FORWARD,i),Math.atan2(-i.x,-i.z)*pc.math.RAD_TO_DEG},OrbitCamera.prototype._clampDistance=function(t){return this.distanceMax>0?pc.math.clamp(t,this.distanceMin,this.distanceMax):Math.max(t,this.distanceMin)},OrbitCamera.prototype._clampPitchAngle=function(t){return pc.math.clamp(t,-this.pitchAngleMax,-this.pitchAngleMin)},OrbitCamera.quatWithoutYaw=new pc.Quat,OrbitCamera.yawOffset=new pc.Quat,OrbitCamera.prototype._calcPitch=function(t,i){var e=OrbitCamera.quatWithoutYaw,a=OrbitCamera.yawOffset;a.setFromEulerAngles(0,-i,0),e.mul2(a,t);var n=new pc.Vec3;return e.transformVector(pc.Vec3.FORWARD,n),Math.atan2(n.y,-n.z)*pc.math.RAD_TO_DEG};var CustomShader=pc.createScript("customShader");CustomShader.attributes.add("vs",{type:"asset",assetType:"shader",title:"Vertex Shader"}),CustomShader.attributes.add("fs",{type:"asset",assetType:"shader",title:"Fragment Shader"}),CustomShader.attributes.add("usineColor",{type:"rgba",title:"Usine color"}),CustomShader.attributes.add("commercialColor",{type:"rgba",title:"Agence commercial color"}),CustomShader.attributes.add("rdColor",{type:"rgba",title:"R&D color"}),CustomShader.attributes.add("siegeColor",{type:"rgba",title:"Siege Social color"}),CustomShader.attributes.add("techniqueColor",{type:"rgba",title:"Centre technique color"}),CustomShader.attributes.add("usine",{type:"number",title:"Usine Number",default:.2}),CustomShader.attributes.add("commercial",{type:"number",title:"Agence commercial Number",default:.2}),CustomShader.attributes.add("rd",{type:"number",title:"R&D Number",default:.2}),CustomShader.attributes.add("siege",{type:"number",title:"Siege Social Number",default:.2}),CustomShader.attributes.add("technique",{type:"number",title:"Centre technique Number",default:.2}),CustomShader.prototype.initialize=function(){this.time=0;this.app;let e=(new pc.StandardMaterial).clone(this.entity.model.model.meshInstances[2].material);e.chunks.diffusePS=this.fs.resource,e.diffuseMap=new pc.Texture(this.app.graphicsDevice,{width:1,height:1,format:pc.PIXELFORMAT_R8_G8_B8}),e.setParameter("uUsineColor",new pc.Vec3(this.usineColor.r,this.usineColor.g,this.usineColor.b).data),e.setParameter("uCommercialColor",new pc.Vec3(this.commercialColor.r,this.commercialColor.g,this.commercialColor.b).data),e.setParameter("uRDColor",new pc.Vec3(this.rdColor.r,this.rdColor.g,this.rdColor.b).data),e.setParameter("uSiegeColor",new pc.Vec3(this.siegeColor.r,this.siegeColor.g,this.siegeColor.b).data),e.setParameter("uTechniqueColor",new pc.Vec3(this.techniqueColor.r,this.techniqueColor.g,this.techniqueColor.b).data),e.setParameter("uUsine",this.usine),e.setParameter("uCommercial",this.commercial),e.setParameter("uRD",this.rd),e.setParameter("uSiege",this.siege),e.setParameter("uTechnique",this.technique),e.update(),this.entity.model.model.meshInstances[2].material=e;let t=new pc.StandardMaterial;this.technique>0?t.diffuse.set(this.techniqueColor.r,this.techniqueColor.g,this.techniqueColor.b):this.siege>0?t.diffuse.set(this.siegeColor.r,this.siegeColor.g,this.siegeColor.b):this.rd>0?t.diffuse.set(this.rdColor.r,this.rdColor.g,this.rdColor.b):this.commercial>0?t.diffuse.set(this.commercialColor.r,this.commercialColor.g,this.commercialColor.b):t.diffuse.set(this.usineColor.r,this.usineColor.g,this.usineColor.b),t.update(),this.entity.model.model.meshInstances[0].material=t},CustomShader.prototype.update=function(e){},CustomShader.prototype.updateChiffre=function(e){};var Spawner=pc.createScript("spawner"),entityCount=150,radius=8.05,minScale=.1,maxScale=2.5;Spawner.prototype.initialize=function(){},Spawner.prototype.update=function(t){},Spawner.prototype.spawn=function(t){for(i=0;i<t.spots.length;i++){var a=this.app.assets.get(58515737).resource.instantiate(),o=t.spots[i].lat,e=t.spots[i].long,s=(90-o)*(Math.PI/180),r=(e+180)*(Math.PI/180),p=-radius*Math.sin(s)*Math.cos(r),n=radius*Math.sin(s)*Math.sin(r),c=radius*Math.cos(s);a.setLocalPosition(p,c,n),a.lookAt(new pc.Vec3(0,0,0)),a.rotateLocal(90,0,0);var l=t.spots[i].employee.map(t.minMax[0],t.minMax[1],minScale,maxScale);a.setLocalScale(.1,l,.1),a.name="Data-"+i,a.tags.add("data"),a.script.customShader.usine=t.spots[i].colorData.usine,a.script.customShader.commercial=t.spots[i].colorData.commercial,a.script.customShader.rd=t.spots[i].colorData.rd,a.script.customShader.siege=t.spots[i].colorData.siege,a.script.customShader.technique=t.spots[i].colorData.technique,a.dataStore=t.spots[i].datas,a.children[1].collision.halfExtents=new pc.Vec3(.1,l,.1),t.spots[i].employee>0&&this.app.root.addChild(a)}},Spawner.prototype.updateSpawned=function(t,a){console.log(t,a)},Number.prototype.map=function(t,a,o,e){return(this-t)*(e-o)/(a-t)+o},Spawner.prototype.Eerp=function(t,a,o){return t*Math.pow(a/t,o)};var uiEntity,Raycast=pc.createScript("raycast");Raycast.prototype.initialize=function(){uiEntity=this.app.root.findByName("ui"),this.entity.camera?(this.app.mouse.on(pc.EVENT_MOUSEDOWN,this.mouseDown,this),this.app.touch&&this.app.touch.on(pc.EVENT_TOUCHSTART,this.touchStart,this)):console.error("This script must be applied to an entity with a camera component.")},Raycast.prototype.mouseDown=function(t){this.doRaycast(t.x,t.y)},Raycast.prototype.touchStart=function(t){1===t.touches.length&&this.doRaycast(t.touches[0].x,t.touches[0].y),t.event.preventDefault()},Raycast.prototype.doRaycast=function(t,i){let a=this.entity.getPosition(),e=this.entity.camera.screenToWorld(t,i,this.entity.camera.farClip),o=this.app.systems.rigidbody.raycastFirst(a,e);if(o){let t=o.entity;"earth"!=t.name&&uiEntity.script.ui.select(t.parent.dataStore)}};var orbit,Ui=pc.createScript("ui");Ui.attributes.add("css",{type:"asset",assetType:"css",title:"CSS Asset"}),Ui.attributes.add("html",{type:"asset",assetType:"html",title:"HTML Asset"});var leftMove=!1,rightMove=!1,topMove=!1,bottomMove=!1,autoRotate=!0,autoRotateTimeout=null,speed=300;Ui.prototype.initialize=function(){var e=document.createElement("style");document.head.appendChild(e),e.innerHTML=this.css.resource||"",this.div=document.createElement("div"),this.div.classList.add("containerWebgl"),this.div.innerHTML=this.html.resource||"",pc.app.graphicsDevice.canvas.parentNode.appendChild(this.div),this.div.addEventListener("mousedown",(function(e){e.stopPropagation()})),this.initEventListener(),(orbit=this.app.root.findByName("Camera").script.orbitCamera).pitch-=15},Ui.prototype.select=function(e){var t=document.querySelector("#textrow"),o=document.querySelector(".dataContainer");o.innerHTML="";var i=document.importNode(t.content,!0);let r=0,a=0,n=0,s=0,c=0,l=0;for(let t=0;t<e.length;t++)if(e[t].employee>0)switch(r+=e[t].employee,e[t].site){case"SIEGE SOCIAL":l++,i.querySelector(".social").parentNode.style.display="block";break;case"USINE DE PRODUCTION":n++,i.querySelector(".usine").parentNode.style.display="block";break;case"CENTRE R&D":a++,i.querySelector(".rd").parentNode.style.display="block";break;case"CENTRE TECHNIQUE":s++,i.querySelector(".technique").parentNode.style.display="block";break;case"AGENCE COMMERCIALE":c++,i.querySelector(".agence").parentNode.style.display="block"}i.querySelector(".country").textContent=e[0].country,i.querySelector(".employee").textContent=r,i.querySelector(".usine").textContent=n,i.querySelector(".agence").textContent=c,i.querySelector(".rd").textContent=a,i.querySelector(".social").textContent=l,i.querySelector(".technique").textContent=s,o.appendChild(i)},Ui.prototype.initEventListener=function(){for(filter of(document.querySelector(".cam_left").addEventListener("mousedown",(function(e){leftMove=!0,autoRotate=!1,clearTimeout(autoRotateTimeout),e.stopPropagation()})),document.querySelector(".cam_right").addEventListener("mousedown",(function(e){rightMove=!0,autoRotate=!1,clearTimeout(autoRotateTimeout),e.stopPropagation()})),document.querySelector("body").addEventListener("mouseup",(function(e){leftMove=!1,rightMove=!1,topMove=!1,bottomMove=!1,autoRotateTimeout=setTimeout((function(){autoRotate=!0}),3e3)})),this.filters=document.querySelectorAll(".legend li"),this.filters))filter.addEventListener("click",(e=>{this.filterChange(e)}))},Ui.prototype.filterChange=function(e){let t=e.target;"span"==e.target.localName&&(t=e.target.parentNode),t.classList.toggle("inactive"),this.app.fire("filter:update",t.id,!t.classList.contains("inactive"))},Ui.prototype.update=function(e){leftMove?orbit.yaw-=e*speed:rightMove?orbit.yaw+=e*speed:topMove?orbit.pitch-=e*speed:bottomMove?orbit.pitch+=e*speed:autoRotate&&(orbit.yaw+=e)};var jsonReader=pc.createScript("csvReader"),jsonDataOriginal={},spotData={minMax:[],spots:[]};jsonReader.attributes.add("jsonFile",{type:"asset",assetType:"json"}),jsonReader.attributes.add("distanceMerge",{type:"number",default:1}),jsonReader.attributes.add("distanceOffset",{type:"number",default:1}),jsonReader.attributes.add("offset",{type:"number",default:1}),jsonReader.attributes.add("autoplay",{type:"boolean",default:!1}),jsonReader.prototype.initialize=function(){this.filter={usine:!0,commercial:!0,rd:!0,siege:!0,technique:!0},this.autoplay&&(jsonDataOriginal=this.jsonFile.resource,this.start()),this.app.on("set:json",(function(t){jsonDataOriginal=t,this.start()}),this),this.app.on("filter:update",this.updateSpot,this)},jsonReader.prototype.start=function(t=!1){let e=this.app.root.findByTag("data");if(e.length>0){for(let t=e.length-1;t>=0;t--)e[t].enabled=!1,e[t].destroy();spotData.spots=[]}if(this.mergeClose(jsonDataOriginal),this.findAverage(),this.offsetClose(),this.setColor(),!t){var s=this.minMax();spotData.minMax=[s.x,s.y]}this.entity.script.spawner.spawn(spotData)},jsonReader.prototype.mergeClose=function(t){let e=this.filterData(t.data);for(;e.length>0;){let t={employee:0,datas:[]};e[0].lat=parseFloat(e[0].lat),e[0].long=parseFloat(e[0].long),e[0].employee=parseInt(e[0].employee),t.datas.push(e[0]),t.employee=e[0].employee;for(let s=e.length-1;s>=0;s--)if(0!=s){new pc.Vec2(parseFloat(e[0].lat),parseFloat(e[0].long)).distance(new pc.Vec2(parseFloat(e[s].lat),parseFloat(e[s].long)))<this.distanceMerge&&e[0].country==e[s].country&&(e[s].lat=parseFloat(e[s].lat),e[s].long=parseFloat(e[s].long),e[s].employee=parseInt(e[s].employee),t.employee+=e[s].employee,t.datas.push(e[s]),e.splice(s,1))}e.splice(0,1),spotData.spots.push(t)}},jsonReader.prototype.filterData=function(t){let e=JSON.parse(JSON.stringify(t));for(let t=e.length-1;t>=0;t--)switch(e[t].site){case"USINE DE PRODUCTION":this.filter.usine||(e[t].employee=0);break;case"AGENCE COMMERCIALE":this.filter.commercial||(e[t].employee=0);break;case"CENTRE R&D":this.filter.rd||(e[t].employee=0);break;case"SIEGE SOCIAL":this.filter.siege||(e[t].employee=0);break;case"CENTRE TECHNIQUE":this.filter.technique||(e[t].employee=0)}return e},jsonReader.prototype.updateSpot=function(t,e){t=t.replace("Legend",""),this.filter[t]=e,this.start(!0)},jsonReader.prototype.findAverage=function(){for(i=0;i<spotData.spots.length;i++){let t=0,e=0;for(y=0;y<spotData.spots[i].datas.length;y++)t+=spotData.spots[i].datas[y].lat,e+=spotData.spots[i].datas[y].long;t/=spotData.spots[i].datas.length,e/=spotData.spots[i].datas.length,spotData.spots[i].lat=t,spotData.spots[i].long=e}},jsonReader.prototype.offsetClose=function(){for(i=0;i<spotData.spots.length;i++)for(y=0;y<spotData.spots.length;y++)if(y!=i){var t=new pc.Vec2(spotData.spots[i].lat,spotData.spots[i].long),e=new pc.Vec2(spotData.spots[y].lat,spotData.spots[y].long);if(t.distance(e)<this.distanceOffset){let s=t.sub(e);s.normalize(),spotData.spots[i].lat+=s.x*this.offset/2,spotData.spots[i].long+=s.y*this.offset/2,spotData.spots[y].lat-=s.x*this.offset/2,spotData.spots[y].long-=s.y*this.offset/2}}},jsonReader.prototype.setColor=function(){for(i=0;i<spotData.spots.length;i++){let t={usine:0,commercial:0,rd:0,siege:0,technique:0};for(y=0;y<spotData.spots[i].datas.length;y++){let e=spotData.spots[i].datas[y].employee/spotData.spots[i].employee;switch(spotData.spots[i].datas[y].site){case"USINE DE PRODUCTION":t.usine+=e;break;case"AGENCE COMMERCIALE":t.commercial+=e;break;case"CENTRE R&D":t.rd+=e;break;case"SIEGE SOCIAL":t.siege+=e;break;case"CENTRE TECHNIQUE":t.technique+=e}}spotData.spots[i].colorData=t}},jsonReader.prototype.minMax=function(){let t=new pc.Vec2(99999,0);for(i=0;i<spotData.spots.length;i++)spotData.spots[i].employee<t.x&&(t.x=spotData.spots[i].employee),spotData.spots[i].employee>t.y&&(t.y=spotData.spots[i].employee);return t},jsonReader.prototype.getData=()=>jsonData;pc.script.createLoadingScreen((function(c){}));

//# sourceMappingURL=__game-scripts.js.map