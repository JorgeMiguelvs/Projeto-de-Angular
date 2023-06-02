import { Component } from '@angular/core';
import { categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  categoria = new categoria();
  estaEditando = false;
  listaCategorias: categoria[] = [];

  constructor(private categoriaService:CategoriaService){}

  salvar(){
    if(this.estaEditando){
      this.atualizar();
    } 
    else{
      this.inserir();
    }
  }

  inserir(){
    this.categoriaService.inserir(this.categoria).subscribe(categorias=>{
      this.listar();
    });
  }

  atualizar(){
    this.categoriaService.atualizar(this.categoria).subscribe(()=>{
      this.listar();
    });
  }
  
  listar(){
    this.categoriaService.listar().subscribe(categorias=>{
      this.listaCategorias = categorias;
    });
  }


  
}
