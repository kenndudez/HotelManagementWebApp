import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectRooms} from '../add-room/store/selector/room.selectors';
import {RoomState} from '../add-room/store/reducer/room.reducer';
import { Room } from '../models/room';
import { RoomService } from './../service/room.service';
@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  rooms$: Observable<Room[]>;
  Rooms:any = [];
  constructor(private router: Router, private store: Store<RoomState>, private roomService: RoomService) { 

    this.rooms$ = this.store.pipe(select(selectRooms));
  }

  ngOnInit(): void {
    this.roomService.GetRoom().subscribe(res => {
      console.log(res)
      this.Rooms = res;
    });    
  }

}
