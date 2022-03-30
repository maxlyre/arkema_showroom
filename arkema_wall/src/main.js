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
          wall_group{
            Title
            walls_items{
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
    walls(pagination: { start: 0, limit: 100 }){
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
            }
            ...on ComponentWallComponentPlanete {
              PlanetJson{
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

app.config.globalProperties.$APIURL = "http://localhost:1337"

const client = createClient({
    url: 'http://localhost:1337/graphql',
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
  bufData.wallNavigation = data.data.wallNavigation.data.attributes.wall_group;
  console.log(data.data.walls.data)
  bufData.walls = {};
  data.data.walls.data.forEach((item)=>{
    bufData.walls[item.id] = item
  })
  console.log(bufData.walls)
  // bufData.walls = data.data.walls.data;
  return bufData;
}







