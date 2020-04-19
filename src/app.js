const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT|| 3000;
const hbs = require('hbs')
const serverData = require('../Apicall/totalCases')

//customize server to serve the staic file
const publicDirectryPath = path.join(__dirname,'../public/')
app.use(express.static(publicDirectryPath))

app.set('view engine','hbs')

const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Index page'
    })
})

app.get('/corona',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"You must provide address"
        })
    }
    serverData(req.query.address,(error,data)=>{
        if(error){
            res.send(error);
        }else{
            res.send(data)
        }

    })
})

app.get('/staysafe',(req,res)=>{
    res.render('staysafe')
    
    

})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log('app is running at port',port)
})
