const request = require('request')

const gobalCases = (callback)=>{
 const url = `https://covid19.mathdro.id/api`;

   request({url:url,json:true},(error,response)=>{

    if(error){
        callback('Connetion error',undefined)
        
    }else{
        callback(undefined,{
            confirmedGlobal: response.body.confirmed.value,
            deathGlobal: response.body.deaths.value,
            recoveredGlobal:response.body.recovered.value
        })

    }
       

    
   })    
}


module.exports = gobalCases

// coronavirusdeath('Nepal',(totalcase,recovered,death)=>{
//   console.log('Total care in nepal is '+totalcase,'toatl recovered'+recovered,'total gobal death is'+ death)
// })

