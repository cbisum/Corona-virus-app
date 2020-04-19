const request = require('request')

const coronavirusdeath = (address,callback)=>{
 const url = `https://covid19.mathdro.id/api`;

   request({url:url,json:true},(error,response)=>{
       
    let deathValue = response.body.deaths.value
    let totalConfirmed =  response.body.confirmed.value
    let totalRecovered = response.body.recovered.value
    callback(totalConfirmed,totalRecovered,deathValue)
    
   })    
}


module.exports = coronavirusdeath

coronavirusdeath('Nepal',(totalcase,recovered,death)=>{
  console.log('Total care in nepal is '+totalcase,'toatl recovered'+recovered,'total gobal death is'+ death)
})

