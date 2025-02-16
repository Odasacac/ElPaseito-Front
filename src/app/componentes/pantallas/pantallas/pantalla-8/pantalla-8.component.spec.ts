import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla8Component } from './pantalla-8.component';

describe('Pantalla8Component', () => {
  let component: Pantalla8Component;
  let fixture: ComponentFixture<Pantalla8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
