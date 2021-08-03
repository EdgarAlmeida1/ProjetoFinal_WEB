import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-faturamento-total',
  templateUrl: './faturamento-total.component.html',
  styleUrls: ['./faturamento-total.component.css']
})
export class FaturamentoTotalComponent {
  mes: any
  ano: any
  total: Number = -1

  onChange() {
    this.total = -1
  }

  calcular() {
    axios.post("http://localhost:3000/Relatorio/faturamento", {
      mes: this.mes,
      ano: this.ano,
    }).then(({ data }) => {
      this.total = data
    })
  }
}
