import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'one-direction-this-is-us',
    loadChildren: () => import('./filmes/one-direction-this-is-us/one-direction-this-is-us.module').then( m => m.OneDirectionThisIsUsPageModule)
  },
  {
    path: 'one-direction-where-we-are',
    loadChildren: () => import('./filmes/one-direction-where-we-are/one-direction-where-we-are.module').then( m => m.OneDirectionWhereWeArePageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'cidades-de-papel',
    loadChildren: () => import('./filmes/cidades-de-papel/cidades-de-papel.module').then( m => m.CidadesDePapelPageModule)
  },
  {
    path: 'tudo-e-todas-as-coisas',
    loadChildren: () => import('./filmes/tudo-e-todas-as-coisas/tudo-e-todas-as-coisas.module').then( m => m.TudoETodasAsCoisasPageModule)
  },
  {
    path: 'orgulho-e-prconceito',
    loadChildren: () => import('./filmes/orgulho-e-prconceito/orgulho-e-prconceito.module').then( m => m.OrgulhoEPrconceitoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
