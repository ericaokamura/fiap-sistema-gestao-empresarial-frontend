import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css']
})
export class ItemPedidoComponent {

  @Input("foto") foto: string = '';
  @Input("nome") nome: string = 'Donuts de doce de leite';
  @Input("quantidade") quantidade: string = '1';
  @Input("subtotal") subtotal: string = '10.00';


}
