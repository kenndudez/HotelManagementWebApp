
import {Action, createReducer, on} from '@ngrx/store';

import * as RoomActions from '../action/room.actions';

import {Room} from '../../../models/room';

export const roomFeatureKey = 'room';

export interface RoomState {
  rooms: Room[];

}

export const initialState: RoomState = {
  rooms: []

};

export const roomReducer = createReducer(

  initialState,
  on(RoomActions.addRoom,
    (state: RoomState, {room}) =>
      ({...state,
        rooms: [...state.rooms, room]

      }))

);

export function reducer(state: RoomState | undefined, action: Action): any {
  return roomReducer(state, action);
}