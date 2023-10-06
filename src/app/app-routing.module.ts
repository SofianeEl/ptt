import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ListeTournoisPageComponent} from "./pages/liste-tournois-page/liste-tournois-page.component";
import {DetailTournoiPageComponent} from "./pages/detail-tournoi-page/detail-tournoi-page.component";
import {AjoutTournoiPageComponent} from "./pages/ajout-tournoi-page/ajout-tournoi-page.component";
import {CarousselPageComponent} from "./pages/caroussel-page/caroussel-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'liste', component: ListeTournoisPageComponent },
  { path: 'liste/:id', component: DetailTournoiPageComponent },
  { path: 'ajout', component: AjoutTournoiPageComponent },
  { path: 'edition/:id', component: AjoutTournoiPageComponent },
  { path: 'caroussel', component: CarousselPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
