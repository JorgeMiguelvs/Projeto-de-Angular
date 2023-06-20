import { Component } from '@angular/core';
import { categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  categoria= new categoria();
  categorias: categoria[] = [];
  estaEditando = false;
   selected:any;
  filtered :any;

  constructor(private categoriaService:CategoriaService  ){}


  listar(){
    this.categoriaService.listar().subscribe(categorias=>{
      this.categorias = categorias;
    });
  }

  inserir(){
    this.categoriaService.inserir(this.categoria).subscribe(categorias=>{
      this.listar();
    });
  }

  remover(id:number){
    this.categoriaService.apagar(id).subscribe(()=>{
    this.listar();
      });
    }

    atualizar(){
      this.categoriaService.atualizar(this.categoria).subscribe(()=>{
        this.listar();
      });
    }


    salvar(){
      if(this.estaEditando){
        this.atualizar();
      }
      else{
        this.inserir();
      }
    }

    selecionar(categoria:categoria){
    this.categoria = categoria;
    this.estaEditando=true;
    }

    cancelar(){
      this.estaEditando=false;
      this.categoria = new categoria();
    }

    onOptionsSelected() {
      console.log(this.selected);
      this.filtered = this.categorias.filter(t=>t.nome ==this.selected);

    }

}
