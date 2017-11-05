import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-reserve',
  templateUrl: './add-reserve.component.html',
  styleUrls: ['./add-reserve.component.css']
})
export class AddReserveComponent implements OnInit {
  //drugAddForm: FormGroup;
  makeReservationForm : FormGroup;
  submitted: boolean;

  adults : any;
  children : any;
  total : any;

  ngOnInit(): void {
    // this.drugAddForm = new FormGroup({
    //   drugName: new FormControl('', Validators.required),
    //   drugPrice: new FormControl('',[Validators.required,Validators.pattern('[0-9]+.[0-9][0-9]')]),
    //   drugInitialQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    //   drugReorderQuantity: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])  
    // });
    // this.submitted = false;
    this.makeReservationForm = new FormGroup({
      dateTime: new FormControl('', Validators.required),
      adults:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      children: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')])
    });
    this.submitted = false;
  }

  
  onSubmit() {

  }
  addNewEmployeeAddress() {
    this.makeReservationForm.reset();
    this.submitted = false;
  }

  calculateTotal(){
    return this.total = this.adults * 1000 + this.children * 500;
  }

  getTotal = function getTotal(){
    var total = 0.0;
    this.total = this.adults * 1000 + this.children * 500;
    return total;
  }
}
