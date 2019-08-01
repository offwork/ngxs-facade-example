import { State, Action, StateContext } from '@ngxs/store';
import { Beers } from './beers.model';
import { PersistBeersDeleteAction, PersistBeersLoadAction } from './beers.actions';

@State<Beers[]>({
  name: 'beers',
  defaults: []
})
export class BeersState {
  @Action(PersistBeersLoadAction)
  private persistLoad(ctx: StateContext<Beers[]>, { beers }: PersistBeersLoadAction) {
    ctx.setState(beers);
  }

  @Action(PersistBeersDeleteAction)
  private persistDelete(ctx: StateContext<Beers[]>, { payload }: PersistBeersDeleteAction) {
    ctx.setState(ctx.getState().filter((beer: Beers) => !payload.includes(beer)));
  }
}
