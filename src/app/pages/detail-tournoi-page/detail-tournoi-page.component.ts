import {Component, OnInit} from '@angular/core';
import {TournoisService} from "../../services/tournois.service";
import {ActivatedRoute} from "@angular/router";
import {getLocationById, Location, Tournoi} from "../../domain/tournoi";
import {Lightbox} from "ngx-lightbox";

@Component({
  selector: 'app-detail-tournoi-page',
  templateUrl: './detail-tournoi-page.component.html',
  styleUrls: ['./detail-tournoi-page.component.scss']
})
export class DetailTournoiPageComponent implements OnInit {
  loading = true
  tournoi?: Tournoi
  location?: Location

  constructor(private tournoisService: TournoisService, private route: ActivatedRoute, private lightbox: Lightbox) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')!

    this.tournoisService.get(id).subscribe(tournoi => {
      this.tournoi = tournoi
      this.location = this.tournoi?.locationId ? getLocationById(this.tournoi.locationId) : undefined
      this.loading = false
    })
  }

  onDelete() {
    this.tournoisService.delete(this.tournoi!.id).subscribe(() => {
      this.tournoi = undefined
      this.location = undefined
    })
  }

  onLightbox(location: Location) {
    this.lightbox.open([{
      src: location.image,
      thumb: location.image,
      caption: location.name
    }], 0)
  }
}


