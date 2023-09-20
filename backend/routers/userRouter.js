// const express = require("express");
// const User = require ("../models/users");
// const expressAsyncHandler = require ("express-async-handler");
// const { generateToken } = require("../utils");

// const userrouter = express.Router();
// userrouter.get(
//     '/createadmin',
//     expressAsyncHandler(async(req, res)=>{
//     try{
//         const users = new User({
//             name: 'admin',
//             email: 'admin@example.com',
//             password:'admin',
//             isAdmin: true,
//         });
//         const createduser = await users.save();
//         res.send(createduser);
//     } catch(err) {
//         res.status(500).send({mesaage: err.message});
//     }
//     // return userrouter;
// }));
// userrouter.post(
//     '/signin',
//      expressAsyncHandler(async (req, res) =>{
//     const signinUser = await User.findOne({
//         email: req.body.email,
//         password: req.body.password,
//     });
//     if(!signinUser){
//         res.status(401).send({
//             message: 'Invalid Email or Password',
//         });
//     } else{
//         res.send({
//             _id: signinUser._id,
//             name: signinUser.name,
//             email: signinUser.email,
//             isAdmin: signinUser.isAdmin,
//             token: generateToken(signinUser),
//         });
//     }
// }));
// module.exports= userrouter;