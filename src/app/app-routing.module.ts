import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { AddCustomerComponent } from "./add-customer/add-customer.component";
import { AddRoomComponent } from './add-room/add-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewCustomerComponent } from "./view-customer/view-customer.component";
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';
const routes: Routes = [ {path: 'add-customer' , component: AddCustomerComponent},
{path: 'view-customer' , component: ViewCustomerComponent},
{path: 'view-room' , component: ViewRoomsComponent},
{path: 'add-room' , component: AddRoomComponent},
{path: 'add-booking' , component: AddBookingComponent},
{path: 'view-booking' , component: ViewBookingComponent},
{path: 'dashboard' , component: DashboardComponent},
{ path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
