import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CustomerService } from './../service/customer.service';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../add-customer/store/selector/customer.selectors';
import {CustomerState} from '../add-customer/store/reducer/customer.reducer';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customers$: Observable<Customer[]>;
  Customers:any = [];
  constructor(private router: Router, private store: Store<CustomerState>, private customerService: CustomerService){

    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
    this.customerService.GetCustomer().subscribe(res => {
      console.log(res)
      this.Customers=res;
    });    
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.customerService.deleteCustomer(id).subscribe((res) => {
        this.Customers.splice(i, 1);
      })
    }
  }
}
