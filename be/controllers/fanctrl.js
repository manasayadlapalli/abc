const express = require('express');

const User = require('../model/user');
const { response } = require('../index.js');
const { FanServices } = require('../services/fanservices.js');
const router = express.Router();


router.get('/getFanDetails', async (req, res) => {
    let data = req.body; //req.query.userId;
    const response = {};
    try {
      let result = await FanServices.getFandetails(data);
  
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
  //update part is remaining....
  router.delete('/deleteFandetails', async (req, res) => {
    let data = req.body; //req.query.fanId;
    const response = {};
    try {
      let result = await FanServices.deleteFandetails(data);
      console.log('result:' + result);
      if (result) {
        response.success = true;
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

  router.post('/addFandetails', async (req, res) => {
    //const data = req.body;
    console.log('here.....');
    let data = req.body;
    const response = {};
    try {
        console.log(data);
        let result = await FanServices.addFandetails(data);   
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

  router.post('/addMeterdetails', async (req, res) => {
    //const data = req.body;
    console.log('here.....');
    let data = req.body;
    const response = {};
    try {
        console.log(data);
        let result = await FanServices.addMeterdetails(data);   
      console.log(result);
      if (result) {
        response.success = true;
        response.meter = result;
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


  router.get('/deleteMeter', async (req, res) => {
    const data = req.query;
    //console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
        let result = await FanServices.deleteMeter(data);   
      if (result.oldMeter.deletedCount == 1) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'no record found with given Id';
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

  router.post('/updateMeter', async (req, res) => {
    const  {id}  = req.query;
    const data = req.body;
    const response = {};
    try {
        let result = await FanServices.updateMeter(id,data);   
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'cannot update ';
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

  router.get('/getAllMeters', async (req, res) => {
    const response = {};
    try {
        let result = await FanServices.getAllMeters();   
      if (result) {
        response.success = true;
        response.meters = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'cannot update ';
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

  router.get('/getMeterById', async (req, res) => {
    const  {id}  = req.query;

    const response = {};
    try {
        let result = await FanServices.getMeterById(id);   
      if (result) {
        response.success = true;
        response.meters = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'cannot fetch the meter details ';
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