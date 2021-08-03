import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios"

@Component({
  selector: 'app-contratado-editar',
  templateUrl: './contratado-editar.component.html',
  styleUrls: ['./contratado-editar.component.css']
})
export class ContratadoEditarComponent{

  corretor

  constructor(private router: Router) {
    this.corretor = history.state.data
  }

  editar() {
    // @ts-ignore
    axios.put(`http://localhost:3000/Corretor/put/${this.corretor._id}`, {
      ...this.corretor,
    }).then((res) => {
      this.router.navigate(['/corretores'])
    })
  }
}
