import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSettingRoutingModule } from './hero-setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HeroSettingRoutingModule,
    ComponentsModule
  ],
  declarations: [SettingComponent]
})
export class HeroSettingModule { }
