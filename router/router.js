const express = require('express');
const router = express.Router();
const Data = require('../config/functions.js');


router.route('/').get(Data.getData).post(Data.insertData);
router.route('/:id').get(Data.getDataById);
router.route('/:id').patch(Data.updateData);
router.route('/:id').delete(Data.deleteData);


module.exports = router;
