import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla35Component } from './pantalla-35.component';

describe('Pantalla35Component', () => {
  let component: Pantalla35Component;
  let fixture: ComponentFixture<Pantalla35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla35Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
