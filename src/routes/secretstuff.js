'use strict';
const express = require('express');
const secretStuffRouters=express.Router();
const bearer=require('../middlewares/bearer');

secretStuffRouters.get('/secretstuff',bearer,(req,res)=>{
    res.status(200).json({
        'message': 'You are authorized to view the user orders',
        'user': req.user
    });})



module.exports=secretStuffRouters;