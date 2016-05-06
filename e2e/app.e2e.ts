import { Angular2MaterialExamplesPage } from './app.po';

describe('angular2-material-examples App', function() {
  let page: Angular2MaterialExamplesPage;

  beforeEach(() => {
    page = new Angular2MaterialExamplesPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-material-examples works!');
  });
});
