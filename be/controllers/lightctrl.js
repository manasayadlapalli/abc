const express = require('express');

//const User = require('../model/user');
const { response } = require('../index.js');
const { LightServices } = require('../services/lightservices.js');
const router = express.Router();


router.get('/getLightDetails', async (req, res) => {
    let userId = req.query;
    const response = {};
    try {
      let result = await LightServices.getLightdetails(userId);
  
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'Invalid User Id';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  router.delete('/deleteLightDetails', async (req, res) => {
    let lightId = req.query;
    const response = {};
    try {
      let result =  LightServices.deleteLightdetails(lightId);
  
      if (result) {
        response.success = true;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'Invalid Light Id';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  router.put('/updateLightDetails', async (req, res) => {
    let lightId = req.query;
    const response = {};
    try {
      let result = await LightServices.updateLightdetails(lightId,req.body);
  
      if (result) {
        response.success = true;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'Invalid lightId Id';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  router.post('/addLightDetails', async (req, res) => {
    //const data = req.body;
    let userId = req.query;

    const response = {};
    try {
        // returns the created user id
        let result = await LightServices.addLightdetails(userId,req.body);   
  
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'Invalid User Id';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });


  router.patch('/updateCloudStatus', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await LightServices.updateLightCloudStatus(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  }); 

  router.patch('/updateWorkingStatus', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await LightServices.updateWorkingStatus(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  }); 

  router.patch('/updateActiveStatus', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await LightServices.updateActiveStatus(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  module.exports = router;
