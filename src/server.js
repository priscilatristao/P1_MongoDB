
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Aqui você implementaria a lógica de autenticação do usuário

        // Por enquanto, vamos apenas fazer uma requisição ao backend Flask para verificar se o usuário existe
        const response = await axios.post('http://localhost:3000/check_user', { username });
        
        if (response.data.exists) {
            res.status(200).json({ message: 'User authenticated successfully' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
