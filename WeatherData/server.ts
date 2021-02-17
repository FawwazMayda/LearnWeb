import express from 'express'
import * as https from 'https'
import * as bp from 'body-parser'
const app = express()

app.listen(3000,()=>{console.log("Port 3000")})
app.use(bp.urlencoded({extended: true}))

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.post("/city",(req,res)=> {
    console.log("Get post body")
    console.log(req.body)
    let cityName = req.body['cityName']
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a8d5b89bde701e75575a77511ea76e9a`
    https.get(url,(resp)=> {
        resp.on('data',(data)=> {
            const weatherJson = JSON.parse(data)
            //console.log(weatherJson)
            let countyCode = weatherJson.sys.country
            let icon = weatherJson.weather[0].icon
            const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<h1>Weather in: ${cityName} (${countyCode})</h1>`)
            res.write(`<img alt="icon" src=${imgUrl}>`)
            res.write(`<p>Weather is: ${weatherJson.weather[0].description}</p>`)
            res.send()
        })

        resp.on('error',(e)=> {
            res.send("<h1>Can't get weather data</h1>")
        })
    })
})
