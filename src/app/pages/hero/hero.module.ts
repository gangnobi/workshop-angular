import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroService } from '../../services/hero.service';
import { HeroLayoutComponent } from './hero-layout/hero-layout.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroRoutingModule
  ],
  declarations: [HeroListComponent, HeroCreateComponent, HeroLayoutComponent, HeroEditComponent],
  exports: [HeroListComponent],
  providers: [HeroService]
})
export class HeroModule { }
