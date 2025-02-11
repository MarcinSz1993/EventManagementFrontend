import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {WriteReviewRequest} from '../../services/models/write-review-request';
import {ReviewControllerService} from '../../services/services/review-controller.service';
import {EventControllerService} from '../../services/services/event-controller.service';
import {ReviewDto} from '../../services/models/review-dto';
import {PageResponseEventDto} from '../../services/models/page-response-event-dto';

@Component({
  selector: 'app-write-review',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './write-review.component.html',
  standalone: true,
  styleUrl: './write-review.component.scss'
})
export class WriteReviewComponent implements OnInit {

  eventName: string = '';
  degree: number = 0;
  content: string = '';

  joinedEvents: PageResponseEventDto = {};
  starsArray: number[] = [1, 2, 3, 4, 5];
  writeReviewRequest: WriteReviewRequest = {eventName: '', degree: 0, content: ''};
  createdReviewResponse: ReviewDto = {};
  errorMsg: string = '';

  constructor(
    private reviewsService: ReviewControllerService,
    private eventsService: EventControllerService
  ) {
  }

  ngOnInit(): void {
    this.getUserJoinedEvents();

  }

  getUserJoinedEvents() {
    this.eventsService.getCompletedJoinedEvents({
      page: 0,
      size: 10
    }).subscribe({
      next: (joinedEvents) => {
        this.joinedEvents = joinedEvents;
      },
      error: (err) => console.error(' Error events fetching:', err)
    });
  }

  setRating(star: number) {
    this.degree = star;
    this.writeReviewRequest.degree = star;
  }

  submitReview() {
    console.log(this.writeReviewRequest);
    this.reviewsService.writeReview({
      body: this.writeReviewRequest
    }).subscribe({
      next: (review) => {
        this.createdReviewResponse = review;
        alert('Your review has been added.Thank you!');
      },
      error: (err) => {
        this.errorMsg = err.error.message
        alert(this.errorMsg);
      }
    });
  }

}
