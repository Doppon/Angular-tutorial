import { AngularTourOfHeroes3Page } from './app.po';

describe('angular-tour-of-heroes3 App', function() {
  let page: AngularTourOfHeroes3Page;

  beforeEach(() => {
    page = new AngularTourOfHeroes3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
