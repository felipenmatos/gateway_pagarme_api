const axios = require("axios");

const basic = {
  User: "SecretKey",
  Password: "",
};

const instanciaAxios = axios.create({
  baseURL: "https://api.pagar.me/core/v5/",
  headers: {
    api_key: "sk_OZXrqDHGjHyJRD15",
  },
});

module.exports = instanciaAxios;
