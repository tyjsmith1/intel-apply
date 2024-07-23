const express = require('express');
const {
    getJobs,
    createJob,
    updateJob,
} = require('../controllers/jobController');
const router = express.Router();

router.get('/', getJobs);
router.post('/', createJob);
router.put('/:id', updateJob);

module.exports = router;
