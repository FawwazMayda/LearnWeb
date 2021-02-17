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
var bp = __importStar(require("body-parser"));
var app = express_1.default();
app.use(express_1.default.static('public'));
app.use(bp.urlencoded({ extended: true }));
app.listen(3000);
app.get("/", function (req, res) {
    //res.status(200).send("Hello Ball")
    console.log(__dirname);
    res.status(200).sendFile(__dirname + "/public/index.html");
});
app.get("/ball", function (req, res) {
    //res.status(200).send("Hello Ball")
    console.log(__dirname);
    res.status(200).sendFile(__dirname + "/public/ballCalculator.html");
});
app.get("/bmi", function (req, res) {
    res.status(200).sendFile(__dirname + "/public/bmiCalculator.html");
});
app.post("/in", function (req, res) {
    console.log(req.body);
    var num1 = Number(req.body['num1']);
    var num2 = Number(req.body['num2']);
    res.status(200).send("Total Titan to be killed is: " + (num1 + num2));
});
app.post("/bmiCalculatorPost", function (req, res) {
    console.log(req.body);
    var weight = Number(req.body['weight']);
    var heightinCm = Number(req.body['height']);
    var heightInM = heightinCm / 100.0;
    res.status(200).send("BMI is: " + (weight) / (heightInM * heightInM));
});
