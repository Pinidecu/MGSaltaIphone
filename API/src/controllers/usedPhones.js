const { Usedphone } = require("../models/index");
const ModelCrud = require('./index')

const usedPhoneController = new ModelCrud(Usedphone);

module.exports = usedPhoneController;
