import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-pedido',
  templateUrl: './meu-pedido.component.html',
  styleUrls: ['./meu-pedido.component.css']
})
export class MeuPedidoComponent {

  comanda: string = "25";
  mesa: string = "07";

}
