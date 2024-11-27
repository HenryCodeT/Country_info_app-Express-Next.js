const express = require('express');
const CountryRouter = express.Router();
const CountryController = require('../controllers/country.controller');
console.log("*********************** 5-pirate-routes ***********************");

CountryRouter.get('/countries', CountryController.getAvailableCountries);
CountryRouter.get('/country/:code', CountryController.getCountryInfo);


module.exports = CountryRouter;
console.log("----------------------- 5-review-routes -----------------------");