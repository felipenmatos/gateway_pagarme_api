const express = require("express");
const pedidos = require("./controladores/pedidos");

const rotas = express();

rotas.post("/criarPedido", pedidos.criarPedidos);

rotas.get("/consultarPedido", pedidos.consultarPedidos);

module.exports = { rotas };
