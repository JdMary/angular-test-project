import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartmentComponent } from './add-appartment.component';

describe('AddAppartmentComponent', () => {
  let component: AddAppartmentComponent;
  let fixture: ComponentFixture<AddAppartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAppartmentComponent]
    });
    fixture = TestBed.createComponent(AddAppartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
