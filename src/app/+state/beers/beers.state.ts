import { State, Action, Selector, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { Beers } from './beers.model';
import { BeersAction, PersistBeersByIndexAction } from './beers.actions';
import { BeersService } from './beers.service';

export interface BeersStateModel {
  beers: Beers[];
  beer: Beers;
}

@State<BeersStateModel>({
  name: 'BeersState',
  defaults: {
    beers: [],
    beer: null,
  }
})
export class BeersState {

  @Selector()
  public static getState(state: BeersStateModel) {
    return state;
  }

  @Selector()
  public static getBeerByIndex(beer: Beers) {
    return beer;
  }

  @Action(BeersAction)
  public add(ctx: StateContext<BeersStateModel>, { payload }: BeersAction) {
    const stateModel = ctx.getState();
    stateModel.beers = [...stateModel.beers, payload];
    ctx.setState(stateModel);
  }

  @Action(PersistBeersByIndexAction)
  public persistByIndex(ctx: StateContext<BeersStateModel>, { payload }: PersistBeersByIndexAction) {
    const stateModel = ctx.getState();
    this.beerService
      .getBeerById(payload)
      .pipe(
        map((beer) => {
          console.log(beer);
        })
      );
  }

  public constructor(private beerService: BeersService) {}
}
