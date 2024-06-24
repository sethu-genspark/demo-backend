
const demoModel = require('../models/demoModel')

const getDemoData = async(request, response) => {
    try{
        const cities = await demoModel.find()
        response.status(200).json(cities)
    }
    catch(error){
        response.status(500).send({message:error.message})
    }
}


module.exports = {getDemoData}