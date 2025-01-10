/*
Title: Utilities
Description: Important utility fucntions

*/

// dependencies

// module scaffolding
const crypto = require('crypto');
const environments = require('./environments');

const Utilities = {};

// parse JSON string to Object
Utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// hash string
Utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

// export module

module.exports = Utilities;
