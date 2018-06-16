import { Component, OnInit } from '@angular/core';
import { HeroSetting } from '../../../models/hero-setting';

@Component({
  selector: 'gang-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  public heroSetting: HeroSetting[] = [new HeroSetting({
    id: 1,
    heroId: 2,
    fly: true,
    run: true,
    swim: true
  })];

  ngOnInit() {
  }

  editBt(e) {
    console.log(e);
  }

  deleteBt(e) {
    console.log(e);
  }
}
