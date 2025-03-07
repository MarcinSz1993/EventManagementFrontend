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

import { addToCart } from '../fn/cart-controller/add-to-cart';
import { AddToCart$Params } from '../fn/cart-controller/add-to-cart';
import { Cart } from '../models/cart';
import { getCart } from '../fn/cart-controller/get-cart';
import { GetCart$Params } from '../fn/cart-controller/get-cart';
import { removeTicketFromCart } from '../fn/cart-controller/remove-ticket-from-cart';
import { RemoveTicketFromCart$Params } from '../fn/cart-controller/remove-ticket-from-cart';

@Injectable({ providedIn: 'root' })
export class CartControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCart()` */
  static readonly GetCartPath = '/api/carts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCart$Response(params?: GetCart$Params, context?: HttpContext): Observable<StrictHttpResponse<Cart>> {
    return getCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCart(params?: GetCart$Params, context?: HttpContext): Observable<Cart> {
    return this.getCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<Cart>): Cart => r.body)
    );
  }

  /** Path part for operation `addToCart()` */
  static readonly AddToCartPath = '/api/carts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addToCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  addToCart$Response(params: AddToCart$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addToCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addToCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addToCart(params: AddToCart$Params, context?: HttpContext): Observable<string> {
    return this.addToCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `removeTicketFromCart()` */
  static readonly RemoveTicketFromCartPath = '/api/carts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeTicketFromCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeTicketFromCart$Response(params: RemoveTicketFromCart$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return removeTicketFromCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeTicketFromCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeTicketFromCart(params: RemoveTicketFromCart$Params, context?: HttpContext): Observable<string> {
    return this.removeTicketFromCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
