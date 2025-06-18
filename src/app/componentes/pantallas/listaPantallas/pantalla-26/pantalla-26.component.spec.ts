import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantalla26Component } from './pantalla-26.component';

describe('Pantalla26Component', () => {
  let component: Pantalla26Component;
  let fixture: ComponentFixture<Pantalla26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantalla26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pantalla26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
