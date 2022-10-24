// montar entorno express

const express = require('express');

const app = express();

const port = 3000;

// middleware - habilitamos usar el formato json
app.use(express.json());

// endpoints
app.get('/', (req, res) => {
    res.send("hola bienvenido a mi API");
});

app.get('/hola/:nombre', (req, res) => {
    let nombre = req.params.nombre;

    res.send(`Hola ${nombre}`)
});

app.get('/login', (req, res) => {
    res.json(
        {
            "mensaje" : "Bienvenido a mi API, gracias por logearte"
        }
    )
});

app.get('/register', (req, res) => {
    res.send("register page");
});

app.get('*', (req, res) => {
    res.send("otros");
});

app.post('/register', (req, res) => {
   /*  let nombre = req.body.nombre;
    let edad = req.body.edad;
    let email = req.body.email; */
    let usuario = req.body;
    
    res.send(`Hola ${usuario.nombre} se que tu email es ${usuario.email} y tienes ${usuario.edad}`);
});

app.listen(port, () => console.log(`Escuchando por puerto ${port}...`));