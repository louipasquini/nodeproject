const express = require('express');
const routes = express.Router();

let db = [
    { '1': { nome: 'cliente 1', idade: 17}},
    { '2': { nome: 'cliente 2', idade: 25}},
    { '3': { nome: 'cliente 3', idade: 19}}
];

routes.get('/', (req,res) => {
    res.status(200).send(db);
});

routes.post('/add', (req,res) => {
    const body = req.body;

    if (!body) {
        res.status(400).end();
    } else {
        db.push(body)
        res.status(200).send(body);
    }
})

routes.delete('/delete/:id', (req,res) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if (!item[id]) {
            return item;
        }
    })

    db = newDB;

    return res.send(newDB)
})

routes.get('/:id', (req,res) => {
    const id = req.params.id;

    let newDB = db.filter((item) => {
        if (item[id]) {
            return item
        }
    })

    res.status(200).send(newDB)
})

module.exports = routes