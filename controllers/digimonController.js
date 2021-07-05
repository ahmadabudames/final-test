'use strict';

const axios=require('axios');


const getDataDigimon=async(req,res)=>{
    axios.get('https://digimon-api.vercel.app/api/digimon').then(response=>{
        res.send(response.data)
    }).catch(error=>{
        console.log('we have error');
        console.log(error);
    })
}

module.exports={
    getDataDigimon
}