const express = require('express');
const userRepository = require('../repositories/UserRepository');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await userRepository.findUserByUsername(username);
        
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        
        await userRepository.createUser({ username, password });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;