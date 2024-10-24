import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvHomeComponent } from './ev-home.component';

describe('EvHomeComponent', () => {
  let component: EvHomeComponent;
  let fixture: ComponentFixture<EvHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
