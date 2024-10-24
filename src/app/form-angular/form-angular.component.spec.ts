import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAngularComponent } from './form-angular.component';

describe('FormAngularComponent', () => {
  let component: FormAngularComponent;
  let fixture: ComponentFixture<FormAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
