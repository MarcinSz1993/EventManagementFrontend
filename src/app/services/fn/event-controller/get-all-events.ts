/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseEventDto } from '../../models/page-response-event-dto';

export interface GetAllEvents$Params {
  page?: number;
  size?: number;
}

export function getAllEvents(http: HttpClient, rootUrl: string, params?: GetAllEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseEventDto>> {
  const rb = new RequestBuilder(rootUrl, getAllEvents.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseEventDto>;
    })
  );
}

getAllEvents.PATH = '/api/events/all';
