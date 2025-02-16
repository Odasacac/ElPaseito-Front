import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla14Component } from './pantalla-14.component';

describe('Pantalla14Component', () => {
  let component: Pantalla14Component;
  let fixture: ComponentFixture<Pantalla14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
