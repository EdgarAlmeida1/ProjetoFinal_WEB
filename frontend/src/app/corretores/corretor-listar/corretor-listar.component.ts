import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Corretor from 'src/models/Corretor/Corretor';

@Component({
  selector: 'app-corretor-listar',
  templateUrl: './corretor-listar.component.html',
  styleUrls: ['./corretor-listar.component.css']
})
export class CorretorListarComponent{
  corretores: any[] = [];

  constructor(private router: Router) {
    axios.get("http://localhost:3000/Corretor/get")
      .then(({ data }) => {
        this.corretores = data
      })
  }

  formatDate(date: string) {
    const realDate = new Date(date)
    return realDate.toLocaleDateString();
  }

  excluir(corretor: any) {
    axios.delete(`http://localhost:3000/Corretor/delete/${corretor._id}`)
      .then((res) => {
        window.location.reload();
      })
  }
}
