import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla12Component } from './pantalla-12.component';

describe('Pantalla12Component', () => {
  let component: Pantalla12Component;
  let fixture: ComponentFixture<Pantalla12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
