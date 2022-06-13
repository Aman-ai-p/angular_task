import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprescriptioncontainerComponent } from './createprescriptioncontainer.component';

describe('CreateprescriptioncontainerComponent', () => {
  let component: CreateprescriptioncontainerComponent;
  let fixture: ComponentFixture<CreateprescriptioncontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprescriptioncontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprescriptioncontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
