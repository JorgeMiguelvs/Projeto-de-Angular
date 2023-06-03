import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  listar():Observable<categoria[]>{
    return this.http.get<categoria[]>('http://localhost:3000/categoria');
    }

  inserir(categoria:categoria):Observable<categoria>{
    return this.http.post<categoria>('http://localhost:3000/categoria',categoria);
    }

   atualizar(categoria:categoria):Observable<categoria>{
    return this.http.put<categoria>(`http://localhost:3000/categoria/${categoria.id}`,categoria);
   }

   apagar(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/jogo/${id}`);
  }
}
