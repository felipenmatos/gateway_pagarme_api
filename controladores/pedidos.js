const axios = require("axios");

const instanciaAxios = require("../servicos/pagarme");

const criarPedidos = async (req, res) => {
  const { body } = req;

  try {
    const pedido = await instanciaAxios.post("transactions", body);

    return res.json(pedido.data);
  } catch (error) {
    const {
      data: { errors },
      status,
    } = error.response;

    return res.status(status).json({
      erro: `${errors[0].parameter.name}`,
    });
  }
};

const consultarPedidos = async (req, res) => {
  return;
};

module.exports = { criarPedidos, consultarPedidos };
