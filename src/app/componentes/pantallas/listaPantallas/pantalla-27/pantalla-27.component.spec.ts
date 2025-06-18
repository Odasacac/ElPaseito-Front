import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla27Component } from './pantalla-27.component';

describe('Pantalla27Component', () => {
  let component: Pantalla27Component;
  let fixture: ComponentFixture<Pantalla27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
