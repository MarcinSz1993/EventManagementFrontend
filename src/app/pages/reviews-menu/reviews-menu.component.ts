import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-reviews-menu',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './reviews-menu.component.html',
  standalone: true,
  styleUrl: './reviews-menu.component.scss'
})
export class ReviewsMenuComponent {

  constructor(
    private router: Router
  ) {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['login']);

  }
}
