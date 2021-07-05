'use strict';


const digimonCrud = require('../models/digimonCrudModel');


const createNewItem = async (req, res) => {
    const {
        name,
        img,
        level
    } = req.body;
    digimonCrud.find({ name: name }, (error, data) => {
        if (data.length > 0) {
            res.send("we have it")
        } else {
            const newDigimonCrud = new digimonCrud({
                name: name,
                img: img,
                level: level
            })
            newDigimonCrud.save();
            res.send(newDigimonCrud)
        }
    })

}

const getNewItem = async (req, res) => {

    digimonCrud.find({}, (error, data) => {
        res.send(data);
    })

}

const deleteNewItem = async (req, res) => {
    const name = req.params.name;
    digimonCrud.deleteOne({ name: name }, (error, data) => {
        if (error) {
            res.send('we have error')
        } else {
            digimonCrud.find({}, (error, data) => {
                res.send(data);
            })
        }
    })
}

const updateNewItem = async (req, res) => {
    const name = req.params.name;
    const { level } = req.body;
    digimonCrud.findOne({ name: name }, (error, data) => {
     if(error){
         res.send(error)
     }else{
         data.level=level,
         data.save().then(()=>{
            digimonCrud.find({}, (error, data) => {
                res.send(data);
            })
         })         


     }

    })
}


module.exports = {
    createNewItem,
    getNewItem,
    deleteNewItem,
    updateNewItem
}