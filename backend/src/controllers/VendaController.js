'use strict'

const Mongoose = require('mongoose');
const venda = require('../models/Venda');
const Venda = Mongoose.model('Venda');
const Validation = require('../validators/validator');
const repository = require('../repositories/VendaRepository')
const imovelRepository = require('../repositories/ImovelRepository')

exports.get = async (req, res, next) => {

    try {

        let data = await repository.get();
        res.status(200).send(data);

    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }
};

exports.post = async (req, res, next) => {

    let contract = new Validation();

    try {
        await imovelRepository.setSold(req.body.CodigoImovel)
        await repository.create(req.body);
        res.status(201).send({ message: 'Venda cadastrado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }

};

exports.put = async (req, res, next) => {

    try {

        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Venda atualizado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};

exports.delete = async (req, res, next) => {

    try {

        await repository.delete(req.params.id);
        res.status(200).send({ message: 'Venda removido com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};
