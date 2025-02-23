import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla24Component } from './pantalla-24.component';

describe('Pantalla24Component', () => {
  let component: Pantalla24Component;
  let fixture: ComponentFixture<Pantalla24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
