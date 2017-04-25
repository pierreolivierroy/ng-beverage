import { NgBeveragePage } from './app.po';

describe('ng-beverage App', () => {
  let page: NgBeveragePage;

  beforeEach(() => {
    page = new NgBeveragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
