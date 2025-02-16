/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createEvent } from '../fn/event-controller/create-event';
import { CreateEvent$Params } from '../fn/event-controller/create-event';
import { deleteEvent } from '../fn/event-controller/delete-event';
import { DeleteEvent$Params } from '../fn/event-controller/delete-event';
import { DeleteEventResponse } from '../models/delete-event-response';
import { EventDto } from '../models/event-dto';
import { getAllEvents } from '../fn/event-controller/get-all-events';
import { GetAllEvents$Params } from '../fn/event-controller/get-all-events';
import { getCompletedJoinedEvents } from '../fn/event-controller/get-completed-joined-events';
import { GetCompletedJoinedEvents$Params } from '../fn/event-controller/get-completed-joined-events';
import { getEvent } from '../fn/event-controller/get-event';
import { GetEvent$Params } from '../fn/event-controller/get-event';
import { getEventByName } from '../fn/event-controller/get-event-by-name';
import { GetEventByName$Params } from '../fn/event-controller/get-event-by-name';
import { getFullAndActiveJoinedEvents } from '../fn/event-controller/get-full-and-active-joined-events';
import { GetFullAndActiveJoinedEvents$Params } from '../fn/event-controller/get-full-and-active-joined-events';
import { joinEvent } from '../fn/event-controller/join-event';
import { JoinEvent$Params } from '../fn/event-controller/join-event';
import { JoinEventResponse } from '../models/join-event-response';
import { leaveEvent } from '../fn/event-controller/leave-event';
import { LeaveEvent$Params } from '../fn/event-controller/leave-event';
import { LeaveEventResponse } from '../models/leave-event-response';
import { PageResponseEventDto } from '../models/page-response-event-dto';
import { showAllOrganizerEvents } from '../fn/event-controller/show-all-organizer-events';
import { ShowAllOrganizerEvents$Params } from '../fn/event-controller/show-all-organizer-events';
import { updateEvent } from '../fn/event-controller/update-event';
import { UpdateEvent$Params } from '../fn/event-controller/update-event';
import {JoinEventRequest} from '../models/join-event-request';

@Injectable({ providedIn: 'root' })
export class EventControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `showAllOrganizerEvents()` */
  static readonly ShowAllOrganizerEventsPath = '/api/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `showAllOrganizerEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  showAllOrganizerEvents$Response(params: string, context?: HttpContext | undefined): Observable<StrictHttpResponse<Array<EventDto>>> {
    return showAllOrganizerEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `showAllOrganizerEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  showAllOrganizerEvents(params: string, context?: HttpContext): Observable<Array<EventDto>> {
    return this.showAllOrganizerEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EventDto>>): Array<EventDto> => r.body)
    );
  }

  /** Path part for operation `updateEvent()` */
  static readonly UpdateEventPath = '/api/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvent$Response(params: UpdateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<EventDto>> {
    return updateEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvent(params: UpdateEvent$Params, context?: HttpContext): Observable<EventDto> {
    return this.updateEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `createEvent()` */
  static readonly CreateEventPath = '/api/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent$Response(params: CreateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<EventDto>> {
    return createEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent(params: CreateEvent$Params, context?: HttpContext): Observable<EventDto> {
    return this.createEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `deleteEvent()` */
  static readonly DeleteEventPath = '/api/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent$Response(params: {
    eventId: number | undefined
  }, context?: HttpContext | undefined): Observable<StrictHttpResponse<DeleteEventResponse>> {
    return deleteEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent(params: { eventId: number | undefined }, context?: HttpContext): Observable<DeleteEventResponse> {
    return this.deleteEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteEventResponse>): DeleteEventResponse => r.body)
    );
  }

  /** Path part for operation `joinEvent()` */
  static readonly JoinEventPath = '/api/events/join';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `joinEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  joinEvent$Response(params: {
    eventName: string | undefined;
    body: JoinEventRequest
  }, context?: HttpContext | undefined): Observable<StrictHttpResponse<JoinEventResponse>> {
    return joinEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `joinEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  joinEvent(params: {
    eventName: string | undefined;
    body: JoinEventRequest
  }, context?: HttpContext): Observable<JoinEventResponse> {
    return this.joinEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<JoinEventResponse>): JoinEventResponse => r.body)
    );
  }

  /** Path part for operation `getEvent()` */
  static readonly GetEventPath = '/api/events/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEvent$Response(params: number, context?: HttpContext | undefined): Observable<StrictHttpResponse<EventDto>> {
    return getEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEvent(params: number, context?: HttpContext): Observable<EventDto> {
    return this.getEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `getFullAndActiveJoinedEvents()` */
  static readonly GetFullAndActiveJoinedEventsPath = '/api/events/joined';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFullAndActiveJoinedEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFullAndActiveJoinedEvents$Response(params?: GetFullAndActiveJoinedEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseEventDto>> {
    return getFullAndActiveJoinedEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFullAndActiveJoinedEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFullAndActiveJoinedEvents(params?: GetFullAndActiveJoinedEvents$Params, context?: HttpContext): Observable<PageResponseEventDto> {
    return this.getFullAndActiveJoinedEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseEventDto>): PageResponseEventDto => r.body)
    );
  }

  /** Path part for operation `getCompletedJoinedEvents()` */
  static readonly GetCompletedJoinedEventsPath = '/api/events/joined-completed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompletedJoinedEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompletedJoinedEvents$Response(params?: GetCompletedJoinedEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseEventDto>> {
    return getCompletedJoinedEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCompletedJoinedEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompletedJoinedEvents(params?: GetCompletedJoinedEvents$Params, context?: HttpContext): Observable<PageResponseEventDto> {
    return this.getCompletedJoinedEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseEventDto>): PageResponseEventDto => r.body)
    );
  }

  /** Path part for operation `getEventByName()` */
  static readonly GetEventByNamePath = '/api/events/eventName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventByName$Response(params: string, context?: HttpContext | undefined): Observable<StrictHttpResponse<EventDto>> {
    return getEventByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventByName(params: string, context?: HttpContext): Observable<EventDto> {
    return this.getEventByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventDto>): EventDto => r.body)
    );
  }

  /** Path part for operation `getAllEvents()` */
  static readonly GetAllEventsPath = '/api/events/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents$Response(params?: GetAllEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseEventDto>> {
    return getAllEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents(params?: GetAllEvents$Params, context?: HttpContext): Observable<PageResponseEventDto> {
    return this.getAllEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseEventDto>): PageResponseEventDto => r.body)
    );
  }

  /** Path part for operation `leaveEvent()` */
  static readonly LeaveEventPath = '/api/events/leaveEvent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `leaveEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  leaveEvent$Response(params: {
    eventId: number | undefined
  }, context?: HttpContext | undefined): Observable<StrictHttpResponse<LeaveEventResponse>> {
    return leaveEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `leaveEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  leaveEvent(params: { eventId: number | undefined }, context?: HttpContext): Observable<LeaveEventResponse> {
    return this.leaveEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<LeaveEventResponse>): LeaveEventResponse => r.body)
    );
  }

}
