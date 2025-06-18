import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla43Component } from './pantalla-43.component';

describe('Pantalla43Component', () => {
  let component: Pantalla43Component;
  let fixture: ComponentFixture<Pantalla43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla43Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
