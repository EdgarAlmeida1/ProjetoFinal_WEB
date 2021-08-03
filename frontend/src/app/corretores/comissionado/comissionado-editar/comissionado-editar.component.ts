import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios"
import Corretor from 'src/models/Corretor/Corretor';

@Component({
  selector: 'app-comissionado-editar',
  templateUrl: './comissionado-editar.component.html',
  styleUrls: ['./comissionado-editar.component.css']
})
export class ComissionadoEditarComponent {

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
