import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoComponent } from './views/jogo/jogo.component';
import { AvaliarComponent } from './views/avaliar/avaliar.component';
import { CategoriaComponent } from './views/categoria/categoria.component';

const routes: Routes = [
  {path:'jogo',component:JogoComponent},
  {path:'avaliar',component:AvaliarComponent},
  {path:'categoria',component:CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
