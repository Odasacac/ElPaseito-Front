import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla38Component } from './pantalla-38.component';

describe('Pantalla38Component', () => {
  let component: Pantalla38Component;
  let fixture: ComponentFixture<Pantalla38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla38Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
