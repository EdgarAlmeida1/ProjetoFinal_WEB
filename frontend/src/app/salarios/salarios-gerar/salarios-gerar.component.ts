import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-salarios-gerar',
  templateUrl: './salarios-gerar.component.html',
  styleUrls: ['./salarios-gerar.component.css']
})
export class SalariosGerarComponent {
  mes: any
  ano: any
  creci: any = ""
  corretores: any[] = [];
  result: any
  status = false

  constructor() {
    axios.get("http://localhost:3000/Corretor/get")
      .then(({ data }) => {
        this.corretores = data
      })
  }

  calcular() {
    axios.post("http://localhost:3000/Relatorio/salarioC", {
      mes: this.mes,
      ano: this.ano,
      creci: this.creci,
    }).then(({ data }) => {
      console.log(data)
      this.result = data
      this.status = true
    })
  }

}
