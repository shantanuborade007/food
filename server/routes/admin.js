const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth1');
const User=require('../models/User')
const Recipe=require('../models/Recipe')

// Delete user route
router.delete('/user/:id', isAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error deleting user' });
    }
});

// Delete recipe route
router.delete('/recipe/:id', isAdmin, async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error deleting recipe' });
    }
});

module.exports = router;