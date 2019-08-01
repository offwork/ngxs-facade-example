import { Beers } from './beers.model';

export class BeersAction {
  public static readonly type = '[Beers] Add item';
  constructor(public payload: Beers) { }
}
export class PersistBeersByIndexAction {
  public static readonly type = '[Beers] Persist By Index';
  public constructor(public payload: number | string) { }
}
