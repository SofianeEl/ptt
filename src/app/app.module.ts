import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListeTournoisPageComponent } from './pages/liste-tournois-page/liste-tournois-page.component';
import { DetailTournoiPageComponent } from './pages/detail-tournoi-page/detail-tournoi-page.component';
import { AjoutTournoiPageComponent } from './pages/ajout-tournoi-page/ajout-tournoi-page.component';
import { NavBarComponent } from './widgets/nav-bar/nav-bar.component';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './widgets/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  {  LightboxModule  }  from  'ngx-lightbox';
import { TournoiItemComponent } from './widgets/tournoi-item/tournoi-item.component';
import { CarousselPageComponent } from './pages/caroussel-page/caroussel-page.component' ;




registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListeTournoisPageComponent,
    DetailTournoiPageComponent,
    AjoutTournoiPageComponent,
    NavBarComponent,
    FooterComponent,
    TournoiItemComponent,
    CarousselPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    LightboxModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

