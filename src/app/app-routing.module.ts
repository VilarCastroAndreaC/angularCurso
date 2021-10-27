import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './components/component/component.component';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'punto1', component: Punto1Component },
  { path: 'componente', component: ComponentComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
