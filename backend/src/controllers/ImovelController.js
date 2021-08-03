'use strict'

const Mongoose = require('mongoose');
const imovel = require('../models/Imovel');
const Imovel = Mongoose.model('Imovel');
const Validation = require('../validators/validator');
const repository = require('../repositories/ImovelRepository')

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
        await repository.create(req.body);
        res.status(201).send({ message: 'Imovel cadastrado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }

};

exports.put = async (req, res, next) => {

    try {

        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Imovel atualizado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};

exports.delete = async (req, res, next) => {

    try {

        await repository.delete(req.params.id);
        res.status(200).send({ message: 'Imovel removido com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};
