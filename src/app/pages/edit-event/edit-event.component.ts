import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UpdateEventRequest} from '../../services/models/update-event-request';
import {NgForOf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {EventControllerService} from '../../services/services/event-controller.service';
import {EventDto} from '../../services/models/event-dto';

@Component({
  selector: 'app-edit-event',
  imports: [
    FormsModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './edit-event.component.html',
  standalone: true,
  styleUrl: './edit-event.component.scss'
})
export class EditEventComponent implements OnInit{

  updateEventRequest:UpdateEventRequest = {};
  eventTargets:string[] = ['EVERYBODY', 'SINGLES', 'CHILDREN', 'ADULTS_ONLY']
  eventToUpdate:EventDto = {id:0};
  updateEventResponse:EventDto = {id:0};
  errorMsg:string = '';

  constructor(
    private eventsService:EventControllerService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.getCurrentEvent();
  }



  getCurrentEvent(){
    this.activatedRoute.params.subscribe(params => {
      let eventId:number = +params['id'];
      this.eventsService.getEvent(eventId).subscribe({
        next:(event:EventDto)=>{
          this.eventToUpdate = event;
          console.log(event);
        }
      });
      console.log(eventId);
    });
  }

  updateEvent() {
    this.activatedRoute.params.subscribe(params => {
      let eventId:number = +params['id'];
      this.eventsService.updateEvent({
        body:this.updateEventRequest,
        eventId:eventId
      }).subscribe({
        next:(response:EventDto) => {
          this.updateEventResponse = response;
          alert('Your event has been updated!');
          this.router.navigate(['created-events'])
        },
        error:(err)=>{
          this.errorMsg = err.error.message;
          alert(this.errorMsg);
        }
      })
    })
  }
}
