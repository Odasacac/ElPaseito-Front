import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla17Component } from './pantalla-17.component';

describe('Pantalla17Component', () => {
  let component: Pantalla17Component;
  let fixture: ComponentFixture<Pantalla17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
