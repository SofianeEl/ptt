import {Component, OnInit} from '@angular/core';
import {TournoisService} from "../../services/tournois.service";
import {Location, Tournoi, getLocationById} from "../../domain/tournoi";
import {validate} from "uuid/index";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-liste-tournois-page',
  templateUrl: './liste-tournois-page.component.html',
  styleUrls: ['./liste-tournois-page.component.scss']
})
export class ListeTournoisPageComponent implements OnInit {
  title?:string

  tournois: Tournoi[] = []

  constructor(private tournoisService: TournoisService) {
  }

  ngOnInit() {
    this.tournoisService.list().subscribe(tournois => {
      this.tournois = tournois
    })

    this.title = "Liste des tournois"
  }

  getLocationById(id?: string): Location | undefined {
    return id ? getLocationById(id) : undefined
  }
}
