import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloneComponent } from './alone.component';

describe('AloneComponent', () => {
  let component: AloneComponent;
  let fixture: ComponentFixture<AloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
