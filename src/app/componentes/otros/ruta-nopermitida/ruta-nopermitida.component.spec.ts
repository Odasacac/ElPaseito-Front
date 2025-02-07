import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNopermitidaComponent } from './ruta-nopermitida.component';

describe('RutaNopermitidaComponent', () => {
  let component: RutaNopermitidaComponent;
  let fixture: ComponentFixture<RutaNopermitidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaNopermitidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaNopermitidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
