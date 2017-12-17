import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Headers, Http, Response, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-add-reserve',
  templateUrl: './add-reserve.component.html',
  styleUrls: ['./add-reserve.component.css']
})
export class AddReserveComponent implements OnInit {
  //drugAddForm: FormGroup;
  makeReservationForm: FormGroup;
  submitted: boolean;

  adults: any;
  shoow : boolean = false;
  children: any;
  total: any;
  payment : any = {
    CardNumber : "",
    CVCNumber : "",
    CardHolderName : ""
  }

  reservation : any = {
    ReservedTables : "2",
    ReservedDate : "2017/01/01",
    ReservedUserId : "R001",
    PaymentType : "CASH",
    CardNumber : "",
    CVCNumber : "",
    CardHolderName : ""
  }

  constructor(private http: Http) { }

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
      adults: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      children: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')])
    });
    this.submitted = false;
  }

  sendPayment()
{
  this.reservation.PaymentType = "CREDIT";
  this.reservation.CardNumber = this.payment.CardNumber;
  this.reservation.CardHolderName = this.payment.CardHolderName;
  this.reservation.CVCNumber = this.payment.CVCNumber;
  
  this.http.post("http://localhost:59731/api/reservation", this.reservation)
    .subscribe(
      res => {
        alert("Reservation Done")
        this.shoow = false;
      },
      err => {
        alert("Reservation Done")
        this.shoow = false;
      }
    );
  
} 
 onSubmit() {
  this.http.post("http://localhost:59731/api/reservation", this.reservation)
  .subscribe(
    res => {
      alert("Reservation Done")
    },
    err => {
      console.log("Error occured");
    }
  );

  }

  payByCash() {
    this.http.post("http://localhost:59731/api/reservation", this.reservation)
    .subscribe(
      res => {
        alert("Reservation Done")
      },
      err => {
        alert("Reservation Done");
      }
    );
  
    }

  saveReservation(body: Object): Observable<Object> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    var url = 'http://localhost:8080/reservations';
  

    return this.http.post(url, body, options) // ...using post request
                     .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  addNewEmployeeAddress() {
    this.makeReservationForm.reset();
    this.submitted = false;
  }

  calculateTotal() {
    return this.total = this.adults * 1000 + this.children * 500;
  }

  getTotal = function getTotal() {
    var total = 0.0;
    this.total = this.adults * 1000 + this.children * 500;
    return total;
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
