const exp = require('express');
const adminApp = exp.Router();
const Resource = require('../Models/ResourceModel');
const expressAsyncHandler = require('express-async-handler');
const ResourceRequest = require('../Models/ResourceRequestModel'); // Adjust path as needed
// const cors = require('cors');

// apis
// post : add a new resource
adminApp.post(
  '/add',
  expressAsyncHandler(async (req, res) => {
    const {
      title,
      abstract,
      content,
      keywords,
      authorName,
      category,
      resourceType,
      publisher,
      access,
    } = req.body;

    if (!title) {
      return res.status(400).send({ message: 'Title is required' });
    }

    if (!Array.isArray(access) || access.length === 0) {
      return res.status(400).send({ message: 'Access must be a non-empty array' });
    }

    const allowedAccess = ['Student', 'Faculty', 'Public'];
    const isValidAccess = access.every((role) => allowedAccess.includes(role));

    if (!isValidAccess) {
      return res.status(400).send({ message: 'Invalid access values provided' });
    }

    const newResource = {
      title,
      abstract,
      content,
      keywords,
      authorName,
      category,
      resourceType,
      publisher,
      access,
    };

    const dbRes = await Resource.create(newResource);

    res.status(201).send({
      message: 'Resource added successfully',
      payload: dbRes,
    });
  })
);


// //   ////////////////
// // PUT: Update a resource by ID
// adminApp.put(
//     '/resource/:id',
//     expressAsyncHandler(async (req, res) => {
//         const resourceId = req.params.id;
//         const updatedData = req.body;

//         const updatedResource = await Resource.findByIdAndUpdate(
//             resourceId,
//             updatedData,
//             { new: true }
//         );

//         if (!updatedResource) {
//             res.status(404).send({ message: 'Resource not found' });
//             return;
//         }

//         res.status(200).send({
//             message: 'Resource updated successfully',
//             payload: updatedResource,
//         });
//     })
// );


// //////////////

// PUT: Update a resource by ID
adminApp.put(
    '/resource/:id',
    expressAsyncHandler(async (req, res) => {
        const resourceId = req.params.id;
        const updatedData = req.body;

        const updatedResource = await Resource.findByIdAndUpdate(
            resourceId,
            updatedData,
            { new: true }
        );

        if (!updatedResource) {
            res.status(404).send({ message: 'Resource not found' });
            return;
        }

        res.status(200).send({
            message: 'Resource updated successfully',
            payload: updatedResource,
        });
    })
);

//   /////////////
// PUT: Soft delete a resource by ID (set isActive to false)
adminApp.put(
    '/resource/delete/:id',
    expressAsyncHandler(async (req, res) => {
        const { id } = req.params;

        const updatedRes = await Resource.findByIdAndUpdate(
            id,
            { isActive: false, dateModified: new Date() },
            { new: true }
        );

        if (!updatedRes) {
            return res.status(404).send({ message: 'Resource not found' });
        }

        res.status(200).send({
            message: 'Resource soft-deleted successfully (isActive set to false)',
            payload: updatedRes
        });
    })
);

// 
// get all resources
adminApp.get(
    '/resource-requests',
    expressAsyncHandler(async (req, res) => {
      const allRequests = await ResourceRequest.find().sort({ createdTime: -1 });
      res.status(200).send({
        message: 'All resource requests fetched successfully',
        payload: allRequests
      });
    })
  );

// 
adminApp.put(
    '/resource-requests/:id/status',
    expressAsyncHandler(async (req, res) => {
      const { status } = req.body;
      const validStatuses = ['Pending', 'Approved', 'Rejected'];
  
      if (!validStatuses.includes(status)) {
        return res.status(400).send({ message: 'Invalid status value' });
      }
  
      const updatedRequest = await ResourceRequest.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
  
      if (!updatedRequest) {
        return res.status(404).send({ message: 'Resource request not found' });
      }
  
      res.status(200).send({
        message: 'Status updated successfully',
        payload: updatedRequest,
      });
    })
  );

module.exports = adminApp;