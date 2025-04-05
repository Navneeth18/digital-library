const exp = require('express');
const resourceApp = exp.Router();
const Resource = require('../Models/ResourceModel');
const expressAsyncHandler = require('express-async-handler');
const cors = require('cors');

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
