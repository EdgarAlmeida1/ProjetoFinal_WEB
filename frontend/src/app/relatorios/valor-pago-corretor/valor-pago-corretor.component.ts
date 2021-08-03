import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-valor-pago-corretor',
  templateUrl: './valor-pago-corretor.component.html',
  styleUrls: ['./valor-pago-corretor.component.css']
})
export class ValorPagoCorretorComponent {
  mes: any
  ano: any
  creci: any
  status: boolean = false
  result: any

  onChange() {
    this.status = false
    this.result = {}
  }

  calcular() {
    axios.post("http://localhost:3000/Relatorio/salarioC", {
      mes: this.mes,
      ano: this.ano,
      creci: this.creci,
    }).then(({ data }) => {
      this.status = true;
      this.result = data
    })
  }
}
