import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [
    new Hero(1, "super-man"),
    new Hero(2, "spider-man"),
    new Hero(3, "ant-man"),
  ];
  favoriteHero: Hero;

  ngOnInit(): void {
    this.favoriteHero = this.heroes[0];
  }

}
