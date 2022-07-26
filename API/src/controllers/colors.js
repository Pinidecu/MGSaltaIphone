const { Colors } = require("../models/index");
const ModelCrud = require('./index')

const colorController = new ModelCrud(Colors);

module.exports = colorController;
