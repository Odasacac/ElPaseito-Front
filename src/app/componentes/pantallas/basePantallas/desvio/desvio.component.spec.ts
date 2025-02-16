import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesvioComponent } from './desvio.component';

describe('DesvioComponent', () => {
  let component: DesvioComponent;
  let fixture: ComponentFixture<DesvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesvioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
