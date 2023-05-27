import { Component,OnInit } from '@angular/core';
import { jogo } from 'src/app/model/jogo';
import { JogoService } from 'src/app/service/jogo.service';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.component.html',
  styleUrls: ['./avaliar.component.css']
})
export class AvaliarComponent implements OnInit {

  listaAvaliar:jogo[]=[];
  listaJogos: jogo[] = [];
  jogo = new jogo();
  estaAvaliando = false;

  constructor(private jogoService:JogoService){}

  ngOnInit(): void {
    this.listar();
  }

listar(){
  this.jogoService.listar().subscribe(jogos=>{
    this.listaJogos = jogos;
  });
}

listarAvaliar(){

}

selecionar(jogo:jogo){
  this.jogo = jogo;
  this.estaAvaliando=true;
  }

  remover(id:number){
    this.jogoService.apagar(id).subscribe(()=>{
    this.listar();
      });
    }

   

    avaliar(){
      this.jogoService.avaliar(this.jogo).subscribe(jogos=>{
        this.listarAvaliar();
      });
    }

    salvar(){
      if(this.estaAvaliando){
        this.atualizarAvaliar();
      } 
      else{
        this.avaliar();
      }
    }

    atualizarAvaliar(){
      this.jogoService.atualizar(this.jogo).subscribe(()=>{
        this.listar();
      });
    }
}
