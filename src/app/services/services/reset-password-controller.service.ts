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

import { resetPassword } from '../fn/reset-password-controller/reset-password';
import { ResetPassword$Params } from '../fn/reset-password-controller/reset-password';
import { resetPasswordRequest } from '../fn/reset-password-controller/reset-password-request';
import { ResetPasswordRequest$Params } from '../fn/reset-password-controller/reset-password-request';

@Injectable({ providedIn: 'root' })
export class ResetPasswordControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `resetPassword()` */
  static readonly ResetPasswordPath = '/api/password/reset';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPassword$Response(params: ResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return resetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetPassword(params: ResetPassword$Params, context?: HttpContext): Observable<void> {
    return this.resetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `resetPasswordRequest()` */
  static readonly ResetPasswordRequestPath = '/api/password/request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordRequest$Response(params: ResetPasswordRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return resetPasswordRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPasswordRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordRequest(params: ResetPasswordRequest$Params, context?: HttpContext): Observable<void> {
    return this.resetPasswordRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
