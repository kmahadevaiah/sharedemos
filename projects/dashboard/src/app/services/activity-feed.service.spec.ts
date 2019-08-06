import { TestBed } from '@angular/core/testing';

import { ActivityFeedService } from './activity-feed.service';

describe('ActivityFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityFeedService = TestBed.get(ActivityFeedService);
    expect(service).toBeTruthy();
  });
});
