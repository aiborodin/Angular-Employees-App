import { TestBed } from '@angular/core/testing';

import { EmployeeDataService } from './employee-data.service';

describe('EmployeesDataService', () => {
  let service: EmployeeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
