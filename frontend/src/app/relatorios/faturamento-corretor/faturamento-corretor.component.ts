import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-faturamento-corretor',
  templateUrl: './faturamento-corretor.component.html',
  styleUrls: ['./faturamento-corretor.component.css']
})
export class FaturamentoCorretorComponent {

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
    axios.post("http://localhost:3000/Relatorio/faturamentoC", {
      mes: this.mes,
      ano: this.ano,
      creci: this.creci,
    }).then(({ data }) => {
      this.result = data
      this.status = true;
    })
  }
}
