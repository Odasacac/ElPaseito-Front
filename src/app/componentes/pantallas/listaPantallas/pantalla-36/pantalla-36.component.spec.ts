import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla36Component } from './pantalla-36.component';

describe('Pantalla36Component', () => {
  let component: Pantalla36Component;
  let fixture: ComponentFixture<Pantalla36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
