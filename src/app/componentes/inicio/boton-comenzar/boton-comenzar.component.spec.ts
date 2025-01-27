import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComenzarComponent } from './boton-comenzar.component';

describe('BotonComenzarComponent', () => {
  let component: BotonComenzarComponent;
  let fixture: ComponentFixture<BotonComenzarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonComenzarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonComenzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
