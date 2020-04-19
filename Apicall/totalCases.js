const request = require('request')

const totalConfirmed= (address,callback)=>{
 const url = `https://covid19.mathdro.id/api/countries/${address}`;

   request({url:url,json:true},(error,response)=>{
     if(error){
       callback('Couldnt fetch the data',undefined)
     }else{
       callback(undefined,{
         countryName:address,
        confirmedCountry: response.body.confirmed.value,
        deathCountry: response.body.deaths.value,
        recoveredCountry:response.body.recovered.value,
        
       })
     }
    
   })    
}


module.exports = totalConfirmed


