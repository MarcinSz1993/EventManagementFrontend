import {Component, OnInit} from '@angular/core';
import {EventControllerService} from '../../services/services/event-controller.service';
import {EventDto} from '../../services/models/event-dto';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {DeleteEventResponse} from '../../services/models/delete-event-response';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-created-events',
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './created-events.component.html',
  standalone: true,
  styleUrl: './created-events.component.scss'
})
export class CreatedEventsComponent implements OnInit {

  createdEvents: EventDto[] = [];
  deleteEventResponse: DeleteEventResponse = {};


  constructor(
    private eventsService: EventControllerService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.getOrganizerEvents()
  }

  getOrganizerEvents() {
    let usernameFromToken = this.tokenService.getUsernameFromToken();
    console.log('Looged user: ', usernameFromToken);
    this.eventsService.showAllOrganizerEvents(usernameFromToken)
      .subscribe({
        next: (organizedEvents: EventDto[]) => {
          this.createdEvents = organizedEvents;
        },
        error(err: any) {
          console.log('Error while fetching user organized events.', err);
        }
      });
  }

  deleteEvent(eventId: number | undefined) {
    this.eventsService.deleteEvent({eventId})
      .subscribe({
        next: (response: DeleteEventResponse) => {
          this.deleteEventResponse = response;
          alert(response.message);
          this.createdEvents = this.createdEvents.filter(event => event.id != eventId);
        },
        error(err: any) {
          console.log(`Error with deleting the event ${err}`);
        }
      })
  }

}
