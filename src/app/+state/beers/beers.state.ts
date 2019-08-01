import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Beers } from './beers.model';
import { BeersAction } from './beers.actions';

export interface BeersStateModel {
  items: Beers[];
}

@State<BeersStateModel>({
  name: 'BeersState',
  defaults: {
    items: []
  }
})
export class BeersState {

  @Selector()
  public static getState(state: BeersStateModel) {
    return state;
  }

  @Action(BeersAction)
  public add(ctx: StateContext<BeersStateModel>, { payload }: BeersAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
