import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddCustomerModule } from './add-customer/add-customer.module';
import { AddRoomModule } from './add-room/add-room.module';
import { AddBookingModule } from './add-booking/add-booking.module';
import { FormsModule} from '@angular/forms';

//import {MatSidenavModule} from '@angular/material/sidenav';
//import {MatButtonModule, MatCheckboxModule} from '@angular/materia
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewCustomerComponent } from './view-customer/view-customer.component';

import { ViewRoomsComponent } from './view-rooms/view-rooms.component';

import { ViewBookingComponent } from './view-booking/view-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ViewCustomerComponent,
    ViewRoomsComponent,
   
    ViewBookingComponent,
    DashboardComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AddCustomerModule,
    BrowserModule,
    FormsModule,
    AddRoomModule,
    AddBookingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
   

    //MatButtonModule,
    //MatCheckboxModule,
    //MatSidenavModule,
    //MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
