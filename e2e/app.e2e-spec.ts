import { IamDemoNg2ProductAppPage } from './app.po';

describe('iam-demo-ng2-product-app App', function() {
  let page: IamDemoNg2ProductAppPage;

  beforeEach(() => {
    page = new IamDemoNg2ProductAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
