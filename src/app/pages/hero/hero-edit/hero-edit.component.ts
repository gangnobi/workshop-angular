import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../../../services/hero.service';
import { HeroModel } from '../../../models/hero-model';

@Component({
  selector: 'gang-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  id: Number;
  private heroForm: FormGroup;

  constructor(private route: ActivatedRoute, private f: FormBuilder, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.heroForm = this.f.group({
      id: [''],
      name: [''],
      email: ['', [Validators.email, Validators.required]]
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.heroService.getById(params['id']).subscribe(res => {
        if (res) {
          this.heroForm.setValue({
            id: res.id,
            name: res.name,
            email: res.email
          });
        } else {
          this.router.navigate(['/heros']);
        }
      });
    });
  }

  submitEdit() {
    if (this.heroForm.valid) {
      this.heroService.edit(this.id, new HeroModel(this.heroForm.value)).subscribe(res => console.log('Edit : ' + res));
      this.router.navigate(['/heros']);
    }
  }
}
