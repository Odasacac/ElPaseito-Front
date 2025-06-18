import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla29Component } from './pantalla-29.component';

describe('Pantalla29Component', () => {
  let component: Pantalla29Component;
  let fixture: ComponentFixture<Pantalla29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
