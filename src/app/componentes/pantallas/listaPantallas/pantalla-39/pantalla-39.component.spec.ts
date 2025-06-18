import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla39Component } from './pantalla-39.component';

describe('Pantalla39Component', () => {
  let component: Pantalla39Component;
  let fixture: ComponentFixture<Pantalla39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla39Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
