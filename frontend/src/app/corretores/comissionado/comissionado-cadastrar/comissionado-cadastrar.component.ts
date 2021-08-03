import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import CorretorComissionado from 'src/models/Corretor/CorretorComissionado';
import {Router} from "@angular/router"


@Component({
  selector: 'app-comissionado-cadastrar',
  templateUrl: './comissionado-cadastrar.component.html',
  styleUrls: ['./comissionado-cadastrar.component.css']
})
export class ComissionadoCadastrarComponent {

  corretor = new CorretorComissionado();

  constructor(private router: Router) { }

  cadastrar() {
    axios.post("http://localhost:3000/Corretor/post", {
      nome: this.corretor.nome,
      creci: this.corretor.creci,
      tipo: "COMISSIONADO",
      comissao: +this.corretor.percentualComissao,
    }).then((res) => {
      this.router.navigate(['/corretores'])
    })
  }
}
