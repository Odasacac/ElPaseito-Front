import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla23Component } from './pantalla-23.component';

describe('Pantalla23Component', () => {
  let component: Pantalla23Component;
  let fixture: ComponentFixture<Pantalla23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
