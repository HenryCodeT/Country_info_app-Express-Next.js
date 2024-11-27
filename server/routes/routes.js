// Routers
const CountryRouter = require('./country.routes');

console.log("******************** 6-all-routes ********************");
function routes(app) {
  // Routes
  app.use('/api/country', CountryRouter);
}

module.exports = routes;
console.log("-------------------- 6-all-routes --------------------");
