import { State, Action, StateContext } from '@ngxs/store';
import { Beers } from './beers.model';
import { PersistBeersDeleteAction, PersistBeersLoadAction, PersistBeersEditAction } from './beers.actions';

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

  @Action(PersistBeersEditAction)
  private persistEdit(ctx: StateContext<Beers[]>, { payload }: PersistBeersEditAction) {
    ctx.setState(ctx.getState().reduce((acc, cur) => {
      if (cur.id === payload.id) {
        cur = payload;
      }
      acc.push(cur);
      return acc;
    }, []));
  }
}
