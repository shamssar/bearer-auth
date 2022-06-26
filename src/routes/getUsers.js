'use strict';
const express = require('express');
const getUsersRouter=express.Router();
const { users }=require('../models/users');
const bearerAuth = require('../middlewares/bearer');

getUsersRouter.get('/users',bearerAuth,async(req,res,next)=>{
    try {
        const userRecords = await users.findAll();
        res.status(200).json(userRecords);
      } catch (e) {
        console.error(e);
        next(e);
      }
})

module.exports=getUsersRouter;