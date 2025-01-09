/*
Title: Routes
Des: Application Routes
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/smapleHander');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
