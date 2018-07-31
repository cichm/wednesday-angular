import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-men-list',
  templateUrl: './men-list.component.html',
  styleUrls: ['./men-list.component.scss']
})
export class MenListComponent {
  @Input() people: any;
  @Output() addHero = new EventEmitter<any>();
  @Output() editHero = new EventEmitter<any>();
}
