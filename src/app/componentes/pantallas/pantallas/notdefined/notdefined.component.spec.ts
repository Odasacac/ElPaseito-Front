import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotdefinedComponent } from './notdefined.component';

describe('NotdefinedComponent', () => {
  let component: NotdefinedComponent;
  let fixture: ComponentFixture<NotdefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotdefinedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotdefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
