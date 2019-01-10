import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateRxCity, validateRxCityWithParams } from '../../shared/validators/city-rx-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [1],
      from: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          //validateRxCityWith,
          validateRxCityWithParams(['Wien', 'Berlin'])
        ]
      ],
      to: [],
      date: []
    });

    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('touched', this.editForm.touched);
    console.log('dirty', this.editForm.dirty);

    this.editForm.valueChanges
      .subscribe(
        value => console.log('current form value', value)
      );
  }

  save(): void {

  }
}
