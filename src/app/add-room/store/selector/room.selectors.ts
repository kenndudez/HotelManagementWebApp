1
import {createFeatureSelector, createSelector} from '@ngrx/store';
2
import * as fromRoom from '../reducer/room.reducer';
3
4
export const selectRoomState = createFeatureSelector<fromRoom.RoomState>(

  fromRoom.roomFeatureKey,

);

export const selectRooms = createSelector(
  selectRoomState,

  (state: fromRoom.RoomState) => state.rooms
);