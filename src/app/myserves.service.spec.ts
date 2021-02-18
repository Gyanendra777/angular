import { TestBed } from '@angular/core/testing';

import { MyservesService } from './myserves.service';

describe('MyservesService', () => {
  let service: MyservesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyservesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
