import { TestBed } from '@angular/core/testing';

import { FileuploadpresenterService } from './fileuploadpresenter.service';

describe('FileuploadpresenterService', () => {
  let service: FileuploadpresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileuploadpresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
