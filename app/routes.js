const express = require('express');
const controller = require('./controller');
//const responseService = require('./responseUtil');
const router = express.Router();

router.get('/api/customers', async(req, res) => {
    try{
        let data = await controller.readFile();
        res.send({data:JSON.parse(data)});
      }
      catch(e){

      //  responseService.errorHandler(e, "something wrong while reading data", res);
        res.send({
          status: 'error',
          message:"something wrong while reading data"
        });
      }
})

router.post('/api/customers', async(req, res) => {
    try{
        let newData = await controller.readFile();
        let data = JSON.parse(newData);
        data[req.body.id] = req.body;
        await controller.writeFile(data);
        res.send({
          status:'ok',
          message:'data saved in file'
        });
      }
      catch(e){
        res.send({
          status: 'error',
          message:"something wrong while updating data"
        });
      }
})

router.get('/api/customers/:id', async(req, res) => {
    try{
        let data = await controller.findOne(req.params.id);
        res.send(data);
      }
      catch(e){
        res.send({
          status: 'error',
          message:"something wrong while reading data"
        });
      }
})

router.delete('/api/customers/:id', async(req, res) => {
    try{
        let data = await controller.delete(parseInt(req.params.id));
        res.send(data);
      }
      catch(e){
        res.send({
          status: 'error',
          message:"something wrong while reading data"
        });
      }
})

router.put('/api/customers/:id', async(req, res) => {
    try{
        let data = await controller.update(parseInt(req.params.id), req);
        res.send(data);
      }
      catch(e){
        res.send({
          status: 'error',
          message:"something wrong while reading data"
        });
      }
})


module.exports = router;
