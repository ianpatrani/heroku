const methodOverride = require("method-override");
const cors = require("cors");
const express = require("express");
/* import methodOverride from "method-override";
import cors from "cors";
import express from "express"; */
//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero", "marge"];

//app.use(cors());
app.use(methodOverride());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/users", (req, res) => {
    res.send(users);
});

app.post("/user/create", (req, res) => {
    users.push(req.body.nombre);
    res.send("usuario creado");
});

app.delete("/user/delete/:nombre", (req, res) => {
    users = users.filter(user => user !== req.params.nombre);
    res.send(`usuario eliminado`);
});

app.put("/users/:nombreAnterior/:nombreNuevo", (req, res) => {
    users = users.filter(user => user !== req.params.nombreAnterior);
    users.push(req.params.nombreNuevo);
    res.send(`usuario cambiado`);
});

app.listen(port, () => {
    log("start server");
});