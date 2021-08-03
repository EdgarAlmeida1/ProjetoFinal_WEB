import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-imoveis-encalhados',
  templateUrl: './imoveis-encalhados.component.html',
  styleUrls: ['./imoveis-encalhados.component.css']
})
export class ImoveisEncalhadosComponent {
  mes: any
  ano: any
  imoveis: any = []
  status = 0

  constructor() {
    axios.post("http://localhost:3000/Relatorio/encalhados", {
      mes: this.mes,
      ano: this.ano,
    }).then(({ data }) => {
      if (Object.keys(data).length > 0) {
        this.status = 1
        this.imoveis = data
      }
      else {
        this.status = 2
      }
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
}
