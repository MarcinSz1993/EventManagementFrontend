import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {CreateEventRequest} from '../../services/models/create-event-request';
import {EventControllerService} from '../../services/services/event-controller.service';
import {Router} from '@angular/router';
import {EventDto} from '../../services/models/event-dto';

@Component({
  selector: 'app-create-new-event',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './create-new-event.component.html',
  standalone: true,
  styleUrl: './create-new-event.component.scss'
})
export class CreateNewEventComponent {

  createEventRequest:CreateEventRequest = {
    eventName:'',
    eventDescription:'',
    location:'',
    maxAttendees:0,
    eventDate:'',
    ticketPrice:0,
    eventTarget:'EVERYBODY'};

  eventTargets = ['EVERYBODY', 'SINGLES', 'CHILDREN', 'ADULTS_ONLY'];
  createEventResponse:EventDto = {id: 0};
  errorMsg:string = '';

  constructor(
    private eventsService:EventControllerService,
    private router:Router
  ) {
  }

  cancel() {
    this.router.navigate(['created-events']);
  }

  createNewEvent() {
    this.errorMsg = '';
    this.eventsService.createEvent({
      body:this.createEventRequest
    }).subscribe({
      next:(res) => {
        this.createEventResponse = res;
        alert(`Congratulations, you created the event: ${this.createEventResponse.eventName}`);
        this.router.navigate(['created-events']);
      },
      error:(err) => {
        this.errorMsg = err.error.message;
        alert(this.errorMsg);
        console.log(err);
      }
    });
  }
}
