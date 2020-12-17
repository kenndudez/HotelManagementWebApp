import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';


import { Router } from '@angular/router';
import { CustomerService } from './../service/customer.service';
import {Store} from '@ngrx/store';
import {Customer} from '../models/customer';
import {addCustomer} from '../add-customer/store/action/customer.actions';
import {CustomerState} from '../add-customer/store/reducer/customer.reducer';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {

//customers$: Observable<Customer[]>;
addCustomerForm: FormGroup;
submitted = false;
constructor(private http: HttpClient, private store: Store<CustomerState>,
  public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private customerService: CustomerService
  )
{
  this.addCustomerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      middlename: [''],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]]
  })
}

get f() { return this.addCustomerForm.controls; }
// onSubmit() {
  
//   this.submitted = true;
  
//   if (this.addCustomerForm.invalid) {
//       return;
//   }
  
//   if(this.submitted)
//   {
    
    
//      var myFormData = new FormData();
  
//      myFormData.append('phonenumber', this.addCustomerForm.value.phonenumber);
//      myFormData.append('address', this.addCustomerForm.value.address);
//      myFormData.append('middlename', this.addCustomerForm.value.middlename);
//      myFormData.append('lastname', this.addCustomerForm.value.lastname);
//       myFormData.append('firstname', this.addCustomerForm.value.firstname);
//       myFormData.append('email', this.addCustomerForm.value.email);
  
     
//     //post request
//     return this.http.post('http://localhost:3000/customer'
//     ,myFormData).subscribe((res: Response) => {
     
//         //sweetalert message popup
//         Swal.fire({
//         title: 'Hurray!!',
//         text:   this.addCustomerForm.value.firstname+" has been added successfully",
//         icon: 'success'
//       });
   
//   });
//   }
 
// }
ngOnInit() { }

onSubmit(): any {
  this.customerService.AddCustomer(this.addCustomerForm.value)
  .subscribe(() => {
      console.log('Data added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/view-book'))
    }, (err) => {
      console.log(err);
  });
}


  addCustomer(email: string, address: string, firstname: string, lastname: string, 
    middlename : string, phonenumber: string ): void {
    const customer = new Customer();
    customer.email = email;
    customer.address = address;
    customer.firstname = firstname;
    customer.lastname = lastname;
    customer.middlename = middlename;
    customer.phonenumber = phonenumber
    this.store.dispatch(addCustomer(customer));
}
}
