import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla33Component } from './pantalla-33.component';

describe('Pantalla33Component', () => {
  let component: Pantalla33Component;
  let fixture: ComponentFixture<Pantalla33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
