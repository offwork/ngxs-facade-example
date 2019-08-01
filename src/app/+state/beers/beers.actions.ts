import { Beers } from './beers.model';

export class PersistBeersDeleteAction {
  public static readonly type = '[Beers] Persist Delete';
  public constructor(public payload: Beers[]) { }
}

export class PersistBeersEditAction {
  public static readonly type = '[Beers] Persist Edit';
  public constructor(public payload: Beers) { }
}

export class PersistBeersLoadAction {
  public static readonly type = '[Beers] Persist Load';
  public constructor(public beers: Beers[]) { }
}
