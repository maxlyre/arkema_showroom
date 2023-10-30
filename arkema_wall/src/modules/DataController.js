import 'isomorphic-unfetch';
import { gql,createClient } from '@urql/core';
const EventEmitter = require('events').EventEmitter;
const fs = require("fs-extra");
const axios = require('axios');

const contentQuery = gql`
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
                ChineseTitle
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
                                locale
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

const timeQuery  = gql`
    query  {
        wallNavigation{
            data{
                id
                attributes{
                    updatedAt
                }
                
            }
        }
        walls(pagination: { start: 0, limit: 100 },locale:"all"){
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
        let filename = str.match(/\b[^/\s]+\.(?:jpeg|jpg|png|mp4|tsv|svg|webm)/g);

        await this.downloadMedia(filename);

        let newJson = await str.replaceAll("/uploads/","datas/files/")
        newJson = newJson.replaceAll('http://localhost:1338datas','datas')
        newJson = newJson.replaceAll(this.url+'datas','datas');
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
