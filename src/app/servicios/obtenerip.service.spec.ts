import { TestBed } from '@angular/core/testing';

import { ObteneripService } from './obtenerip.service';

describe('ObteneripService', () => {
  let service: ObteneripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObteneripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
