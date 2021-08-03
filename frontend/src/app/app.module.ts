import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImovelCadastrarComponent } from './imoveis/imovel-cadastrar/imovel-cadastrar.component'
import { ComissionadoCadastrarComponent } from './corretores/comissionado/comissionado-cadastrar/comissionado-cadastrar.component'
import { ContratadoCadastrarComponent } from './corretores/contratado/contratado-cadastrar/contratado-cadastrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImovelListarComponent } from './imoveis/imovel-listar/imovel-listar.component';
import { VendaCadastrarComponent } from './vendas/venda-cadastrar/venda-cadastrar.component';
import { ImovelEditarComponent } from './imoveis/imovel-editar/imovel-editar.component';
import { CorretorListarComponent } from './corretores/corretor-listar/corretor-listar.component';
import { ComissionadoEditarComponent } from './corretores/comissionado/comissionado-editar/comissionado-editar.component';
import { ContratadoEditarComponent } from './corretores/contratado/contratado-editar/contratado-editar.component';
import { FaturamentoTotalComponent } from './relatorios/faturamento-total/faturamento-total.component';
import { LucroTotalComponent } from './relatorios/lucro-total/lucro-total.component';
import { ImoveisVendidosComponent } from './relatorios/imoveis-vendidos/imoveis-vendidos.component';
import { ImoveisEncalhadosComponent } from './relatorios/imoveis-encalhados/imoveis-encalhados.component';
import { FaturamentoCorretorComponent } from './relatorios/faturamento-corretor/faturamento-corretor.component';
import { ValorPagoCorretorComponent } from './relatorios/valor-pago-corretor/valor-pago-corretor.component';
import { CorretorMesComponent } from './relatorios/corretor-mes/corretor-mes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalariosGerarComponent } from './salarios/salarios-gerar/salarios-gerar.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ImovelCadastrarComponent,
    ComissionadoCadastrarComponent,
    ContratadoCadastrarComponent,
    DashboardComponent,
    ImovelListarComponent,
    VendaCadastrarComponent,
    ImovelEditarComponent,
    CorretorListarComponent,
    ComissionadoEditarComponent,
    ContratadoEditarComponent,
    FaturamentoTotalComponent,
    LucroTotalComponent,
    ImoveisVendidosComponent,
    ImoveisEncalhadosComponent,
    FaturamentoCorretorComponent,
    ValorPagoCorretorComponent,
    CorretorMesComponent,
    SalariosGerarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'imoveis/create', component: ImovelCadastrarComponent },
      { path: 'imoveis', component: ImovelListarComponent },
      { path: 'imoveis/edit', component: ImovelEditarComponent },
      { path: 'corretores/create/comissionado', component: ComissionadoCadastrarComponent },
      { path: 'corretores/edit/comissionado', component: ComissionadoEditarComponent },
      { path: 'corretores/create/contratado', component: ContratadoCadastrarComponent },
      { path: 'corretores/edit/contratado', component: ContratadoEditarComponent },
      { path: 'corretores', component: CorretorListarComponent },
      { path: 'vendas/create', component: VendaCadastrarComponent },
      { path: 'salarios', component: SalariosGerarComponent },
      { path: 'relatorios/faturamento-total', component: FaturamentoTotalComponent },
      { path: 'relatorios/lucro-total', component: LucroTotalComponent },
      { path: 'relatorios/imoveis-vendidos', component: ImoveisVendidosComponent },
      { path: 'relatorios/imoveis-encalhados', component: ImoveisEncalhadosComponent },
      { path: 'relatorios/faturamento-corretor', component: FaturamentoCorretorComponent },
      { path: 'relatorios/valor-pago-corretor', component: ValorPagoCorretorComponent },
      { path: 'relatorios/corretor-mes', component: CorretorMesComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
