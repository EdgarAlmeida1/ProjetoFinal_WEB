'use strict'

const mongoose = require('mongoose');
const Imovel = mongoose.model('Imovel');

exports.get = async () => {

    const res = await Imovel.find();
    return res;
};

exports.create = async (data) => {

    var imovel = new Imovel(data);
    await imovel.save();
};

exports.update = async (id, data) => {

    await Imovel.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            tipo: data.tipo,
            status: data.status,
            descricao: data.descricao,
            nomeVendedor: data.nomeVendedor,
            preco: data.preco,
            imagem: data.imagem,
            dataCadastro: data.dataCadastro
        }
    });
};

exports.delete = async (id) => {

    await Imovel.findOneAndRemove({_id: id});
}

exports.setSold = async (codigo) => {
    const filter = {codigo: codigo}
    const update = {status: false}

    await Imovel.findOneAndUpdate(filter, update);
}