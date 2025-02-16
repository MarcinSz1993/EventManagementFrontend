import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {PageResponseReviewDto} from '../../services/models/page-response-review-dto';
import {ReviewControllerService} from '../../services/services/review-controller.service';

@Component({
  selector: 'app-all-reviews',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './all-reviews.component.html',
  standalone: true,
  styleUrl: './all-reviews.component.scss'
})
export class AllReviewsComponent implements OnInit{
  allReviewsResponse: PageResponseReviewDto = {};
  errorMessage: string | null = null;

  currentPage: number = 0;
  totalPages: number = 0;
  readonly pageSize: number = 8;

  constructor(
    private reviewsService: ReviewControllerService) {}

  ngOnInit(): void {
    this.loadAllReviews();
  }

  loadAllReviews(): void {
    this.reviewsService.getAllReviews({
      page: this.currentPage,
      size: this.pageSize
    })
      .subscribe({
        next: (reviews) => {
          this.allReviewsResponse = reviews;
          this.totalPages = reviews.totalPages as number;
        },
        error: (error) => {
          console.error('Error fetching reviews:', error);
          this.errorMessage = 'Failed to load reviews. Please try again later.';
        },
      });
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadAllReviews();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadAllReviews();
    }
  }
}
