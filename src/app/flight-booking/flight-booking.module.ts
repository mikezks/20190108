import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FlightBookingModule { }
