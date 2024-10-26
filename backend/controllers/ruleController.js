// controllers/ruleController.js

const Rule = require('../models/ruleModel');

// Create a rule
const createRule = async (req, res) => {
    try {
        const { ruleString } = req.body;
        const rule = new Rule({ ruleString });
        await rule.save();
        res.status(201).json({ message: 'Rule created', rule });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all rules
const getAllRules = async (req, res) => {
    try {
        const rules = await Rule.find();
        res.status(200).json(rules);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createRule,
    getAllRules
};
