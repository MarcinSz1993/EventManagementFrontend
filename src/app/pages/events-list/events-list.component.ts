import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe, NgForOf, NgIf} from '@angular/common';
import {EventControllerService} from '../../services/services/event-controller.service';
import {RouterLink} from '@angular/router';
import {PageResponseEventDto} from '../../services/models/page-response-event-dto';
import {LeaveEventResponse} from '../../services/models/leave-event-response';


@Component({
  selector: 'app-events-list',
  imports: [
    DatePipe,
    NgIf,
    NgForOf,
    CommonModule,
    RouterLink
  ],
  templateUrl: './events-list.component.html',
  standalone: true,
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent implements OnInit {

  userJoinedEvents: PageResponseEventDto = {};

  token: string = localStorage.getItem('token') as string;
  currentPage: number = 0;
  totalPages: number = 0;
  leaveEventResponse: LeaveEventResponse = {};
  errorMsg:string = '';

  constructor(
    private eventsService: EventControllerService,
  ) {
  }

  ngOnInit(): void {
    this.getUserJoinedEvents();
  }

  getUserJoinedEvents() {
    this.eventsService.getFullAndActiveJoinedEvents({
      page:this.currentPage,
      size: 3,
    })
      .subscribe({
        next: (joinedEvents) => {
          this.userJoinedEvents = joinedEvents
          this.totalPages = joinedEvents.totalPages as number;
        },
        error: (err: any) => {
          console.error('Error fetching user joined events', err);
        }
      });
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getUserJoinedEvents();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.getUserJoinedEvents();
    }
  }

    leaveEvent(eventId: number | undefined) {
    this.eventsService.leaveEvent({eventId})
      .subscribe({
        next: (response) => {
          this.leaveEventResponse = response;
          alert(this.leaveEventResponse.message)
          this.userJoinedEvents.content = this.userJoinedEvents.content?.filter(event => event.id != eventId);
          if (this.userJoinedEvents.content?.length === 0) {
            this.handleEmptyPage();
          }
        },
        error: (err) => {
          this.errorMsg = err.error.message;
          alert(this.errorMsg);
        }
      });
  }

  private handleEmptyPage() {
    if (!this.userJoinedEvents.content || this.userJoinedEvents.content.length === 0) {
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
