import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla13Component } from './pantalla-13.component';

describe('Pantalla13Component', () => {
  let component: Pantalla13Component;
  let fixture: ComponentFixture<Pantalla13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
