import * as fromInformationFeature from './information-feature.reducer';
import { selectInformationFeatureState } from './information-feature.selectors';

describe('InformationFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInformationFeatureState({
      [fromInformationFeature.informationFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
