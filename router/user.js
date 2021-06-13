const express = require('express')
const router = express.Router();
const controller = require('../controller/user')


console.log('router')
router.post('/',controller.getPost)
router.route('/').get(controller.get)
router.delete('/',controller.delete)

// router.route('/').post( controller.post).get(controller.findAll)
// router.route('/:id').delete(controller.delete).get(controller.findOne);
 
console.log('kina ho volumes le kaam nagareko')
  
module.exports = router 