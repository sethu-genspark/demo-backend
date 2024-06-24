const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema(
    {
        id : {
            type: Number,
            required:true,
            unique:true
        },
        cityName : {
            type:String,
            required: true
        },
        stateName : {
            type:String,
            required:true
        },
        pinCode : {
            type:Number,
            required : true,
            unique:true,
            min:100000,
            max:999999
        }
    },
    {
        collection : 'city'
    }
)

module.exports = mongoose.model('city', demoSchema)