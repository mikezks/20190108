import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    FlightBookingRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FlightBookingModule { }
