import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from './+state/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SahredModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SahredModule,
    AppRoutingModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
