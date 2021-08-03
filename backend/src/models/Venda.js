'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    valorVenda: {
        type: Number,
        required: true
    },
    comprador: {
        type: String,
        required: true
    },
    dataVenda: {
        type: Date,
        required: true
    },
    corretor: {
        type: String,
        required: true
    },
    CodigoImovel: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Venda', schema);