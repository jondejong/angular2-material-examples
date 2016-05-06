export class Angular2MaterialExamplesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-material-examples-app h1')).getText();
  }
}
