import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Flight } from '../entities/flight';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    this.http
      .get<Flight[]>(
        url,
        {
          headers,
          params
        }
      )
      .subscribe(
        (flights: Flight[]) => {
          this.flights = flights;
          console.log(flights);
        },
        errResp => console.error('Error loading flights', errResp)
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  logFilter(): void {
    console.log(this.from, this.to);
  }
}
