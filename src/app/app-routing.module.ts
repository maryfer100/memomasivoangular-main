import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './componentes/grid/grid.component';
import { LoginComponent } from './componentes/login/login.component';
import { MemoComponent } from './componentes/memo/memo.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', component: LoginComponent},
   { path:'login', component: LoginComponent },
   { path:'memo', component: MemoComponent },
   { path:'grid', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
