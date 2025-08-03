const express = require('express');

const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/views/users', async(req, res) => {
    const users = await UserModel.find({});
    res.render('index', { users });
});

app.get('/home', (req, res) => {
    //res.contentType('test/html');
    res.status(200).send('<h1>Welcome to the Home Page!</h1>');
});
app.get('/users', (req, res) => {
    try {
        UserModel.find()
            .then(users => res.status(200).json(users))
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/users/:id", async(req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send("usuario nao encontrado");
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("usuario nao encontrado", error.message);
    }
})

app.put("/users/:id", async(req, res) => {
    try {
        id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        if (!user) {
            return res.status(404).send("usuario nao encontrado");
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(`Não conseguimos atualizar : ERRO - ${error.message}`);
    }
})

app.delete("/users/:id", async(req, res) => {
    try {
        id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send("usuario nao encontrado");
        }
        res.status(200).send("usuario deletado com sucesso");
    } catch (error) {
        res.status(500).send(`Não conseguimos deletar : ERRO - ${error.message}`);
    }
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