import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla25Component } from './pantalla-25.component';

describe('Pantalla25Component', () => {
  let component: Pantalla25Component;
  let fixture: ComponentFixture<Pantalla25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
