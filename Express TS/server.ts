import express from 'express'
let app = express()

app.listen(9000,()=> {
    console.log("Listening at port 9000")
})

app.get('/',(req,res)=> {
    console.log(req.params)
    console.log(req.body)
    res.send("<h1>Hello Ball</h1>").status(200)
})

app.get("/contact",(req,res)=> {
    res.status(200).send("Contact Me : countryball@gmail.com")
})

app.get('/about',(req,res)=> {
    res.status(200).send("i Love Coding and CountryBalls")
})