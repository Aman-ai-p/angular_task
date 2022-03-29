import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropContainerComponent } from './dragdrop-container.component';

describe('DragdropContainerComponent', () => {
  let component: DragdropContainerComponent;
  let fixture: ComponentFixture<DragdropContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
