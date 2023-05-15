import { TestBed } from '@angular/core/testing';

import { EnviamemoService } from './enviamemo.service';

describe('EnviamemoService', () => {
  let service: EnviamemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviamemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
