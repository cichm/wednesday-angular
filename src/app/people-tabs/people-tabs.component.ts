import { Component, ContentChildren, QueryList } from '@angular/core';
import { PeopleTabComponent } from "@app/people-tab/people-tab.component";

@Component({
  selector: 'app-people-tabs',
  templateUrl: './people-tabs.component.html',
  styleUrls: ['./people-tabs.component.scss']
})
export class PeopleTabsComponent {
  @ContentChildren(PeopleTabComponent) tabs: QueryList<PeopleTabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: PeopleTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
