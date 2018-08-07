import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-tab',
  templateUrl: 'people-tab.component.html',
  styleUrls: ['./people-tab.component.scss']
})
export class PeopleTabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
}
