import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoComponent } from './views/jogo/jogo.component';
import { AvaliarComponent } from './views/avaliar/avaliar.component';

const routes: Routes = [
  {path:'jogo',component:JogoComponent},
  {path:'avaliar',component:AvaliarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
