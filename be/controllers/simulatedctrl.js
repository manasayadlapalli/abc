const express = require('express');

const User = require('../model/user');
const { response } = require('../index.js');
const { SimulatedServices } = require('../services/simulatedServices.js');
const router = express.Router();


router.get('/getSimulatedDetails', async (req, res) => {
    let data = req.query;
    const response = {};
    try {
      let result = await SimulatedServices.getSimulatedDetails(data);
      
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

  router.post('/addSimulateddetails', async (req, res) => {
    //const data = req.body;
    console.log('here.....');
    let data = req.body;
    const response = {};
    try {
        console.log(data);
        let result = await SimulatedServices.addSimulateddetails(data);   
      console.log(result);
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