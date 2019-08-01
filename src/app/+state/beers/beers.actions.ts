import { Beers } from './beers.model';

export class BeersAction {
  public static readonly type = '[Beers] Add item';
  constructor(public payload: Beers) { }
}
