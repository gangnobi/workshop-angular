import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroLayoutComponent } from './hero-layout/hero-layout.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

const routes: Routes = [
    {
        path: 'heros',
        component: HeroLayoutComponent,
        children: [
            {
                path: 'create',
                component: HeroCreateComponent
            }, {
                path: '',
                component: HeroListComponent
            }]
    },
    {
        path: 'hero',
        component: HeroLayoutComponent,
        children: [
            {
                path: ':id',
                component: HeroEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroRoutingModule { }
