

const url = 'https://restcountries.eu/rest/v2/name/nepal'


fetch(url).then((responses)=>{
    responses.json().then((data)=>{
        console.log(data)
    })
})