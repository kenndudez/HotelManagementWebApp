import {Action, createReducer, on} from '@ngrx/store';
import * as BookingActions from '../action/booking.actions';
import {Booking} from '../../../models/booking';
export const BookingFeatureKey = 'booking';
export interface BookingState {
  bookings: Booking[];
}
export const initialState: BookingState = {

  bookings: []
};
export const bookingReducer = createReducer(
  initialState,

  on(BookingActions.addBooking,

    (state: BookingState, {booking}) =>
      ({...state,

        bookings: [...state.bookings, booking]
      }))

);

export function reducer(state: BookingState | undefined, action: Action): any {
  return bookingReducer(state, action);

}