import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Imovel from 'src/models/Imovel';
import {Router} from "@angular/router"

@Component({
  selector: 'app-imovel-cadastrar',
  templateUrl: './imovel-cadastrar.component.html',
  styleUrls: ['./imovel-cadastrar.component.css']
})
export class ImovelCadastrarComponent {

  tipos = [
    { label: "Casa", value: "CASA" },
    { label: "Apartamento", value: "APARTAMENTO" },
    { label: "Sala Comercial", value: "SALA_COMERCIAL" },
    { label: "Lote", value: "LOTE" },
    { label: "Chácara", value: "CHACARA" },
    { label: "Sítio", value: "SITIO" },
    { label: "Fazenda", value: "FAZENDA" },
  ]

  imovel = new Imovel();

  constructor(private router: Router) { }

  cadastrar() {
    const data = this.imovel.dataCadastro;
    const [dia, mes, ano] = data.split("/");

    axios.post("http://localhost:3000/Imovel/post", {
      ...this.imovel,
      status: true,
      dataCadastro: new Date(+ano, +mes - 1, +dia),
    }).then((res) => {
      this.router.navigate(['/imoveis'])
    })
  }
}
