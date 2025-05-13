import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ProdutoComponent } from "src/app/components/produto/produto/produto.component";

@NgModule({
    declarations: [
      ProdutoComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }