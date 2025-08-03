const express = require('express');

const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    //res.contentType('test/html');
    res.status(200).send('<h1>Welcome to the Home Page!</h1>');
});
app.get('/users', (req, res) => {
    const users = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Diana', email: 'diana@example.com' },
    ];
    res.json(users);
});


app.post("/users", async(req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


const port = 8080;
app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});