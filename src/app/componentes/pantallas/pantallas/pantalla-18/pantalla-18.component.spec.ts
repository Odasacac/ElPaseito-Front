import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla18Component } from './pantalla-18.component';

describe('Pantalla18Component', () => {
  let component: Pantalla18Component;
  let fixture: ComponentFixture<Pantalla18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
