import {Component, OnInit} from '@angular/core';
import {EventControllerService} from '../../services/services/event-controller.service';
import {PageResponseEventDto} from '../../services/models/page-response-event-dto';
import {CurrencyPipe, DatePipe, NgClass, NgForOf} from '@angular/common';
import {JoinEventRequest} from '../../services/models/join-event-request';
import {UserControllerService} from '../../services/services/user-controller.service';
import {RouterLink} from '@angular/router';
import {JoinEventResponse} from '../../services/models/join-event-response';

@Component({
  selector: 'app-all-events',
  imports: [NgForOf, DatePipe, CurrencyPipe, RouterLink, NgClass],
  templateUrl: './all-events.component.html',
  standalone: true,
  styleUrl: './all-events.component.scss'
})
export class AllEventsComponent implements OnInit{
  errorMessage: string = '';
  eventResponse: PageResponseEventDto = {};
  joinEventRequest: JoinEventRequest = {email:''}
  joinEventResponse: JoinEventResponse = {};

  page: number = 0;
  size: number = 10;
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(
    private eventsService:EventControllerService,
    private usersService:UserControllerService
  ) {
  }

  ngOnInit(): void {
    this.fetchEvents();
  }
  fetchEvents(): void {
    this.eventsService.getAllEvents({
      page: this.currentPage,
      size: 5
    })
      .subscribe({
        next: (events) => {
          this.eventResponse = events;
          this.totalPages = events.totalPages as number;

        },
        error: (error: any) => {
          this.errorMessage = 'problem';
          console.error(error);
        },
      })
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
              this.fetchEvents();
            },
            error:(error) => {
              this.errorMessage = error.error.message;
              alert(this.errorMessage);
            }
          });
      }
    });
  }

  previousPage() {
    if (this.currentPage > 0){
      this.currentPage--;
      this.fetchEvents();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages -1){
      this.currentPage ++;
      this.fetchEvents();
    }
  }
}

