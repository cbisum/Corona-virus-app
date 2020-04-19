
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const displayName = document.querySelector('#viewCountry')

const displaytotal = document.querySelector('#viewtotal')
const displayrecovered = document.querySelector('#viewrecovered')
const displayactive = document.querySelector('#viewactive')
const displaydeath = document.querySelector('#viewdeath')
const displayImg = document.querySelector('img')

window.addEventListener('load',(e)=>{
    e.preventDefault()
    fetch(`https://covid19.mathdro.id/api`).then((resp)=>{
        resp.json().then((data)=>{
            displaytotal.innerText = data.confirmed.value;
            displayrecovered.innerText = data.recovered.value
            displayactive.innerText = data.confirmed.value-data.recovered.value
            displaydeath.innerText = data.deaths.value


            
            
        })
    })


})




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    // lebeldata.innerText ='Loading...'

    const location = search.value 
    if(!location){
        return alert('location cant be undefined')
    }





    
    fetch(`http://localhost:3000/corona?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                alert(data.error)
            }else{
                displayName.innerText = 'Country: '+location
                displaytotal.innerText= data.confirmedCountry
                displayrecovered.innerText = data.recoveredCountry
                displaydeath.innerText = data.deathCountry
                displayactive.innerText =data.confirmedCountry-data.recoveredCountry
            }
    
        })
    })


   
fetch(`https://restcountries.eu/rest/v2/name/${location}`
).then((responses)=>{
    responses.json().then((data)=>{
        const shortName = data[0].alpha2Code
        displayImg.src = `https://www.countryflags.io/${shortName}/flat/64.png`


    })
})




    
})









  














