import {Component} from '@angular/core';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {UserControllerService} from '../../services/services/user-controller.service';
import {TokenService} from '../../services/token/token.service';


@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {username: '', password: ''};
  errorMsg: string = '';

  constructor(
    private router:Router,
    private authService: UserControllerService,
    private tokenService: TokenService
  ) {
  }

  login() {
    localStorage.removeItem('token');
    this.errorMsg = '';
    this.authService.login({
      body: this.authRequest
    }).subscribe({
      next:(res)=>{
        this.tokenService.token = res.token as string;
        localStorage.setItem('username',this.authRequest.username)
        this.router.navigate(['events']);
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err.error.message;
      }
    });
  }

  register() {
    this.router.navigate(['register'])
  }
}
