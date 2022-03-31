import { TestBed } from '@angular/core/testing';

import { ListUploadedFilePresenterService } from './list-uploaded-file-presenter.service';

describe('ListUploadedFilePresenterService', () => {
  let service: ListUploadedFilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUploadedFilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
