import {Component, OnInit} from '@angular/core';
import {EventDto} from '../../services/models/event-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {EventControllerService} from '../../services/services/event-controller.service';
import {CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {UserControllerService} from '../../services/services/user-controller.service';
import {JoinEventRequest} from '../../services/models/join-event-request';
import {WeatherControllerService} from '../../services/services/weather-controller.service';
import {WeatherDto} from '../../services/models/weather-dto';
import {JoinEventResponse} from '../../services/models/join-event-response';

@Component({
  selector: 'app-single-event-card',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, NgForOf, NgIf, NgClass],
  templateUrl: './single-event-card.component.html',
  standalone: true,
  styleUrl: './single-event-card.component.scss'
})
export class SingleEventCardComponent implements OnInit {

  eventName: string = '';
  foundEvent: EventDto = {id: 0};
  joinEventRequest: JoinEventRequest = {email: ''};
  joinEventResponse: JoinEventResponse = {};
  weatherResponse: WeatherDto = {};
  errorMessage: string = '';

  constructor(
    protected router: Router,
    private eventsService: EventControllerService,
    private route: ActivatedRoute,
    private usersService: UserControllerService,
    private weatherService: WeatherControllerService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params['eventName']);
      this.eventName = params['eventName'];
      if (this.eventName?.trim()) {
        this.findEvent(this.eventName);
      } else {
        console.warn('No event name provided in query params');
      }
    });
  }

  findEvent(eventName: string): void {
    this.eventsService.getEventByName(eventName).subscribe({
      next: (event: EventDto) => {
        this.foundEvent = event;
        console.log('Found event:', this.foundEvent);
      },
      error: (err: any) => {
        alert(err.error.message);
        console.error('Problem fetching event:', err);
      },
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
            },
            error: (error) => {
              this.errorMessage = error.error.message;
              alert(`Error! ${this.errorMessage}`);
            }
          });
      }
    });
  }

  checkWeather(eventId: number | undefined) {
    this.weatherService.getWeatherOnEventDay({eventId: eventId})
      .subscribe({
        next: (response) => {
          this.weatherResponse = response;
          alert(`You can expect a maximum temperature of ${response.maxTemperature}°C,
        a minimum temperature of ${response.minTemperature}°C,
        a ${response.chanceOfRain}% chance of rain,
        maximum winds around ${response.maxWind} km/h.
        The sun will rise at ${response.sunrise} and set at ${response.sunset}.`);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          alert(this.errorMessage);
        }
      });
  }

  buyTicket() {
    alert('This function will be available soon.')
  }
}


