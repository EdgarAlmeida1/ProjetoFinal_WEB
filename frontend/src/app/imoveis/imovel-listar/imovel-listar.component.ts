import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Imovel from 'src/models/Imovel';

@Component({
  selector: 'app-imovel-listar',
  templateUrl: './imovel-listar.component.html',
  styleUrls: ['./imovel-listar.component.css']
})
export class ImovelListarComponent {
  imoveisTotais: Imovel[] = [];
  imoveisSelecionados: Imovel[] = [];
  tiposDisponiveis = [
    { value: "CASA", label: "Casa", show: false },
    { value: "APARTAMENTO", label: "Apartamento", show: false },
    { value: "SALA_COMERCIAL", label: "Sala comercial", show: false },
    { value: "LOTE", label: "Lote", show: false },
    { value: "CHACARA", label: "Chácara", show: false },
    { value: "SITIO", label: "Sítio", show: false },
    { value: "FAZENDA", label: "Fazenda", show: false },
  ];

  constructor(private router: Router) {
    axios.get("http://localhost:3000/Imovel/get")
      .then(({ data }) => {
        data = data.filter((item: any) => item.status)
        this.imoveisTotais = data
        this.imoveisSelecionados = data

        this.imoveisTotais.forEach((imovel) => {
          this.tiposDisponiveis.forEach((tipo) => {
            if (tipo.value === imovel.tipo) {
              tipo.show = true
            }
          })
        })
      })
  }

  onChange(tipo: any) {
    this.imoveisSelecionados = this.imoveisTotais.filter((imovel) => {
      return imovel.tipo === tipo
    })
  }

  formatDate(date: string) {
    const realDate = new Date(date)
    return realDate.toLocaleDateString();
  }

  formatType(type: string) {
    const tipos = {
      CASA: "Casa",
      APARTAMENTO: "Apartamento",
      SALA_COMERCIAL: "Sala comercial",
      LOTE: "Lote",
      CHACARA: "Chácara",
      SITIO: "Sítio",
      FAZENDA: "Fazenda",
    }

    // @ts-ignore
    return tipos[type]
  }

  excluir(imovel: any) {
    axios.delete(`http://localhost:3000/Imovel/delete/${imovel._id}`)
      .then((res) => {
        window.location.reload();
      })
  }
}
