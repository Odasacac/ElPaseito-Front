import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla41Component } from './pantalla-41.component';

describe('Pantalla41Component', () => {
  let component: Pantalla41Component;
  let fixture: ComponentFixture<Pantalla41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla41Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
