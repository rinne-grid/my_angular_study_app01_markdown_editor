import { TestBed } from '@angular/core/testing';

import { MarkdownStoreService } from './markdown-store.service';

describe('MarkdownStoreService', () => {
  let service: MarkdownStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
