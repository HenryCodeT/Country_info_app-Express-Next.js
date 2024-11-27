// Routers
const CountryRouter = require('./country.routes');

function routes(app) {
  // Routes
  app.use('/api/country', CountryRouter);
}

module.exports = routes;
