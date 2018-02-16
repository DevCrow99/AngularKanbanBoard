import { AngularBlankoPage } from './app.po';

describe('angular-blanko App', () => {
  let page: AngularBlankoPage;

  beforeEach(() => {
    page = new AngularBlankoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
