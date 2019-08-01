import { AfterViewInit, Component } from '@angular/core';
import { BeersService } from './+state/beers/beers.service';
import { Beers } from './+state/beers/beers.model';

@Component({
  selector: 'ow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public removeBeers: Beers[] = [];

  public constructor(public beersService: BeersService) {}

  public ngAfterViewInit(): void {
    this.beersService.getAllBeers();
  }

  public chooseBeer(beer: Beers) {
    const idx = this.removeBeers.indexOf(beer);
    if (idx !== -1) {
      this.removeBeers.splice(idx, 1);
    } else {
      this.removeBeers.push(beer);
      if (this.removeBeers.includes(beer)) {
      }
    }

    console.log('Beers: ', this.removeBeers);
  }
}
