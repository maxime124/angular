import { NgModule}      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }         from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { HeroSearchComponent }     from './hero-search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';


@NgModule({
    imports:        [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        InMemoryWebApiModule.forRoot(InMemoryDataService),
                        AppRoutingModule
                    ],
    declarations:   [
                        AppComponent,
                        HeroesComponent,
                        HeroDetailComponent,
                        DashboardComponent,
                        HeroSearchComponent
                    ],
    providers: [
        HeroService
    ],
    bootstrap:      [AppComponent]
})

export class AppModule {}
