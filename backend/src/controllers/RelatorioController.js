'use strict'

const Mongoose = require('mongoose');
const Validation = require('../validators/validator');
const repository = require('../repositories/RelatorioRepository')

exports.getFaturamento = async (req, res, next) => {
        const {ano, mes} = req.body;
        let data = await repository.getFaturamento(mes, ano);
        res.send(data);
};

exports.getSalarioCorretor = async (req, res, next) => {
        const {ano, mes, creci} = req.body;
        let data = await repository.getSalarioCorretor(mes, ano, creci);
        res.send(data);
};

exports.getLucro = async (req, res, next) => {
        const {ano, mes} = req.body;
        let data = await repository.getLucro(mes, ano);
        res.send(data);
};

exports.getImoveis = async (req, res, next) => {
        const {ano, mes} = req.body;
        let data = await repository.getImoveis(mes, ano);
        res.send(data);
};

exports.getEncalhados = async (req, res, next) => {
        let data = await repository.getEncalhados();
        console.log(data);
        res.send(data);
};

exports.getCorretorMes = async (req, res, next) => {
        const {ano, mes} = req.body;
        let data = await repository.getCorretorMes(mes, ano);
        res.send(data);
};


exports.getFaturamentoCorretores = async (req, res, next) => {
        const {ano, mes} = req.body;
        let data = await repository.getFaturamentoCorretores(mes, ano);
        res.send(data);
}
