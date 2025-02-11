import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {EventsListComponent} from './pages/events-list/events-list.component';
import {PreferredEventsComponent} from './pages/preferred-events/preferred-events.component';
import {RegisterComponent} from './pages/register/register.component';

import {AllEventsComponent} from './pages/all-events/all-events.component';
import {SingleEventCardComponent} from './pages/single-event-card/single-event-card.component';
import {CreatedEventsComponent} from './pages/created-events/created-events.component';
import {CreateNewEventComponent} from './pages/create-new-event/create-new-event.component';
import {EditEventComponent} from './pages/edit-event/edit-event.component';
import {ReviewsMenuComponent} from './pages/reviews-menu/reviews-menu.component';
import {UserReviewsComponent} from './pages/user-reviews/user-reviews.component';
import {ReceivedReviewsComponent} from './pages/received-reviews/received-reviews.component';
import {AllReviewsComponent} from './pages/all-reviews/all-reviews.component';
import {WriteReviewComponent} from './pages/write-review/write-review.component';
import {MyTicketsComponent} from './pages/my-tickets/my-tickets.component';
import {authGuard} from './services/guard/auth.guard';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create-new-event',
    component: CreateNewEventComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit-event/:id',
    component: EditEventComponent,
    canActivate: [authGuard],
  },
  {
    path: 'reviews',
    component: ReviewsMenuComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'write-review',
        component: WriteReviewComponent,
        canActivate: [authGuard],
      },
      {
        path: 'user-reviews',
        component: UserReviewsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'received-reviews',
        component: ReceivedReviewsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'all-reviews',
        component: AllReviewsComponent,
        canActivate: [authGuard],
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'events',
        component: EventsListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'preferred-events',
        component: PreferredEventsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'all-events',
        component: AllEventsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'single-event/:eventName',
        component: SingleEventCardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'single-event',
        component: SingleEventCardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'created-events',
        component: CreatedEventsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'tickets',
        component: MyTicketsComponent,
        canActivate: [authGuard],
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'events'
  }
];
