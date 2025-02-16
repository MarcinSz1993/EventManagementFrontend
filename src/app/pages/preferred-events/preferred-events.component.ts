import {Component, OnInit} from '@angular/core';
import {UserControllerService} from '../../services/services/user-controller.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {JoinEventRequest} from '../../services/models/join-event-request';
import {EventControllerService} from '../../services/services/event-controller.service';
import {RouterLink} from '@angular/router';
import {PageResponseEventDto} from '../../services/models/page-response-event-dto';
import {JoinEventResponse} from '../../services/models/join-event-response';

@Component({
  selector: 'app-preferred-events',
  imports: [
    DatePipe,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './preferred-events.component.html',
  standalone: true,
  styleUrl: './preferred-events.component.scss'
})
export class PreferredEventsComponent implements OnInit {
  eventName: string = '';
  joinEventRequest: JoinEventRequest = {email: ''};
  joinEventResponse: JoinEventResponse = {};
  errorMessage: string = '';

  preferredEvents: PageResponseEventDto = {};
  token: string = localStorage.getItem('token') as string;
  currentPage: number = 0;
  totalPages: number = 0;


  constructor(
    private usersService: UserControllerService,
    private eventsService: EventControllerService
  ) {
  }

  ngOnInit(): void {
    this.getPreferredEvents();
  }

  getPreferredEvents() {
    this.usersService.getEventsListBasedOnUserPreferences({
      page: this.currentPage,
      size: 3
    }).subscribe({
      next: (events) => {
        this.preferredEvents = events;
        this.totalPages = events.totalPages as number;
        console.log('Otrzymane eventy:', events.content);
      }
    });
  }

  joinEvent(eventName: string | undefined) {
    this.usersService.getEmailFromToken({}).subscribe({
      next: (email) => {
        this.joinEventRequest = {email}
        this.eventsService.joinEvent({
            eventName,
            body: this.joinEventRequest
        })
            .subscribe({
            next: (response) => {
              this.joinEventResponse = response;
              alert(this.joinEventResponse.message);
              this.preferredEvents.content = this.preferredEvents.content?.filter(event => event.eventName != eventName);
              if(this.preferredEvents.content?.length === 0) {
                this.handleEmptyPage();
              }
            },
            error: (error) => {
              this.errorMessage = error.error.message;
              alert(`Error! ${this.errorMessage}`);
            }
          });
      }
    });
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getPreferredEvents();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.getPreferredEvents();
    }
  }

  private handleEmptyPage() {
    if (!this.preferredEvents.content || this.preferredEvents.content.length === 0) {
      if (this.currentPage > 0) {
        this.previousPage();
      } else if (this.currentPage < this.totalPages - 1) {
        this.nextPage();
      } else {
        console.log("No more events to display.");
      }
    }
  }
}
