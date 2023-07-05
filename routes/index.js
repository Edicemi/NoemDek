const express = require('express');
router = express.Router();
const { addSchedule, getSchedule } = require("../controllers/taskA");


router.post('/addschedule',  addSchedule);
router.get('/getschedule/:scheduleId', getSchedule);

module.exports = router;