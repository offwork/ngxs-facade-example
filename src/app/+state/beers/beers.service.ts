import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beers } from './beers.model';
import { BASE_URL } from '../tokens';
import { Select } from '@ngxs/store';
import { BeersState } from './beers.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { PersistBeersLoadAction, PersistBeersDeleteAction, PersistBeersEditAction } from './beers.actions';

@Injectable({ providedIn: 'root' })
export class BeersService {
  @Select(BeersState)
  public data$: Observable<Beers[]>;

  private baseUrl: string;

  public constructor(
    private injector: Injector,
    private http: HttpClient
  ) {
    this.baseUrl = this.injector.get(BASE_URL);
  }

  @Dispatch()
  public getAllBeers() {
    return this.http
      .get<Beers[]>(`${this.baseUrl}/beers`)
      .pipe(
        map((beers) => new PersistBeersLoadAction(beers))
      );
  }

  @Dispatch()
  public deleteBeers(beers: Beers[]) {
    return new PersistBeersDeleteAction(beers);
  }

  @Dispatch()
  public editBeer(beers: Beers) {
    return new PersistBeersEditAction(beers);
  }
}
