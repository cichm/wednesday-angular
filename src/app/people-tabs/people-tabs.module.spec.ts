import { PeopleTabsModule } from './people-tabs.module';

describe('PeopleTabsModule', () => {
  let peopleTabsModule: PeopleTabsModule;

  beforeEach(() => {
    peopleTabsModule = new PeopleTabsModule();
  });

  it('should create an instance', () => {
    expect(peopleTabsModule).toBeTruthy();
  });
});
