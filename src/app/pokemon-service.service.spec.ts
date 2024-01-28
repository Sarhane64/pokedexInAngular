import { TestBed } from '@angular/core/testing';

import { PokemonservService } from './pokemon-service.service';

describe('PokemonServiceService', () => {
  let service: PokemonservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
