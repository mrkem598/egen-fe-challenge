import { ProjectUsersPage } from './app.po';

describe('project-users App', function() {
  let page: ProjectUsersPage;

  beforeEach(() => {
    page = new ProjectUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
