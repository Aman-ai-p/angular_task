import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadPresenterComponent } from './file-upload-presenter.component';

describe('FileUploadPresenterComponent', () => {
  let component: FileUploadPresenterComponent;
  let fixture: ComponentFixture<FileUploadPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
