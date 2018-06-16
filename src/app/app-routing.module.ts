import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'heros',
    loadChildren: './pages/hero/hero.module#HeroModule'
  }, {
    path: 'setting',
    loadChildren: './pages/hero-setting/hero-setting.module#HeroSettingModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
