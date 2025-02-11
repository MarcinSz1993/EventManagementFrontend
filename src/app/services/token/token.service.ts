import {Injectable} from '@angular/core';

import {JwtHelperService} from '@auth0/angular-jwt';
import {jwtDecode} from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token:string){
    localStorage.setItem('token',token);
  }

  get token(){
    return localStorage.getItem('token') as string;
  }


  constructor() { }

  getUsernameFromToken():string{
    const token = this.token;
    if (token){
      try {
        const decoded: any = jwtDecode(token)
        return decoded.sub || null;
      }catch (error) {
        console.error('Invalid token',error);
      }
    }
    return 'Invalid token';
  }

  isTokenNotValid() {
    return !this.isTokenValid();
  }

  private isTokenValid() {
    const token = this.token;
    if(!token){
      return false;
    }
    const jwtHelper = new JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);
    if(isTokenExpired){
      localStorage.clear();
      return false;
    }
    return true;
  };
}
