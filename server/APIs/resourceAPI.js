const exp = require('express');
const resourceApp = exp.Router();
const Resource = require('../Models/ResourceModel');
const expressAsyncHandler = require('express-async-handler');
const cors = require('cors');
const authenticate = require('../middleware/authenticate');

// apis
resourceApp.get(
  '/all',
  expressAsyncHandler(async (req, res) => {
    const resources = await Resource.find();
    res.status(200).send({
      message: 'All resources fetched successfully',
      payload: resources
    });
  })
);

// /////////////////////////////////



resourceApp.get(
  '/public',
  expressAsyncHandler(async (req, res) => {
    const resources = await Resource.find({ access: 'Public', isActive: true });
    res.status(200).send({
      message: 'Public resources fetched successfully',
      payload: resources
    });
  })
);

// GET /student - Resources accessible to students and faculty
resourceApp.get(
  '/student',
  authenticate,
  expressAsyncHandler(async (req, res) => {
    const role = req.user.role;

    if (role !== 'student' && role !== 'faculty') {
      return res.status(403).send({ message: 'Access denied' });
    }

    const resources = await Resource.find({ access: { $in: ['Student'] }, isActive: true });
    res.status(200).send({
      message: 'Student resources fetched successfully',
      payload: resources
    });
  })
);

// GET /faculty - Resources accessible to faculty only
resourceApp.get(
  '/faculty',
  authenticate,
  expressAsyncHandler(async (req, res) => {
    const role = req.user.role;

    if (role !== 'faculty') {
      return res.status(403).send({ message: 'Access denied' });
    }

    const resources = await Resource.find({ access: { $in: ['Faculty'] }, isActive: true });
    res.status(200).send({
      message: 'Faculty resources fetched successfully',
      payload: resources
    });
  })
);


// Get resource by ID
resourceApp.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const resource = await Resource.findById(id);

    if (!resource) {
      return res.status(404).send({ message: 'Resource not found' });
    }

    res.status(200).send({ message: 'Resource found', payload: resource });
  })
);


module.exports = resourceApp;
