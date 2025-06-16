import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla20Component } from './pantalla-20.component';

describe('Pantalla20Component', () => {
  let component: Pantalla20Component;
  let fixture: ComponentFixture<Pantalla20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
