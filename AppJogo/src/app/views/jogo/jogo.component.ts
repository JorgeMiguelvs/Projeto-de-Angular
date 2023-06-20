import { Component,OnInit } from '@angular/core';
import { categoria } from 'src/app/model/categoria';
import { jogo } from 'src/app/model/jogo';
import { CategoriaService } from 'src/app/service/categoria.service';
import { JogoService } from 'src/app/service/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent  implements OnInit{

  selected:any;
  filtered :any;

categorias: categoria[] = [];
listaJogos: jogo[] = [];
  jogo = new jogo();
  estaEditando = false;

  constructor(private jogoService:JogoService,private categoriaService:CategoriaService){}



  ngOnInit(): void {
    this.listar();
    this.listarCategorias();
  }

listar(){
  this.jogoService.listar().subscribe(jogos=>{
    this.listaJogos = jogos;
  });
}

listarCategorias(){
  this.categoriaService.listar().subscribe(categorias=>{
    this.categorias = categorias;
  });
}

inserir(){
  this.jogoService.inserir(this.jogo).subscribe(jogos=>{
    this.listar();
  });
}

remover(id:number){
this.jogoService.apagar(id).subscribe(()=>{
this.listar();
  });
}

atualizar(){
  this.jogoService.atualizar(this.jogo).subscribe(()=>{
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

selecionar(jogo:jogo){
this.jogo = jogo;
this.estaEditando=true;
}

cancelar(){
  this.estaEditando=false;
  this.jogo = new jogo();
}


}
