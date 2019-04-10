import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {
  createNewTextForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private configServers: ServiceService ) {
    this.createNewTextForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      category: new FormControl(),
      theme: new FormControl(),
      body: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit(  ) {
    console.log(this.createNewTextForm.value);
    this.configServers.postText(this.createNewTextForm.value);
  }

}
