import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @Input("foto") foto: string = '';
  @Input("nome") nome: string = 'Donuts de doce de leite';
  @Input("descricao") descricao: string = 'alguma descrição';
  @Input("valorUnitario") valorUnitario: number = 10.00;

}


