const express = require('express');
const userRepository = require('../repositories/UserRepository');
const authController = require('../controllers/authController');

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
    try {
        // Pegue os dados do usuário da requisição
        const { username, password } = req.body;

        // Crie um novo usuário usando o repositório de usuário
        const newUser = await userRepository.createUser({ username, password });

        // Responda ao cliente Node.js
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Roteamento para autenticação (supondo que authController manipula as rotas relacionadas à autenticação)

router.use('/auth', authController);

module.exports = router;


