import express from 'express'
import * as bp from 'body-parser'
const app = express()

app.use(express.static('public'))
app.use(bp.urlencoded({extended: true}))
app.listen(3000)

app.get("/",(req,res)=> {
    //res.status(200).send("Hello Ball")
    console.log(__dirname)
    res.status(200).sendFile(__dirname+"/public/index.html")
})

app.get("/ball",(req,res)=> {
    //res.status(200).send("Hello Ball")
    console.log(__dirname)
    res.status(200).sendFile(__dirname+"/public/ballCalculator.html")
})

app.get("/bmi",(req,res)=> {
    res.status(200).sendFile(__dirname+"/public/bmiCalculator.html")
})

app.post("/in",(req,res)=> {
    console.log(req.body)
    let num1:number = Number(req.body['num1'])
    let num2:number = Number(req.body['num2'])
    res.status(200).send(`Total Titan to be killed is: ${num1 + num2}`)
})

app.post("/bmiCalculatorPost",(req,res)=> {
    console.log(req.body)
    let weight:number = Number(req.body['weight'])
    let heightinCm:number = Number(req.body['height'])
    let heightInM:number = heightinCm/100.0
    res.status(200).send(`BMI is: ${(weight)/(heightInM * heightInM)}`)
})