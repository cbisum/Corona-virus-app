// let deathvalue = require('./playground/callback')
let global = require('./Apicall/globalrequest')
let country = require('./Apicall/totalCases')



let countryName  =process.argv[2]
if(!countryName){
   return console.log('Please provide as address')
}{
   country(countryName,(error,data)=>{
      if(error){
         console.log(error)
      }else{
         console.log(data)
      }
   
   })   

}

