1
import {createFeatureSelector, createSelector} from '@ngrx/store';
2
import * as fromBooking from '../reducer/booking.reducer';
3
4
export const selectBookingState = createFeatureSelector<fromBooking.BookingState>(

  fromBooking.BookingFeatureKey,

);

export const selectBookings = createSelector(
  selectBookingState,

  (state: fromBooking.BookingState) => state.bookings
);