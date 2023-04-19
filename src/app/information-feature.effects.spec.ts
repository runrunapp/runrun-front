import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InformationFeatureEffects } from './information-feature.effects';

describe('InformationFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: InformationFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InformationFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InformationFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
