import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla10Component } from './pantalla-10.component';

describe('Pantalla10Component', () => {
  let component: Pantalla10Component;
  let fixture: ComponentFixture<Pantalla10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
