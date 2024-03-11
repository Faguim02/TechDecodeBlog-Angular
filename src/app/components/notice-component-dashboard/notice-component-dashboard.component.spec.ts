import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeComponentDashboardComponent } from './notice-component-dashboard.component';

describe('NoticeComponentDashboardComponent', () => {
  let component: NoticeComponentDashboardComponent;
  let fixture: ComponentFixture<NoticeComponentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeComponentDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeComponentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
