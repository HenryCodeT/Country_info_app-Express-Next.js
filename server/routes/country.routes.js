const express = require('express');
const CountryRouter = express.Router();
const CountryController = require('../controllers/country.controller');

CountryRouter.get('/countries', CountryController.getAvailableCountries);
CountryRouter.get('/country/:code', CountryController.getCountryInfo);


module.exports = CountryRouter;