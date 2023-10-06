import { Component } from '@angular/core';
import {TournoisService} from "../../services/tournois.service";
import {Tournoi} from "../../domain/tournoi";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']

})
export class HomePageComponent {
  title?:string
  description?:string

  next?: Tournoi

  constructor(private tournoisService: TournoisService) {
  }

  ngOnInit() {
    this.title = "P T T"

    this.tournoisService.next().subscribe(tournoi => {
      this.next = tournoi
    })
  }

}

