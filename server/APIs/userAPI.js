const exp=require('express');
const userApp=exp.Router();
const User = require('../Models/UserModel');
const expressAsyncHandler = require('express-async-handler');
const ResourceRequest = require('../Models/ResourceRequestModel'); // Adjust path as needed
const authenticate = require('../middleware/authenticate');



// apis
// POST: Register a new user
userApp.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
      const { userId, password, name, email, role } = req.body;
  
      if (!userId || !password || !name || !email) {
        res.status(400).send({ message: 'All fields are required' });
        return;
      }
  
      const existingUser = await User.findOne({ $or: [{ email }, { userId }] });
  
      if (existingUser) {
        res.status(400).send({ message: 'User with given email or userId already exists' });
        return;
      }
  
      const newUser = new User({ userId, password, name, email, role });
      const dbRes = await newUser.save();
  
      const token = dbRes.generateJWT();
  
      res.status(201).send({
        message: 'User created successfully',
        payload: {
          _id: dbRes._id,
          userId: dbRes.userId,
          name: dbRes.name,
          email: dbRes.email,
          role: dbRes.role,
          token
        }
      });
    })
  );

//   ///////////////////////////////////
// POST: Login a user
userApp.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
      const { userId, password } = req.body;
  
      const user = await User.findOne({ userId });
      if (!user) {
        return res.status(401).send({ message: 'Invalid user ID or password' });
      }
  
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid user ID or password' });
      }
  
      const token = user.generateJWT();
  
      // Remove sensitive info like password from user object
      const { _id, name, email, role } = user;
  
      res.status(200).send({
        message: 'Login successful',
        token,
        user: {
          _id,
          userId,
          name,
          email,
          role
        }
      });
    })
  );
  

//   
userApp.post(
    '/resource-request',
    expressAsyncHandler(async (req, res) => {
      const {
        title,
        authors,
        resourceType,
        publisherOrJournal,
        year,
        doi,
        url,
        description,
        priority,
        reasonForRequest,
        requestedById,
        requestedByName
      } = req.body;
  
      const newRequest = new ResourceRequest({
        title,
        authors,
        resourceType,
        publisherOrJournal,
        year,
        doi,
        url,
        description,
        priority,
        reasonForRequest,
        requestedById,
        requestedByName
      });
  
      await newRequest.save();
  
      res.status(201).send({
        message: 'Resource request submitted successfully',
        payload: newRequest
      });
    })
  );

module.exports=userApp;
