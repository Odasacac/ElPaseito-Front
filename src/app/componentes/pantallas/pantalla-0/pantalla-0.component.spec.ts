import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla0Component } from './pantalla-0.component';

describe('Pantalla0Component', () => {
  let component: Pantalla0Component;
  let fixture: ComponentFixture<Pantalla0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
