import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla19Component } from './pantalla-19.component';

describe('Pantalla19Component', () => {
  let component: Pantalla19Component;
  let fixture: ComponentFixture<Pantalla19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
