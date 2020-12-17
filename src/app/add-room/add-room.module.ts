import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddRoomComponent } from './add-room.component';

import {StoreModule} from '@ngrx/store';

import {roomFeatureKey, reducer} from './store/reducer/room.reducer';

@NgModule({
  declarations: [AddRoomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(roomFeatureKey, reducer),
  ]
})
export class AddRoomModule { }
