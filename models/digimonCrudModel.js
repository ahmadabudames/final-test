'use strict';


const mongoose = require('mongoose')

const digimonSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    img:String,
    level:String

})

const schemaModel=mongoose.model('digimon_pecies',digimonSchema);

module.exports=schemaModel;