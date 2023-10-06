import {Injectable} from '@angular/core';
import {delay, map, Observable, of} from "rxjs";
import {Tournoi} from "../domain/tournoi";
import {v4 as uuidv4} from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class TournoisService {
    constructor() {
        if (localStorage.length == 0) {
            let tournois: Tournoi[] = [
                {
                    id: uuidv4(),
                    name: 'Tournois des champions',
                    date: new Date(2023, 9, 1).getTime(),
                    locationId: '10'
                },
                {
                    id: uuidv4(),
                    name: 'Petit tournoi',
                    date: new Date(2023, 8, 24).getTime(),
                    locationId: '50'
                }
            ]

            tournois.forEach(tournoi => {
                localStorage.setItem(tournoi.id, JSON.stringify(tournoi))
            })
        }
    }

    next(): Observable<Tournoi | undefined> {
        return this.list().pipe(map(tournois => {
            if (tournois.length >= 0) {
                return tournois[0]
            } else {
                return undefined
            }
        }))
    }

    list(): Observable<Tournoi[]> {
        return of(Object.values(localStorage)
            .map(json => JSON.parse(json) as Tournoi)
            .sort((a, b) => b.date - a.date))
    }

    get(id: string): Observable<Tournoi | undefined> {
        return this.list().pipe(map(value => value.find(it => it.id == id))).pipe(delay(500))
    }

    save(tournoi: Tournoi) : Observable<Tournoi> {
        localStorage.setItem(tournoi.id, JSON.stringify(tournoi))

        return of(tournoi)
    }

    delete(id: string): Observable<void> {
        localStorage.removeItem(id)

        return of(void 0)
    }
}
