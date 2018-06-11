import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../../models/hero-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'gang-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {

  private heroForm: FormGroup;

  constructor(private f: FormBuilder, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.heroForm = this.f.group({
      id: [''],
      name: [''],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  submit() {
    if (this.heroForm.valid) {
      this.heroService.create(new HeroModel(this.heroForm.value)).subscribe(res => console.log(res));
      this.router.navigate(['/heros']);
    }
  }
}
