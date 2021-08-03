import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Imovel from 'src/models/Imovel';

@Component({
  selector: 'app-imovel-editar',
  templateUrl: './imovel-editar.component.html',
  styleUrls: ['./imovel-editar.component.css']
})
export class ImovelEditarComponent {
  imovel = new Imovel();

  constructor(private router: Router) { 
    this.imovel = {...history.state.data, dataCadastro: this.formatDate(history.state.data.dataCadastro)}
  }

  formatDate(date: string){
    const realDate = new Date(date)
    return realDate.toLocaleDateString();
  }

  cadastrar() {
    const data = this.imovel.dataCadastro;
    const [dia, mes, ano] = data.split("/");

    // @ts-ignore
    axios.put(`http://localhost:3000/Imovel/put/${this.imovel._id}`, {
      ...this.imovel,
      dataCadastro: new Date(+ano, +mes - 1, +dia),
    }).then((res) => {
      this.router.navigate(['/imoveis'])
    })
  }
}
