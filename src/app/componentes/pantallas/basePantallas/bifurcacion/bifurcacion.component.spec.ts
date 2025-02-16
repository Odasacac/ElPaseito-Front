import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BifurcacionComponent } from './bifurcacion.component';

describe('BifurcacionComponent', () => {
  let component: BifurcacionComponent;
  let fixture: ComponentFixture<BifurcacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BifurcacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BifurcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
