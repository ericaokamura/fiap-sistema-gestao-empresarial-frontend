import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { MeuPedidoComponent } from './pages/meu-pedido/meu-pedido.component';

const routes: Routes = [
  { path: 'cardapio', component: CardapioComponent },
  { path: 'meu-pedido', component: MeuPedidoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
