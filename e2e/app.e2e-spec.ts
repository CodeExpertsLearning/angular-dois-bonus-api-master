import { AppCelPage } from './app.po';

describe('app-cel App', function() {
  let page: AppCelPage;

  beforeEach(() => {
    page = new AppCelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
