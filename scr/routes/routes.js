const express = require('express');
const userRepository = require('../repositories/UserRepository');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        // Pegue os dados do usuário da requisição
        const { username, password } = req.body;

        const newUser = await userRepository.createUser({ username, password });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.use('/auth', authController);

module.exports = router;


