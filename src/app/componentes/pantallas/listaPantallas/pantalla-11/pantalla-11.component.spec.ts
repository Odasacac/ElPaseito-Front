import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla11Component } from './pantalla-11.component';

describe('Pantalla11Component', () => {
  let component: Pantalla11Component;
  let fixture: ComponentFixture<Pantalla11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
