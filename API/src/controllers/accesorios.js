const { Accesorios } = require("../models/index");
const ModelCrud = require('./index')

const accesorioController = new ModelCrud(Accesorios);

module.exports = accesorioController;
