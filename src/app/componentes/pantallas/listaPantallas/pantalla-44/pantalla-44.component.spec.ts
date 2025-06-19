import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla44Component } from './pantalla-44.component';

describe('Pantalla44Component', () => {
  let component: Pantalla44Component;
  let fixture: ComponentFixture<Pantalla44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla44Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
