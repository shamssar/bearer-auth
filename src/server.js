'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const signinRouter=require("./routes/signin");
const signupRouter=require("./routes/signup");
const secretStuffRouters=require("./routes/secretstuff");
const getUsersRouter=require("./routes/getUsers");

app.use(express.json());
app.use(signinRouter);
app.use(signupRouter);
app.use(secretStuffRouters);
app.use(getUsersRouter);

app.use("*", notFoundHandler);
app.use(errorHandler); 

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};