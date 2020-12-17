import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddBookingComponent } from './add-booking.component';

import {StoreModule} from '@ngrx/store';

import {BookingFeatureKey, reducer} from './store/reducer/booking.reducer';



@NgModule({
  declarations: [AddBookingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(BookingFeatureKey, reducer),
  ]
})
export class AddBookingModule { }
