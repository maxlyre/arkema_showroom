import 'isomorphic-unfetch';
import { gql,createClient } from '@urql/core';
const EventEmitter = require('events').EventEmitter;
const fs = require("fs-extra");
const axios = require('axios');

const contentQuery = gql`
query  {
    tables(pagination: { start: 0, limit: 100 },locale:"all",sort: "id:desc"){
        data{
            id
            attributes{
                locale
                localizations{
                    data{
                      id
                    }
                }
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
                    Title
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
                    Title
                    article_post{
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
    tableNavigation{
      data{
          attributes{
              MenuTable{
                table{
                  data{
                    id
                    attributes{
                      localizations{
                        data{
                          id
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

const timeQuery  = gql`
    query  {
        tables(pagination: { start: 0, limit: 100 },locale:"all"){
        data{
            id
            attributes{
                updatedAt
            }
        }
    }
    }
`;

export class DataController{
    constructor(url){
        //Event var
        this.event  = new EventEmitter();
        this.url = url;
        this.filesToGet = []
        //Get data lastUpdate
        this.client = createClient({
            url: url+'/graphql',
        });
        
    }
    async initController(){
        this.localData = await this.getJsonData()
        await this.client
        .query(timeQuery, { id: 'test' })
        .toPromise()
        .then(async result => {
            if(result.error == undefined){
                await this.event.emit('dataGetted');
                await this.setTimeData(result)
            }else{
                if(this.localData.datas != undefined){
                    await this.event.emit('setData',this.localData.datas);
                }else{
                    await this.event.emit('error');
                }
                
            }
        });


    }
    async setTimeData(result){
        if(this.localData.lastUpdate == undefined){
            //If no local data
            this.localData.lastUpdate = result.data;
            await this.saveJsonData(this.localData);
            await this.getOnlineData();
        }else{
            let offline =  JSON.stringify(this.localData.lastUpdate)
            let online = JSON.stringify(result.data)
            //If new data
            if(offline !== online){
                this.localData.lastUpdate = result.data;
                await this.saveJsonData(this.localData);
                await this.getOnlineData();
            }else{
                //If no new data
                
                await this.event.emit('setData',this.localData.datas);
            }
        }
    }
    async getOnlineData(){
        await this.client
        .query(contentQuery, { id: 'test' })
        .toPromise()
        .then(result => {this.modifyData(result)});
    }
    async modifyData(result){   
        let str = JSON.stringify(result.data);
        let filename = str.match(/\b[^/\s]+\.(?:jpeg|jpg|png|mp4|tsv|svg|webm|mp3)/g);

        await this.downloadMedia(filename);

        let newJson = await str.replaceAll("/uploads/","datas/files/")
        this.localData.datas = await JSON.parse(newJson);

        await this.saveJsonData(this.localData);
        await this.event.emit('setData',this.localData.datas);
    }
    async downloadMedia(files){
        await fs.emptyDir(__static+"/datas/files")
        for(let i=0;i<files.length;i++){
            console.log(files[i])
            try {
                let path = __static+"/datas/files/"+files[i]
                const response = await axios({
                    method: "get",
                    url:this.url+"/uploads/"+files[i],
                    responseType: "stream"
                })

                await response.data.pipe(fs.createWriteStream(path));
                // console.log("downloaded :" +files[i])
            } catch (error) {
                console.log(error.response.body);
            }
                
        }
    }

    async getJsonData(){
        let rawdata = fs.readFileSync(__static+'/datas/localdb.json');
        return JSON.parse(rawdata);
    }
    async saveJsonData(localData){
        let data = JSON.stringify(localData);
        fs.writeFileSync(__static+'/datas/localdb.json', data);
        console.log("SAVE JSON")
    }

}
