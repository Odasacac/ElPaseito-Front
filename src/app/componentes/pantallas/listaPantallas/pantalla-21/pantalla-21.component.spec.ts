import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla21Component } from './pantalla-21.component';

describe('Pantalla21Component', () => {
  let component: Pantalla21Component;
  let fixture: ComponentFixture<Pantalla21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
