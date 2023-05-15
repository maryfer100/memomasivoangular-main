import { TestBed } from '@angular/core/testing';

import { ObtenerfolioService } from './obtenerfolio.service';

describe('ObtenerfolioService', () => {
  let service: ObtenerfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
