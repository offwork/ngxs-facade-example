import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { BeersState } from './beers/beers.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([BeersState]),
    NgxsDispatchPluginModule.forRoot()
  ],
  exports: [NgxsModule],
})
export class StoreModule {}
