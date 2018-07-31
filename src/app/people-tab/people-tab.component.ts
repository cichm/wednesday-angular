import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./people-tab.component.scss']
})
export class PeopleTabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
}
