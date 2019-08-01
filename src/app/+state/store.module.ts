import { NgModule, InjectionToken } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { BeersState } from './beers/beers.state';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BASE_URL } from './tokens';
@NgModule({
  imports: [
    HttpClientModule,
    NgxsModule.forRoot([BeersState], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot()
  ],
  exports: [NgxsModule],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'https://api.punkapi.com/v2',
    }
  ]
})
export class StoreModule {}
