'use strict'

const mongoose = require('mongoose');
const Corretor = mongoose.model('Corretor');

exports.get = async () => {

    const res = await Corretor.find();
    return res;
};

exports.create = async (data) => {

    let corretor = new Corretor(data);
    await corretor.save();
};

exports.update = async (id, data) => {

    await Corretor.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            creci: data.creci,
            tipo: data.tipo,
            comissao: data.comissao,
            salario: data.salario,
            dataAdmissao: data.dataAdmissao
        }
    });
};

exports.delete = async (id) => {

    await Corretor.findOneAndRemove({_id: id});
}