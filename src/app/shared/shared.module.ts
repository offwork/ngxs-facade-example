import { NgModule } from '@angular/core';
import { DesingModule } from './design.module';

@NgModule({
  imports: [ DesingModule ],
  exports: [DesingModule],
})
export class SahredModule {}
