import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-imoveis-vendidos',
  templateUrl: './imoveis-vendidos.component.html',
  styleUrls: ['./imoveis-vendidos.component.css']
})
export class ImoveisVendidosComponent {

  mes: any
  ano: any
  imoveis: any = []
  status = 0

  onChange() {
    this.status = 0
    this.imoveis = []
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

  calcular() {
    axios.post("http://localhost:3000/Relatorio/imoveis", {
      mes: this.mes,
      ano: this.ano,
    }).then(({ data }) => {
      if(Object.keys(data).length > 0) {        
        this.status = 1
        this.imoveis = data
      }
      else {
        this.status = 2
      }
    })
  }
}
