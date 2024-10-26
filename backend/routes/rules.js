// routes/rules.js

const express = require('express');
const router = express.Router();
const { createRule, getAllRules } = require('../controllers/ruleController');

// Define routes
router.post('/create', createRule); // Create a rule
router.get('/', getAllRules); // Get all rules

module.exports = router;
