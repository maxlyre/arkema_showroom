import { createApp } from "vue";
import App from "./App.vue";
const { ipcRenderer } = require('electron');
// import urql from '@urql/vue';

// app.use(urql, {
//     url: 'http://localhost:1337/graphql',
//   });

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

app.config.globalProperties.$APIURL = globalGonfig.backofficeURL

const client = createClient({
    url: globalGonfig.backofficeURL+'/graphql',
});

client
  .query(TodosQuery, { id: 'test' })
  .toPromise()
  .then(result => {
    app.config.globalProperties.$jsonData = sortData(result); // { data: ... }
    app.mount("#app");
});

function sortData(data){
  let bufData = {}
  //Wall 
  bufData.homeBackgroundVideo = data.data.wallNavigation.data.attributes.homeBackgroundVideo;
  bufData.wallNavigation = data.data.wallNavigation.data.attributes.wall_group;
  bufData.walls = {};
  data.data.walls.data.forEach((item)=>{
    bufData.walls[item.id] = item
  })
  // bufData.walls = data.data.walls.data;
  return bufData;
}


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

const click = (x, y) => {
  const ev = document.createEvent("MouseEvent");
  const el = document.elementFromPoint(x, y);
  ev.initMouseEvent(
    "click",
    true /* bubble */,
    true /* cancelable */,
    window,
    null,
    x,
    y,
    x,
    y /* coordinates */,
    false,
    false,
    false,
    false /* modifier keys */,
    0 /*left*/,
    null
  );
  el.dispatchEvent(ev);
};

ipcRenderer.on('tuioDelete', (event, element) => { // IPC event listener
  let pointer = pointerList[element.sessionId];
  // click( window.innerWidth * element.xPosition, window.innerHeight * element.yPosition);
  pointer.remove();
  delete  pointerList[element.sessionId];
});

document.addEventListener('click',function(e){
  console.log("clock",e)
})
