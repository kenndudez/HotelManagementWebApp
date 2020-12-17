import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {StoreModule} from '@ngrx/store';

import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';
import { AddCustomerComponent } from './add-customer.component';

@NgModule({
  declarations: [AddCustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    
  ],

  
})
export class AddCustomerModule { }
