import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { avaliar } from '../model/avaliar';

@Injectable({
  providedIn: 'root'
})
export class AvaliarService {

  constructor(private http:HttpClient) { }

  inserir(avaliar:avaliar):Observable<avaliar>{
    return this.http.post<avaliar>('http://localhost:3000/avaliar',avaliar);
    }

    listar():Observable<avaliar[]>{
    return this.http.get<avaliar[]>('http://localhost:3000/avaliar');
    }

    atualizar(avaliar:avaliar):Observable<avaliar>{
      return this.http.put<avaliar>(`http://localhost:3000/avaliar/${avaliar.id_avaliar}`,avaliar);
     }
  
     apagar(id:number):Observable<any>{
      return this.http.delete(`http://localhost:3000/avaliar/${id}`);
  
  }
}
