'use strict'

const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');
const Corretor = mongoose.model('Corretor');
const Imovel = mongoose.model('Imovel');

exports.getFaturamento = async (mes, ano) => {

  let data1 = new Date(ano, mes - 1, 1)
  let data2 = new Date(ano, mes - 1, 31)

  const fat = await Venda.find({ dataVenda: { $gte: data1, $lt: data2 } })

  let total = 0;

  fat.forEach((venda) => {
    total += ((venda.valorVenda * 5) / 100)
  })

  return total.toString();

};

exports.getSalarioCorretor = async (mes, ano, creci) => {
  let salario = 0

  let data1 = new Date(ano, mes - 1, 1)
  let data2 = new Date(ano, mes - 1, 31)

  const vendacor = await Venda.find({ $and: [{ dataVenda: { $gte: data1, $lt: data2 } }, { corretor: creci }] })

  const cor = await Corretor.findOne({ creci: creci })

  if (cor.tipo == "CONTRATADO") {

    vendacor.forEach((venda) => {
      salario += ((venda.valorVenda * 1) / 100)
    })

    salario += cor.salario
  }

  else if (cor.tipo == "COMISSIONADO") {

    vendacor.forEach((venda) => {
      salario += ((venda.valorVenda * cor.comissao) / 100)
    })
  }

  return {
    nome: cor.nome,
    salario,
    tipo: cor.tipo,
    ...(cor.tipo == "CONTRATADO" ? {fixo: cor.salario} : undefined),
  }

};

exports.getLucro = async (mes, ano) => {
  let data1 = new Date(ano, mes - 1, 1)
  let data2 = new Date(ano, mes - 1, 31)

  const fat = await Venda.find({ dataVenda: { $gte: data1, $lt: data2 } })

  let despesas = 0

  //const corretorContratados = await Corretor.find({$and:[{ dataAdmissao: { $gte: data1}}, { tipo: "CONTRATADO" }]});
  const corretorContratados = await Corretor.find({ tipo: "CONTRATADO" });

  corretorContratados.forEach((Corretor) => {
    despesas += Corretor.salario
  })

  let faturamento = 0;
  let aux;

  fat.forEach(async (venda) => {
    faturamento += ((venda.valorVenda * 5) / 100)
    aux = await Corretor.findOne({ creci: venda.corretor })
    despesas += (venda.valorVenda * aux.comissao)
  })

  faturamento -= despesas;

  return faturamento.toString();
};

exports.getImoveis = async (mes, ano) => {

  let data1 = new Date(ano, mes - 1, 1)
  let data2 = new Date(ano, mes - 1, 31)

  const fat = await Venda.find({ dataVenda: { $gte: data1, $lt: data2 } })

  let result = []
  
  for(const venda of fat) {
    const imovel = await Imovel.findOne({codigo: venda.CodigoImovel});
    result.push(imovel)
  }
  return result
};

exports.getEncalhados = async () => {

  let hoje = new Date()
  let mes = hoje.getMonth()
  let ano = hoje.getFullYear()

  if (mes < 6) {

    ano -= 1
    mes += 6
  }
  else {

    mes -= 6
  }

  let data1 = new Date(ano, mes, 1)
  const fat = await Imovel.find({ dataCadastro: { $lte: data1 } })

  return fat;
};

exports.getCorretorMes = async (mes, ano) => {

  let data1 = new Date(ano, mes - 1, 1)
  let data2 = new Date(ano, mes - 1, 31)

  const fat = await Venda.find({ dataVenda: { $gte: data1, $lt: data2 } })

  let ListaC = []
  let ListaL = []

  ListaC[0] = null
  ListaL[0] = 0

  let aux = false;

  fat.forEach((venda) => {

    for (let cont = 0; cont < ListaC.length; cont++) {

      if (ListaC[cont] == venda.corretor) {

        ListaL[cont] += ((venda.valorVenda * 5) / 100)
        aux = true
      }
    }


    if (aux == false) {

      ListaC.push(venda.corretor)
      ListaL.push(((venda.valorVenda * 5) / 100))
    }

    aux = false
  })

  let pos = 0
  let maior = 0

  for (let cont2 = 0; cont2 < ListaL.length; cont2++) {

    if (ListaL[cont2] > maior) {

      maior = ListaL[cont2]
      pos = cont2
    }

  }

  let CorrerMes = await Corretor.findOne({ creci: ListaC[pos] })

  return CorrerMes;
};


exports.getFaturamentoCorretores = async (mes, ano) => {
  let data1 = new Date(ano, mes - 1, 1)
  let data2 = new Date(ano, mes - 1, 31)

  const corretores = await Corretor.find();
  const faturamentoCorretores = [];

  for (const corretor of corretores) {
    const vendas = await Venda.find({ $and: [{ dataVenda: { $gte: data1, $lt: data2 } }, { corretor: corretor.creci }] });
    let valorTotal = 0;
    vendas.forEach((venda) => {
      valorTotal += venda.valorVenda * 0.05;
    });
    const { _id, nome, tipo, comissao, __v, dataAdmissao, salario, } = corretor._doc;

    faturamentoCorretores.push({
      nome,
      creci: corretor.creci,
      faturado: valorTotal,
    })
  };

  return faturamentoCorretores;
};
