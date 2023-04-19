import * as fromInformationFeature from './information-feature.actions';

describe('loadInformationFeatures', () => {
  it('should return an action', () => {
    expect(fromInformationFeature.loadInformationFeatures().type).toBe('[InformationFeature] Load InformationFeatures');
  });
});
