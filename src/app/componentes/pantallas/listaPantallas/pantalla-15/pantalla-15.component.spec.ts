import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla15Component } from './pantalla-15.component';

describe('Pantalla15Component', () => {
  let component: Pantalla15Component;
  let fixture: ComponentFixture<Pantalla15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
