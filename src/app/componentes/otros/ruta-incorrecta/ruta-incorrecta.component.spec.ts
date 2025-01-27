import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaIncorrectaComponent } from './ruta-incorrecta.component';

describe('RutaIncorrectaComponent', () => {
  let component: RutaIncorrectaComponent;
  let fixture: ComponentFixture<RutaIncorrectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaIncorrectaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaIncorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
