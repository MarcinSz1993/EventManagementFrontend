/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateUserRequest } from '../../models/create-user-request';
import { CreateUserResponse } from '../../models/create-user-response';

export interface CreateUser$Params {
      body: CreateUserRequest
}

export function createUser(http: HttpClient, rootUrl: string, params: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateUserResponse>> {
  const rb = new RequestBuilder(rootUrl, createUser.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateUserResponse>;
    })
  );
}

createUser.PATH = '/api/users';
