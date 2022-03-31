import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadedFileContainerComponent } from './list-uploaded-file-container.component';

describe('ListUploadedFileContainerComponent', () => {
  let component: ListUploadedFileContainerComponent;
  let fixture: ComponentFixture<ListUploadedFileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUploadedFileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadedFileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
