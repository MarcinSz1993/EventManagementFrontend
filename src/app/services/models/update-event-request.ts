/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface UpdateEventRequest {
  eventDate?: string;
  eventDescription?: string;
  eventName?: string;
  eventTarget?: 'FAMILY' | 'SINGLES' | 'CHILDREN' | 'EVERYBODY' | 'ADULTS_ONLY';
  location?: string;
  maxAttendees?: number;
  ticketPrice?: number;
}
