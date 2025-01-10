/*
Title: Routes
Des: Application Routes
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/smapleHander');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
