import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadedFilePresentationComponent } from './list-uploaded-file-presentation.component';

describe('ListUploadedFilePresentationComponent', () => {
  let component: ListUploadedFilePresentationComponent;
  let fixture: ComponentFixture<ListUploadedFilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUploadedFilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadedFilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
