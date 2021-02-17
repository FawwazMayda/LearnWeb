"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(9000, function () {
    console.log("Listening at port 9000");
});
app.get('/', function (req, res) {
    console.log(req.params);
    console.log(req.body);
    res.send("<h1>Hello Ball</h1>").status(200);
});
app.get("/contact", function (req, res) {
    res.status(200).send("Contact Me : countryball@gmail.com");
});
app.get('/about', function (req, res) {
    res.status(200).send("i Love Coding and CountryBalls");
});
