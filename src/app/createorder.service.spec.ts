import { TestBed } from '@angular/core/testing';

import { CreateorderService } from './createorder.service';

describe('CreateorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateorderService = TestBed.get(CreateorderService);
    expect(service).toBeTruthy();
  });
});
