const { Product } = require("../models/index");
const ModelCrud = require('./index')

const productController = new ModelCrud(Product)

module.exports = productController;
