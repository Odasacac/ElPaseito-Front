import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla28Component } from './pantalla-28.component';

describe('Pantalla28Component', () => {
  let component: Pantalla28Component;
  let fixture: ComponentFixture<Pantalla28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
