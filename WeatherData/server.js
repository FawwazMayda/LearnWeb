"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var https = __importStar(require("https"));
var bp = __importStar(require("body-parser"));
var app = express_1.default();
app.listen(3000, function () { console.log("Port 3000"); });
app.use(bp.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/city", function (req, res) {
    console.log("Get post body");
    console.log(req.body);
    var cityName = req.body['cityName'];
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a8d5b89bde701e75575a77511ea76e9a";
    https.get(url, function (resp) {
        resp.on('data', function (data) {
            var weatherJson = JSON.parse(data);
            //console.log(weatherJson)
            var countyCode = weatherJson.sys.country;
            var icon = weatherJson.weather[0].icon;
            var imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>Weather in: " + cityName + " (" + countyCode + ")</h1>");
            res.write("<img alt=\"icon\" src=" + imgUrl + ">");
            res.write("<p>Weather is: " + weatherJson.weather[0].description + "</p>");
            res.send();
        });
        resp.on('error', function (e) {
            res.send("<h1>Can't get weather data</h1>");
        });
    });
});
