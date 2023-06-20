import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http:HttpClient) { }

  listar():Observable<jogo[]>{
    return this.http.get<jogo[]>('http://localhost:3000/jogo');
    }

  inserir(jogo:jogo):Observable<jogo>{
    return this.http.post<jogo>('http://localhost:3000/jogo',jogo);
    }

   atualizar(jogo:jogo):Observable<jogo>{
    return this.http.put<jogo>(`http://localhost:3000/jogo/${jogo.id}`,jogo);
   }

   apagar(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/jogo/${id}`);
  }


}
