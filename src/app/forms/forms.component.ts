import { Component,OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  cardForm: FormGroup | undefined;
  name: string | undefined;
  job: string | undefined;
  email: string | undefined;
  phones: any[] | undefined;
  address: string | undefined;
  website: string | undefined;
  qrCode: string | undefined;
  constructor() {}

  onSubmit() {
    
  }

  get phoneControls () {
    return (this.cardForm?.get('phones') as FormArray).controls;
  }

  createPhoneNumber() {
    return new FormControl(null, [Validators.required, Validators.pattern("^01[0125][0-9]{8}$")])
  }

  addPhoneNumber() {
    if (this.phoneControls.length < 2) {
      (<FormArray>this.cardForm?.get('phones')).push(this.createPhoneNumber());
    }
  }

  removePhoneNumber(index: number) {
    (<FormArray>this.cardForm?.get('phones')).removeAt(index);
  }

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      job: new FormControl(null , [Validators.required , Validators.minLength(3)]),
      email: new FormControl(null , [Validators.required, Validators.email]),
      phones: new FormArray([
        this.createPhoneNumber()
      ]),
      address: new FormControl(null , [Validators.required]),
      website : new FormControl(null , [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]),
      qrCode : new FormControl(null , [Validators.required]),
    })

    this.cardForm.valueChanges.subscribe((value) => {
      this.name = value.name;
      this.job = value.job;
      this.email = value.email;
      this.phones = value.phones;
      this.address = value.address;
      this.website = value.website;
      this.qrCode = value.qrCode;
    })
  }



html: string = `
<div class="mt-5" >
<div class="card">
    <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <p class="title text-center">Personal Card</p>
    <div class="name text-center"></div>
    <div class="job"></div>
    <div class="email"></div>
    <div class="phones"></div>
    <div class="address"></div>
    <div class="website"></div>
    <div class="qrCode"></div>
  </div>
</div>
</div>
`
css:string = `
  .card{
    width: 500px;
    height: 300px !important;
    background-color: #f5f5f5;

  }

  .title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;

  }

`

}

