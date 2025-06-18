import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla42Component } from './pantalla-42.component';

describe('Pantalla42Component', () => {
  let component: Pantalla42Component;
  let fixture: ComponentFixture<Pantalla42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla42Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
