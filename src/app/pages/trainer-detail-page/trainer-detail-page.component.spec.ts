import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDetailPageComponent } from './trainer-detail-page.component';

describe('TrainerDetailPageComponent', () => {
  let component: TrainerDetailPageComponent;
  let fixture: ComponentFixture<TrainerDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
