import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';


import { Router } from '@angular/router';
import { RoomService } from './../service/room.service';

import {Store} from '@ngrx/store';
import {Room} from '../models/room';
import {addRoom} from '../add-room/store/action/room.actions';
import {RoomState} from '../add-room/store/reducer/room.reducer';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  addRoomForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient,
     private store: Store<RoomState>, public formBuilder: FormBuilder,
     private router: Router,
     private ngZone: NgZone,
     private roomService: RoomService){
      this.addRoomForm = this.formBuilder.group({
        roomnumber: ['', [Validators.required]],
        roomtype: ['', [Validators.required]],
        roomname: ['', [Validators.required]],

        roomprice: ['', [Validators.required]]
    })
     }

     ngOnInit() { }
  
  get f() { return this.addRoomForm.controls; }
  // onSubmit() {
    
  //   this.submitted = true;
    
  //   if (this.addRoomForm.invalid) {
  //       return;
  //   }
    
  //   if(this.submitted)
  //   {
      
      
  //      var myFormData = new FormData();
    
  //      myFormData.append('roomNumber', this.addRoomForm.value.roomnumber);
  //      myFormData.append('roomType', this.addRoomForm.value.roomtype);
  //       myFormData.append('roomName', this.addRoomForm.value.roomname);
  //       myFormData.append('roomPrice', this.addRoomForm.value.price);
    
  //     //post request
  //     return this.http.post('http://localhost/save.php/'
  //     , myFormData).subscribe((res: Response) => {
       
  //         //sweetalert message popup
  //         Swal.fire({
  //         title: 'Hurray!!',
  //         text:   this.addRoomForm.value.firstname+" has been added successfully",
  //         icon: 'success'
  //       });
     
  //   });
  //   }
   
  // }
  
  onSubmit(): any {
    this.roomService.AddRoom(this.addRoomForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/view-room'))
      }, (err) => {
        console.log(err);
    });
  }
    addRoom(roomname: string, roomnumber: number, roomprice: number, roomtype:string): void {
      const room = new Room();
      room.roomname = roomname;
      room.roomnumber = roomnumber;
      room.roomprice = roomprice;
      room.roomtype = roomtype;
      this.store.dispatch(addRoom(room));
  }
}
