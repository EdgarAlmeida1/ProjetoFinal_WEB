import { Component, OnInit } from '@angular/core';
import CorretorContratado from 'src/models/Corretor/CorretorContratado';
import {Router} from "@angular/router"
import axios from 'axios';

@Component({
  selector: 'app-contratado-cadastrar',
  templateUrl: './contratado-cadastrar.component.html',
  styleUrls: ['./contratado-cadastrar.component.css']
})
export class ContratadoCadastrarComponent {

  corretor = new CorretorContratado();

  constructor(private router: Router) { }

  cadastrar() {
    const data = this.corretor.dataAdmissao;
    const [dia, mes, ano] = data.split("/");

    axios.post("http://localhost:3000/Corretor/post", {
      nome: this.corretor.nome,
      creci: this.corretor.creci,
      tipo: "CONTRATADO",
      salario: +this.corretor.salario,
      comissao: 0.01,
      dataAdmissao: new Date(+ano, +mes - 1, +dia),
    }).then((res) => {
      this.router.navigate(['/corretores'])
    })
  }
}
