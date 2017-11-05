import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReserveComponent } from './add-reserve.component';

describe('AddReserveComponent', () => {
  let component: AddReserveComponent;
  let fixture: ComponentFixture<AddReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
