import { TestBed, inject } from '@angular/core/testing';

import { PoetServiceService } from './poet-service.service';

describe('PoetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoetServiceService]
    });
  });

  it('should be created', inject([PoetServiceService], (service: PoetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
