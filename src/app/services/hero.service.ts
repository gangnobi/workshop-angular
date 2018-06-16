import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero-model';
import { Observable, of } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heros: Array<HeroModel> = [];

  constructor(private http: Http) { }

  create(newHero: HeroModel): Observable<Boolean> {
    this.heros.push(newHero);
    return of(true);
  }

  get(): Observable<Response> {
    return this.http.get('http://localhost:8080/heros');
  }

  getById(id: Number): Observable<HeroModel> {
    return of(this.heros.find((ele, index) => {
      return Number(ele.id) === Number(id);
    }));
  }

  edit(id: Number, newHero: HeroModel): Observable<Boolean> {
    const index = this.heros.findIndex((ele, i) => {
      return Number(ele.id) === Number(id);
    });
    this.heros[index] = newHero;
    return of(true);
  }

  delete(id: Number): Observable<Boolean> {
    const index = this.heros.findIndex((ele, i) => {
      return ele.id === id;
    });
    this.heros.splice(index, 1);
    return of(true);
  }
}
