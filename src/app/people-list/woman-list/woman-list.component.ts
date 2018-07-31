import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.scss']
})
export class WomanListComponent {
  @Input() people: any;
  @Output() addHero = new EventEmitter<any>();
  @Output() editHero = new EventEmitter<any>();
}
