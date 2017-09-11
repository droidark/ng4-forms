import { Ng4FormsPage } from './app.po';

describe('ng4-forms App', () => {
  let page: Ng4FormsPage;

  beforeEach(() => {
    page = new Ng4FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
