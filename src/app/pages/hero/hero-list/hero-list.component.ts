import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../../models/hero-model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'gang-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  private heroForm: FormGroup;

  heros: Array<HeroModel> = [];

  constructor(private f: FormBuilder, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.get().subscribe(res => {
      this.heros = res;
    });
  }

  deleteBt(id: Number) {
    this.heroService.delete(id).subscribe(res => console.log(res));
  }

}
