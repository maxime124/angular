import { Component, Input,OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
    selector: 'my-hero-detail',
    templateUrl: `app/hero-detail.component.html`,
    styleUrls: [ 'app/hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; //convert string parameter to int
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void{
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}