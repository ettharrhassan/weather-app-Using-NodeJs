const request = require('request');

const forecast=require('../tools/forecast');

const geoCode=require('../tools/geocode');

geoCode(process.argv[2],(error,data)=>{
    
    if(error){
        return console.log(error)
    }

    forecast(data.latitude,data.longtitude,(errorCallBack,dataCallBack)=>{
        if(errorCallBack){
            return console.log(errorCallBack)
        }
        console.log(dataCallBack);
        });
    });
