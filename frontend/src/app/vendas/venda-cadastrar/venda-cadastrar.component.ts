import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Venda from 'src/models/Venda';

@Component({
  selector: 'app-venda-cadastrar',
  templateUrl: './venda-cadastrar.component.html',
  styleUrls: ['./venda-cadastrar.component.css']
})
export class VendaCadastrarComponent {
  venda: Venda = new Venda();

  constructor(private router: Router) { }

  cadastrar() {
    const data = this.venda.dataVenda;
    const [dia, mes, ano] = data.split("/");

    axios.post("http://localhost:3000/Venda/post", {
      ...this.venda,
      dataVenda: new Date(+ano, +mes - 1, +dia),
    }).then((res) => {
      this.router.navigate(['/imoveis'])
    })
  }
}
