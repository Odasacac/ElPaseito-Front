import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla40Component } from './pantalla-40.component';

describe('Pantalla40Component', () => {
  let component: Pantalla40Component;
  let fixture: ComponentFixture<Pantalla40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla40Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
