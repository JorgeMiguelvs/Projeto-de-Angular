import { Component,OnInit } from '@angular/core';
import { avaliar } from 'src/app/model/avaliar';
import { AvaliarService } from 'src/app/service/avaliar.service';

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

  constructor(private avaliarService:AvaliarService){}

  ngOnInit(): void {
    this.listar();
  }

listar(){
  this.avaliarService.listar().subscribe(avaliars=>{
    this.listaavaliars = avaliars;
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
