import {Component} from '@angular/core';

import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EventDto} from '../../services/models/event-dto';
import {EventControllerService} from '../../services/services/event-controller.service';

@Component({
  selector: 'app-main',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './main.component.html',
  standalone: true,
  styleUrl: './main.component.scss'
})
export class MainComponent{

  eventName:string = '';
  username:string | null = localStorage.getItem('username');
  foundEvent:EventDto = {id:0};
  errorMessage:string = '';

  constructor(
    private router:Router,
    private eventsService:EventControllerService
  ) {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['login']);
  }

  findEvent() {
    console.log('Event Name:', this.eventName);
    if (!this.eventName || this.eventName.trim() === '') {
      alert('Please enter en event name!');
      return;
    }
    this.eventsService.getEventByName(this.eventName)
        .subscribe({
        next:(event)=> {
          this.foundEvent = event;
          this.router.navigate(['single-event'],{queryParams: {eventName: this.eventName}});
        },
        error:(err)=>{
          this.errorMessage = err.error.message;
          alert(this.errorMessage);
        }
      })
  }
}

