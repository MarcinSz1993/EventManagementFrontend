import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredEventsComponent } from './preferred-events.component';

describe('PreferredEventsComponent', () => {
  let component: PreferredEventsComponent;
  let fixture: ComponentFixture<PreferredEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferredEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferredEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
