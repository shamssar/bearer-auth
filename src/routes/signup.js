'use steict';
const express = require('express');
const bcrypt = require('bcrypt');
const signUpRouter = express.Router();


const { users } = require('../models/users');

signUpRouter.get('/',(req,res)=>{
    res.send("welcome to home page");
})



signUpRouter.post('/signup',async(req,res)=>{
  try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const record = await users.create(req.body);
      res.status(201).json(record);
    } catch (e) { res.status(500).send('Error Creating User'); }

})

module.exports=signUpRouter;