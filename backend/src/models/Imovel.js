'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    codigo: {
        type: String,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    nomeVendedor: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Imovel', schema);