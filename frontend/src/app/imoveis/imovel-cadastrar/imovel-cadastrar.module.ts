import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImovelCadastrarComponent } from './imovel-cadastrar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImovelCadastrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ImovelCadastrarModule { }
