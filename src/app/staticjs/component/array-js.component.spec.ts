import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayJSComponent } from './array-js.component';

describe('ArrayJSComponent', () => {
  let component: ArrayJSComponent;
  let fixture: ComponentFixture<ArrayJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
