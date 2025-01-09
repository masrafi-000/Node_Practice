/*
Title: Not Found Handler
Description: 404 Not Found Handler
*/

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('Not Found');
    callback(404, {
        message: 'Your requested URL not found',
    });
};

module.exports = handler;
