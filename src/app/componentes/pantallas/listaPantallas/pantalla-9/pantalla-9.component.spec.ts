import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla9Component } from './pantalla-9.component';

describe('Pantalla9Component', () => {
  let component: Pantalla9Component;
  let fixture: ComponentFixture<Pantalla9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
