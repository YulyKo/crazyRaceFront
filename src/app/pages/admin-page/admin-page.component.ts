import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  createNewTextForm: FormGroup;

  constructor() {
    this.createNewTextForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      category: new FormControl(),
      theme: new FormControl(),
      body: new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit(  ) {
    console.log(this.createNewTextForm.value);
  }
}
