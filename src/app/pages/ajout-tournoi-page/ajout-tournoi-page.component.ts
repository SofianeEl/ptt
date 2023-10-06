import {Component, OnInit} from '@angular/core';
import {levelOptions, locations, Tournoi} from "../../domain/tournoi";
import {v4 as uuidv4} from "uuid";
import {TournoisService} from "../../services/tournois.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajout-tournoi-page',
  templateUrl: './ajout-tournoi-page.component.html',
  styleUrls: ['./ajout-tournoi-page.component.scss']
})
export class AjoutTournoiPageComponent implements OnInit {
  title?:string

  tournoi?: Tournoi
  date?: string

  levelOptions = levelOptions
  locations = locations

  constructor(private tournoisService: TournoisService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')!

    if (id) {
      this.tournoisService.get(id).subscribe(tournoi => {
        this.tournoi = tournoi
        this.date = new Date(this.tournoi!.date).toISOString().slice(0,16)
      })
    } else {
      this.tournoi = {
        id: uuidv4(),
        name: '',
        date: new Date().getTime()
      }
      this.date = new Date(this.tournoi.date).toISOString().slice(0,16)
    }

    this.title = "Nous vous invitons a préparer votre tournois"
  }

  onSave() {
    this.tournoi!.date = new Date(this.date!).getTime()

    this.tournoisService.save(this.tournoi!).subscribe(tournoi => {
      this.router.navigateByUrl('/liste/' + tournoi.id)
    })
  }

  protected readonly Option = Option;
}
