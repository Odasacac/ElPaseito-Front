import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInicioComponent } from './base-inicio.component';

describe('BaseInicioComponent', () => {
  let component: BaseInicioComponent;
  let fixture: ComponentFixture<BaseInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
