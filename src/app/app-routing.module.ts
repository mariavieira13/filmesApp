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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
