'use strict';

const{ users } = require('../models/users');
const base64 = require('base-64');

async function basic (req, res, next) {
    if (req.headers.authorization) {
        let basicHeaderParts = req.headers.authorization.split(" ");
        let encodedString = basicHeaderParts.pop();
        let decodedString = base64.decode(encodedString);
       
        let [username, password] = decodedString.split(":");
        users.authenticateBasic(username, password)
            .then((validUser) => {
                req.user = validUser;
           
                next();
            })
            .catch((err) => {
                next("Invalid Signin");
            })
    }
}

module.exports = basic;