import { Component,OnInit } from '@angular/core';
import { avaliar } from 'src/app/model/avaliar';
import { jogo } from 'src/app/model/jogo';
import { AvaliarService } from 'src/app/service/avaliar.service';
import { JogoService } from 'src/app/service/jogo.service';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.component.html',
  styleUrls: ['./avaliar.component.css']
})
export class AvaliarComponent implements OnInit {

  listaAvaliar:avaliar[]=[];
  listaavaliars: avaliar[] = [];
  avaliarJogo = new avaliar();
  estaAvaliando = false;
jogo: any;
  listaJogos : jogo[]=[];
  constructor(private avaliarService:AvaliarService,private jogoService:JogoService){}

  ngOnInit(): void {
    this.listar();
    this.listarJogo();
  }

listar(){
  this.avaliarService.listar().subscribe(avaliars=>{
    this.listaavaliars = avaliars;
  });
}
listarJogo(){
  this.jogoService.listar().subscribe(jogos=>{
    this.listaJogos = jogos;
  });
}

listarAvaliar(){

}

selecionar(avaliar:avaliar){
  this.avaliarJogo = avaliar;
  this.estaAvaliando=true;
  }

  remover(id:number){
    this.avaliarService.apagar(id).subscribe(()=>{
    this.listar();
      });
    }



    avaliar(){
      this.avaliarService.inserir(this.avaliarJogo).subscribe(avaliars=>{
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
      this.avaliarService.atualizar(this.avaliarJogo).subscribe(()=>{
        this.listar();
      });
    }
}
