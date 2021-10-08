import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
      path: 'inicio',
      component: InicioComponent
    },
    {
      path: 'curriculum',
      component: CurriculumComponent
    },
    {
      path: 'contacto',
      component: ContactoComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '**',
      redirectTo: 'inicio'
    },
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}
