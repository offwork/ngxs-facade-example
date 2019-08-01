import { AfterViewInit, Component } from '@angular/core';
import { BeersService } from './+state/beers/beers.service';
import { Beers } from './+state/beers/beers.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public removeBeers: Beers[] = [];

  public currentBeer: Beers;

  public beerForm: FormGroup = this.fb.group({
    name: [''],
    first_brewed: [''],
    tagline: [''],
    description: ['']
  });

  public constructor(public beersService: BeersService, private fb: FormBuilder) {}

  public ngAfterViewInit(): void {
    this.beersService.getAllBeers();
  }

  public chooseBeer(beer: Beers) {
    const idx = this.removeBeers.indexOf(beer);
    this.currentBeer = beer;

    if (idx !== -1) {
      this.removeBeers.splice(idx, 1);
      this.resetBeerForm();
    } else {
      this.removeBeers.push(beer);
      this.beerForm.setValue({
        name: beer.name,
        first_brewed: beer.first_brewed,
        tagline: beer.tagline,
        description: beer.description
      });
    }
  }

  public getCurrentBeer() {
    this.currentBeer = this.updateBeer(this.currentBeer, this.beerForm.value);
    if (this.beerForm.status === 'VALID' && this.beerForm.dirty) {
      this.beersService.editBeer(this.currentBeer);
    }
  }

  public resetBeerForm() {
    this.beerForm.reset({});
  }

  private updateBeer(beer: Beers, partial: any) {
    return { ...beer, ...partial };
  }
}
