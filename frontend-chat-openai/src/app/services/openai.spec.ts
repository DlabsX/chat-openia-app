import { TestBed } from '@angular/core/testing';

import { Openai } from './openai';

describe('Openai', () => {
  let service: Openai;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Openai);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
