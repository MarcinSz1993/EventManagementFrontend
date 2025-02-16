import {Component} from '@angular/core';
import {CreateUserRequest} from '../../services/models/create-user-request';
import {Router} from '@angular/router';
import {UserControllerService} from '../../services/services/user-controller.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: CreateUserRequest = {
    firstName: '', lastName: '', email: '', username: '',
    password: '', birthDate: '', phoneNumber: '', accountNumber: ''
  }
  errorMsg: string = '';

  constructor(
    private router: Router,
    private userService: UserControllerService
  ) {
  }

  backToLoginPage() {
    this.router.navigate(['login'])
  }

  register() {
    this.userService.createUser({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        alert('Your account has been created successfully!')
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMsg = err.error.message
        alert(this.errorMsg);
      }
    })
  }
}
