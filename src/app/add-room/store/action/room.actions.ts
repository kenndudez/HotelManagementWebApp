import { createAction, props } from '@ngrx/store';
import {Room} from '../../../models/Room';
export const addRoom = createAction(
  '[Room] Add Room',
  (room: Room) => ({room})
);


