import { createApp } from "vue";
import App from "./App.vue";


const electronEnv = globalGonfig.electronEnv;

import { gql,createClient  } from '@urql/core';
const TodosQuery = gql`
  query  {
    wallNavigation{
      data{
        id
        attributes{
          homeBackgroundVideo{
            data{
              attributes{
                url
              }
            }
          }
          wall_group{
            Title
            EnglishTitle
            positionX
            positionY
            videoTransition{
              data{
                attributes{
                  url
                }
              }
            }
            videoBackground{
              data{
                attributes{
                  url
                }
              }
            }
            menu_entry{
							wall{
                data{
                  id
                  attributes{
                    Title
                    localizations {
                      data{
                        id
                        attributes{
                          Title
                        }
                      }
                    }
                	}
                }
              }
            }

          }
        }
      }
    }
    walls(pagination: { start: 0, limit: 100 },locale:"all"){
      data{
        id
        attributes{
          Title
          Contenu{
            __typename
            ...on ComponentWallComponentText {
              Text
              column
            }
            ...on ComponentWallComponentGallerie {
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
              column
              position
              slidesPerView
            }
            ...on ComponentWallComponentPlanete {
              PlanetCSV{
                data{
                  attributes{
                    url
                  }
                }
              }
              column
            }
            ...on ComponentWallComponentCamembert {
              Titre
              pourcentages{
                Titre
                pourcentage
                hexColor
              }
              pourcentage_externe{
                Titre
                pourcentage
                hexColor
              }
              column
            }
          }
        }
      }
    }
  }
`;


const app = createApp(App);

app.config.globalProperties.$APIURL = ""
app.config.globalProperties.$ELECTRONENV = electronEnv

function sortData(data){

  let bufData = {}
  //Wall 
  bufData.homeBackgroundVideo = data.wallNavigation.data.attributes.homeBackgroundVideo;
  bufData.wallNavigation = data.wallNavigation.data.attributes.wall_group;
  bufData.walls = {};
  data.walls.data.forEach((item)=>{
    bufData.walls[item.id] = item
  })
  // bufData.walls = data.data.walls.data;
  return bufData;
}

if(!electronEnv){
  // FOR WEB CONTENT
  app.config.globalProperties.$APIURL = globalGonfig.backofficeURL

  const client = createClient({
      url: globalGonfig.backofficeURL+'/graphql',
  });

  client
    .query(TodosQuery, { id: 'test' })
    .toPromise()
    .then(result => {
      app.config.globalProperties.$jsonData = sortData(result.data); // { data: ... }
      app.mount("#app");
  });
}else{
  const { ipcRenderer } = require('electron');

  var pointerList = {}
  
  ipcRenderer.on('tuioAdd', (event, element) => { // IPC event listener
    let pointer = document.createElement("div");
    pointer.classList.add('pointer')
    pointer.style.left = window.innerWidth * element.xPosition+"px";
    pointer.style.top = window.innerHeight * element.yPosition+"px";
    document.body.appendChild(pointer);
    pointerList[element.sessionId] = pointer;
  });
  ipcRenderer.on('tuioUpdate', (event, element) => { // IPC event listener
    let pointer = pointerList[element.sessionId];
    pointer.style.left = window.innerWidth * element.xPosition+"px";
    pointer.style.top = window.innerHeight * element.yPosition+"px";
  });
  
  ipcRenderer.on('tuioDelete', (event, element) => { // IPC event listener
    let pointer = pointerList[element.sessionId];
    document.elementFromPoint(parseInt(pointer.style.left.replace('px','')), parseInt(pointer.style.top.replace('px',''))).click();
    document.body.dispatchEvent(new PointerEvent("simuleClick",{clientX:parseInt(pointer.style.left.replace('px','')),clientY:parseInt(pointer.style.top.replace('px',''))}));
    pointer.remove();
    delete  pointerList[element.sessionId];
    
  });

  ipcRenderer.on('initData', (event, result) => { // IPC event listener
      app.config.globalProperties.$jsonData = sortData(result); 
      document.querySelector('.message').remove()
      app.mount("#app");
  });
  
  ipcRenderer.on('error', (event) => { // IPC event listener
    document.querySelector('.message h2').innerHTML = "Erreur<br> Vérifiez votre connexion internet"
  
  });
  
  ipcRenderer.on('console', (event, result) => { // IPC event listener
    console.log(result)
  });
  
  document.onkeyup = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      ipcRenderer.send('close-me')
    }
  };
}






