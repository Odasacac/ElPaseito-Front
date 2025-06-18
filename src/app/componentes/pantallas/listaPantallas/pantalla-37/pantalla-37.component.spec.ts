import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla37Component } from './pantalla-37.component';

describe('Pantalla37Component', () => {
  let component: Pantalla37Component;
  let fixture: ComponentFixture<Pantalla37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla37Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
