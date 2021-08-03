'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    nome: {
        type: String,
        required: true
    },
    creci: {
        type: String,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    comissao: {
        type: Number,
        required: false
    },
    salario: {
        type: Number,
        required: false
    },
    dataAdmissao: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Corretor', schema);