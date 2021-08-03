import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-corretor-mes',
  templateUrl: './corretor-mes.component.html',
  styleUrls: ['./corretor-mes.component.css']
})
export class CorretorMesComponent {
  mes: any
  ano: any
  corretor: any
  status = 0

  onChange() {
    this.status = 0;
  }

  formatDate(date: string) {
    const realDate = new Date(date)
    return realDate.toLocaleDateString();
  }

  calcular() {
    axios.post("http://localhost:3000/Relatorio/corretormes", {
      mes: this.mes,
      ano: this.ano,
    }).then(({ data }) => {
      if(Object.keys(data).length > 0) {
        this.status = 1;
        this.corretor = data;
      }
      else { 
        this.status = 2
      }
    })
  }
}
