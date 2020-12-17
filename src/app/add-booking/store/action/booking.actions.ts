
import { createAction, props } from '@ngrx/store';

import {Booking} from '../../../models/booking';
export const addBooking = createAction(

  '[Booking] Add Booking',

  (booking: Booking) => ({booking})

);




