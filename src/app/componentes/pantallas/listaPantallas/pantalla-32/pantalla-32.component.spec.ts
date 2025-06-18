import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla32Component } from './pantalla-32.component';

describe('Pantalla32Component', () => {
  let component: Pantalla32Component;
  let fixture: ComponentFixture<Pantalla32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
