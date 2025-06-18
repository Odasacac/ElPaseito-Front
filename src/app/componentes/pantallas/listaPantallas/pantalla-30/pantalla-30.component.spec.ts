import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla30Component } from './pantalla-30.component';

describe('Pantalla30Component', () => {
  let component: Pantalla30Component;
  let fixture: ComponentFixture<Pantalla30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
