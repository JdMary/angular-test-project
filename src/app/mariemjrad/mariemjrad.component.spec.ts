import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariemjradComponent } from './mariemjrad.component';

describe('MariemjradComponent', () => {
  let component: MariemjradComponent;
  let fixture: ComponentFixture<MariemjradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariemjradComponent]
    });
    fixture = TestBed.createComponent(MariemjradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
