import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';


import { Router } from '@angular/router';
import { BookService } from './../service/book.service';

import {Store} from '@ngrx/store';
import {Booking} from '../models/booking';
import {addBooking} from '../add-booking/store/action/booking.actions';
import {BookingState} from '../add-booking/store/reducer/booking.reducer';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  addBookingsForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private store: Store<BookingState>,
    private router: Router,
    private ngZone: NgZone,
    private bookService: BookService){
      this.addBookingsForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        middlename: [''],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phonenumber: ['', [Validators.required]],
        roomnumber: ['', [Validators.required]],
        roomtype: ['', [Validators.required]],
        roomname: ['', [Validators.required]],
        checkin: [''],
        checkout: [''],
        numberofadults: [''],
        numberofchildren: [''],
        roomprice: ['']
    })
  }
    
  
  get f() { return this.addBookingsForm.controls; }

    ngOnInit() { }

    onSubmit(): any {
      this.bookService.AddBook(this.addBookingsForm.value)
      .subscribe(() => {
          console.log('Data added successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/view-booking'))
        }, (err) => {
          console.log(err);
      });
    }
    addBooking( firstname: string, lastname: string, phonenumber: string,
      middlename : string,email: string, address: string,  checkin: string, checkout: string, numberofadults: string, 
      numberofchildren: number, roomname: string, roomtype: string, roomprice : number ): void {
      const booking = new Booking();
      booking.email = email;
      booking.address = address;
      booking.firstname = firstname;
      booking.lastname = lastname;
      booking.middlename = middlename;
      booking.phonenumber = phonenumber;
      booking.checkin = checkin;
      booking.checkout = checkout;
      booking.numberofadults = numberofadults;
      booking.numberofchildren = numberofchildren;
      booking.roomname = roomname;
      booking.roomtype = roomtype;
      booking.roomprice = roomprice;
    
      this.store.dispatch(addBooking(booking));
  }
}
