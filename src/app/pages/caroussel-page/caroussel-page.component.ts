import {Component, OnInit} from '@angular/core';
import {Location, locations} from "../../domain/tournoi";

@Component({
  selector: 'app-caroussel-page',
  templateUrl: './caroussel-page.component.html',
  styleUrls: ['./caroussel-page.component.scss']
})
export class CarousselPageComponent implements OnInit {
  locations = locations

  currentIndex!: number
  currentLocation!: Location

  ngOnInit(): void {
    this.onMoveToIndex(0)
  }

  onPrevious() {
    this.onMoveToIndex(this.currentIndex - 1)
  }

  onNext() {
    this.onMoveToIndex(this.currentIndex + 1)
  }

  private onMoveToIndex(index: number) {
    if (index < 0) {
      index = this.locations.length - 1
    } else if (index >= this.locations.length) {
      index = 0
    }

    this.currentIndex = index
    this.currentLocation = this.locations[index]
  }
}
