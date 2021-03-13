import { TestBed } from '@angular/core/testing';

import { DepartmentDataService } from './department-data.service';

describe('GroupsDataService', () => {
  let service: DepartmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
