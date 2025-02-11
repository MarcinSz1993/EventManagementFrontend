import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ReviewControllerService} from '../../services/services/review-controller.service';
import {PageResponseReviewDto} from '../../services/models/page-response-review-dto';

@Component({
  selector: 'app-user-reviews',
  imports: [
    NgIf,
    NgForOf,
  ],
  templateUrl: './user-reviews.component.html',
  standalone: true,
  styleUrl: './user-reviews.component.scss'
})
export class UserReviewsComponent implements OnInit {
  writtenReviewsResponse: PageResponseReviewDto = {};
  errorMessage: any = '';
  currentPage: number = 0;
  totalPages: number = 0;

  constructor(
    private reviewsService: ReviewControllerService
  ) {
  }


  ngOnInit(): void {
    this.getReviewsWrittenByUser();
  }

  getReviewsWrittenByUser() {
    this.reviewsService.getReviewsWrittenByUser({
      page: this.currentPage,
      size: 3
    })
      .subscribe({
        next: (review: PageResponseReviewDto) => {
          this.writtenReviewsResponse = review;
          this.totalPages = review.totalPages as number
        },
        error: (error) => {
          console.error('Error fetching reviews', error);
          this.errorMessage = 'Failed to load written reviews';
        },
      });
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getReviewsWrittenByUser();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.getReviewsWrittenByUser();
    }
  }
}
