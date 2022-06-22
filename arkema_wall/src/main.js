import { createApp } from "vue";
import App from "./App.vue";
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
            walls_items{
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







