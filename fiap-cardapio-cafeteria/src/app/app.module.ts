import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { MeuPedidoComponent } from './pages/meu-pedido/meu-pedido.component';
import { ItemPedidoComponent } from './pages/meu-pedido/item-pedido/item-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    ProdutoComponent,
    MeuPedidoComponent,
    ItemPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
