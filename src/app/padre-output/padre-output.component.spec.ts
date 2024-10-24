import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreOutputComponent } from './padre-output.component';

describe('PadreOutputComponent', () => {
  let component: PadreOutputComponent;
  let fixture: ComponentFixture<PadreOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
