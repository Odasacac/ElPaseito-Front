import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla34Component } from './pantalla-34.component';

describe('Pantalla34Component', () => {
  let component: Pantalla34Component;
  let fixture: ComponentFixture<Pantalla34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla34Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
