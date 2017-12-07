import { TestBed, inject } from '@angular/core/testing';

import { PoetService } from './poet.service';

describe('PoetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoetService]
    });
  });

  it('should be created', inject([PoetService], (service: PoetService) => {
    expect(service).toBeTruthy();
  }));
});
