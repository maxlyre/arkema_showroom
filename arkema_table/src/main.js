import { createApp } from "vue";
import App from "./App.vue";


import { gql,createClient  } from '@urql/core';
const TodosQuery = gql`
query  {
  tables(pagination: { start: 0, limit: 100 },locale:"all"){
      data{
          id
          attributes{
              Product
              Thumbnail{
                data{
                  attributes{
                    url
                  }
                }
              }
              Title
              Subtitle
              background_sound{
                data{
                  attributes{
                    url
                  }
                }
              }
              Background_loop
              Infographics_excerpt
              Infographics_video{
                data{
                  attributes{
                    url
                  }
                }
              }
              data_block{
                id
                Bullet_X
                Bullet_Y
                Title
                Text
                Extra_text
                Media{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
              Widgets{
                __typename
                 ...on ComponentTableComponentsWidgets {
                  Title
                  Logos{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
                ...on ComponentTableComponentsQuizz {
                  Questions{
                    Question
                    Answer_A
                    Answer_B
                    Actual_answer
                    Answer_color
                    Answer_text
                    Media{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                  }
                }

                ...on ComponentTableComponentsVideo {
                  Title
                  Subtitle
                  Call_to_action
                  Video_slide{
                    Title
                    Subtitle
                    Video{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                    Poster{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                }
              }  
                ...on ComponentTableComponentsArticles {
                  Article{
                    Title
                    Text
                    Media{
                      data{
                        attributes{
                          url
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
`;


const app = createApp(App);

app.config.globalProperties.$APIURL = ""


function sortData(data){
  let bufData = []
  data.tables.data.forEach((item)=>{
    bufData.push(item)
  })
  // bufData.walls = data.data.walls.data;
  return bufData;
}

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
     console.log(app.config.globalProperties.$jsonData)
    app.mount("#app");
});

//END WEB CONTENT





// const { ipcRenderer } = require('electron');

// var pointerList = {}

// ipcRenderer.on('tuioAdd', (event, element) => { // IPC event listener
//   let pointer = document.createElement("div");
//   pointer.classList.add('pointer')
//   pointer.style.left = window.innerWidth * element.xPosition+"px";
//   pointer.style.top = window.innerHeight * element.yPosition+"px";
//   document.body.appendChild(pointer);
//   pointerList[element.sessionId] = pointer;
// });
// ipcRenderer.on('tuioUpdate', (event, element) => { // IPC event listener
//   let pointer = pointerList[element.sessionId];
//   pointer.style.left = window.innerWidth * element.xPosition+"px";
//   pointer.style.top = window.innerHeight * element.yPosition+"px";
// });

// ipcRenderer.on('tuioDelete', (event, element) => { // IPC event listener
//   let pointer = pointerList[element.sessionId];
//   pointer.remove();
//   delete  pointerList[element.sessionId];
// });

// ipcRenderer.on('initData', (event, result) => { // IPC event listener
//     app.config.globalProperties.$jsonData = sortData(result); 
//     document.querySelector('.message').remove()
//     app.mount("#app");
// });

// ipcRenderer.on('error', (event) => { // IPC event listener
//   document.querySelector('.message h2').innerHTML = "Erreur<br> Vérifiez votre connexion internet"

// });

// ipcRenderer.on('console', (event, result) => { // IPC event listener
//   console.log(result)
// });

// document.onkeyup = function(evt) {
//   evt = evt || window.event;
//   var isEscape = false;
//   if ("key" in evt) {
//       isEscape = (evt.key === "Escape" || evt.key === "Esc");
//   } else {
//       isEscape = (evt.keyCode === 27);
//   }
//   if (isEscape) {
//     ipcRenderer.send('close-me')
//   }
// };