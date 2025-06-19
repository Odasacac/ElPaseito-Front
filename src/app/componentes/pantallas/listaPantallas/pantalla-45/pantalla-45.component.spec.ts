import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla45Component } from './pantalla-45.component';

describe('Pantalla45Component', () => {
  let component: Pantalla45Component;
  let fixture: ComponentFixture<Pantalla45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla45Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
