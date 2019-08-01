import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beers } from './beers.model';
import { BASE_URL } from '../tokens';

@Injectable({ providedIn: 'root' })
export class BeersService {
  private baseUrl: string;

  public constructor(
    private injector: Injector,
    private http: HttpClient
  ) {
    this.baseUrl = this.injector.get(BASE_URL);
  }

  public getBeerById(id: number | string): Observable<Beers> {
    return this.http.get<Beers>(`${this.baseUrl}/beers/${id}`);
  }
}
