'use strict'

const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');

exports.get = async () => {

    const res = await Venda.find();
    return res;
};

exports.create = async (data) => {

    var venda = new Venda(data);
    await venda.save();
};

exports.update = async (id, data) => {

    await Venda.findByIdAndUpdate(id, {
        $set: {
            valorVenda: data.valorVenda,
            comprador: data.comprador,
            dataVenda: data.dataVenda,
            corretor: data.corretor
        }
    });
};

exports.delete = async (id) => {

    await Venda.findOneAndRemove({_id: id});
}