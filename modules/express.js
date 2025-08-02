const express = require('express');

const app = express();

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

const port = 8080;
app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});