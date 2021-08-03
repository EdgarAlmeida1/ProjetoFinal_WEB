import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-lucro-total',
  templateUrl: './lucro-total.component.html',
  styleUrls: ['./lucro-total.component.css']
})
export class LucroTotalComponent {

  mes: any
  ano: any
  total: Number = -1

  onChange() {
    this.total = -1
  }

  calcular() {
    axios.post("http://localhost:3000/Relatorio/lucro", {
      mes: this.mes,
      ano: this.ano,
    }).then(({ data }) => {
      this.total = data
    })
  }
}
