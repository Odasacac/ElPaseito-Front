import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla16Component } from './pantalla-16.component';

describe('Pantalla16Component', () => {
  let component: Pantalla16Component;
  let fixture: ComponentFixture<Pantalla16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
