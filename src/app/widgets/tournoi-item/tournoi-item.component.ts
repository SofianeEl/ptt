import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {getLocationById, Location, Tournoi} from "../../domain/tournoi";

@Component({
  selector: 'app-tournoi-item',
  templateUrl: './tournoi-item.component.html',
  styleUrls: ['./tournoi-item.component.scss']
})
export class TournoiItemComponent implements OnChanges {
  @Input() tournoi?: Tournoi

  location?: Location

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tournoi']) {
      this.location = this.tournoi?.locationId ? getLocationById(this.tournoi?.locationId) : undefined
    }
  }
}
