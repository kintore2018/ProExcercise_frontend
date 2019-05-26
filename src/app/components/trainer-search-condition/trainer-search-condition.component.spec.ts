import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSearchConditionComponent } from './trainer-search-condition.component';

describe('TrainerSearchConditionComponent', () => {
  let component: TrainerSearchConditionComponent;
  let fixture: ComponentFixture<TrainerSearchConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerSearchConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSearchConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
