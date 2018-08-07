import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { FormControl } from '@angular/forms';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import { TodoFilter, VISIBILITY_FILTER } from "@app/todos/filter/filter.model";

@TakeUntilDestroy()
@Component({
  selector: 'app-todos-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Input() active: VISIBILITY_FILTER;
  @Input() filters: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(c => {
      this.update.emit(c);
    });
  }

  ngOnDestroy(): void {}
}
