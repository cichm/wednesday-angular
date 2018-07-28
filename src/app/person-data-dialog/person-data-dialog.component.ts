import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material";
import { PersonDialog } from "@app/person-data-dialog/PersonDialog";

@Component({
  selector: 'person-data-dialog',
  templateUrl: './person-data-dialog.component.html',
  styleUrls: ['./person-data-dialog.component.scss']
})
export class PersonDataDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PersonDialog) {}

  ngOnInit() {
  }

}
