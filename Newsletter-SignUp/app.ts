import express from 'express'
import * as bp from 'body-parser'

const app = express()
app.use(bp.urlencoded({extended: true}))

app.listen(3000,()=>{console.log("Server at: 3000")})