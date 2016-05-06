import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2MaterialExamplesAppComponent } from '../app/angular2-material-examples.component';

beforeEachProviders(() => [Angular2MaterialExamplesAppComponent]);

describe('App: Angular2MaterialExamples', () => {
  it('should create the app',
      inject([Angular2MaterialExamplesAppComponent], (app: Angular2MaterialExamplesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-material-examples works!\'',
      inject([Angular2MaterialExamplesAppComponent], (app: Angular2MaterialExamplesAppComponent) => {
    expect(app.title).toEqual('angular2-material-examples works!');
  }));
});
