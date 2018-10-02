import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'NovoCadastro', loadChildren: './novo-cadastro/novo-cadastro.module#NovoCadastroPageModule' },
  { path: 'CadastroSenha', loadChildren: './cadastro-senha/cadastro-senha.module#CadastroSenhaPageModule' },
  { path: 'AtualizarCadastro', loadChildren: './atualizar-cadastro/atualizar-cadastro.module#AtualizarCadastroPageModule' },
  { path: 'FazerLogin', loadChildren: './fazer-login/fazer-login.module#FazerLoginPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
