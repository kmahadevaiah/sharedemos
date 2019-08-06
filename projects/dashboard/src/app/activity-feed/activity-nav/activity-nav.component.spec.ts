import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityNavComponent } from './activity-nav.component';

describe('ActivityNavComponent', () => {
  let component: ActivityNavComponent;
  let fixture: ComponentFixture<ActivityNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
