import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla31Component } from './pantalla-31.component';

describe('Pantalla31Component', () => {
  let component: Pantalla31Component;
  let fixture: ComponentFixture<Pantalla31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
