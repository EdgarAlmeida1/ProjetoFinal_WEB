'use strict'

const Mongoose = require('mongoose');
const corretor = require('../models/Corretor');
const Corretor = Mongoose.model('Corretor');
const Validation = require('../validators/validator');
const repository = require('../repositories/CorretorRepository')

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

    try {
        await repository.create(req.body);
        res.status(201).send({ message: 'Corretor cadastrado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }

};

exports.put = async (req, res, next) => {

    try {

        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Corretor atualizado com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};

exports.delete = async (req, res, next) => {

    try {

        await repository.delete(req.params.id);
        res.status(200).send({ message: 'Corretor removido com sucesso' });
    } catch (e) {

        res.status(500).send({
            message: 'falha ao processar sua requisição'
        });
    }


};
