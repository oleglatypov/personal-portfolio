import { OlegPortfolioPage } from './app.po';

describe('oleg-portfolio App', () => {
  let page: OlegPortfolioPage;

  beforeEach(() => {
    page = new OlegPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
