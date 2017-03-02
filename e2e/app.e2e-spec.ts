import { NgprojPage } from './app.po';

describe('ngproj App', function() {
  let page: NgprojPage;

  beforeEach(() => {
    page = new NgprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
