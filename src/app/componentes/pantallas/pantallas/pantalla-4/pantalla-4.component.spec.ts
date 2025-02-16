import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla4Component } from './pantalla-4.component';

describe('Pantalla4Component', () => {
  let component: Pantalla4Component;
  let fixture: ComponentFixture<Pantalla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
