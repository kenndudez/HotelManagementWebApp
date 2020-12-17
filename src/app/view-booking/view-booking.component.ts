import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { BookService } from './../service/book.service';
import {Observable} from 'rxjs';
import {Booking} from '../models/booking';
import {select, Store} from '@ngrx/store';
import {selectBookings} from '../add-booking/store/selector/booking.selectors';
import {BookingState} from '../add-booking/store/reducer/booking.reducer';
@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  Bookings:any = [];
  constructor(private router: Router, private store: Store<BookingState>, private bookingService: BookService) { 
    this.bookings$ = this.store.pipe(select(selectBookings));
  }

  ngOnInit(): void {
    this.bookingService.GetBook().subscribe(res => {
      console.log(res)
      this.Bookings=res;
    });    
  }


}
