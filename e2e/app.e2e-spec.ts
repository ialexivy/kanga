import { KangaPage } from './app.po';

describe('kanga App', function() {
  let page: KangaPage;

  beforeEach(() => {
    page = new KangaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
