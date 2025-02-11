import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEventCardComponent } from './single-event-card.component';

describe('SingleEventCardComponent', () => {
  let component: SingleEventCardComponent;
  let fixture: ComponentFixture<SingleEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleEventCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
