import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {PageResponseReviewDto} from '../../services/models/page-response-review-dto';
import {ReviewControllerService} from '../../services/services/review-controller.service';

@Component({
  selector: 'app-received-reviews',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './received-reviews.component.html',
  standalone: true,
  styleUrl: './received-reviews.component.scss'
})
export class ReceivedReviewsComponent implements OnInit{
  reviewResponse:PageResponseReviewDto = {};
  errorMessage:any = '';

  token:string = localStorage.getItem('token') as string;
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(
    private reviewsService: ReviewControllerService
  ) {
  }

  ngOnInit(): void {
    this.showReceivedReviews()
  }

  showReceivedReviews() {
    this.reviewsService.getReceivedReviews({
      page:this.currentPage,
      size:3
    })
      .subscribe({
        next: (reviews) => {
          this.reviewResponse = reviews;
          this.totalPages = reviews.totalPages as number;
        },
        error: (error) => {
          console.error('Error fetching reviews:', error);
          this.errorMessage = 'Failed to load reviews. Please try again later.';
        },
      });
  }

  previousPage() {
    if (this.currentPage > 0){
      this.currentPage--;
      this.showReceivedReviews();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1){
      this.currentPage++;
      this.showReceivedReviews();
    }
  }
}
