import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { OccupationService } from './occupation.service';

describe('Occupation Service', () => {
  beforeEachProviders(() => [OccupationService]);

  it('should ...',
      inject([OccupationService], (service: OccupationService) => {
    expect(service).toBeTruthy();
  }));
});
