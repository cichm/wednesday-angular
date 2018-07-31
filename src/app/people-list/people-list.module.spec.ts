import { PeopleListModule } from './people-list.module';

describe('PeopleListModule', () => {
  let peopleListModule: PeopleListModule;

  beforeEach(() => {
    peopleListModule = new PeopleListModule();
  });

  it('should create an instance', () => {
    expect(peopleListModule).toBeTruthy();
  });
});
