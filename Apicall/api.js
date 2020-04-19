const request = require('request')


const url = 'https://restcountries.eu/rest/v2/name/nepal'

request({url:url,json:true},(error,response)=>{
    if(error){
        return console.log(error)
    }

    console.log(response.body[0].alpha2Code)

})