import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla22Component } from './pantalla-22.component';

describe('Pantalla22Component', () => {
  let component: Pantalla22Component;
  let fixture: ComponentFixture<Pantalla22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
