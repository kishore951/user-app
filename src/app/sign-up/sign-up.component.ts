import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  name=""
  phoneNo=""
  gender=""
  emailAddress=""
  address=""
  pinCode=""
  bloodGroup=""
  dob=""
  age=""
  parentName=""
  password=""
  confirmPassword=""

  readValues=()=>{
    let data ={
      "name":this.name,
      "phoneNo":this.phoneNo,
      "gender":this.gender,
      "emailAddress":this.emailAddress,
      "address":this.address,
      "pinCode":this.pinCode,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob,
      "age":this.age,
      "parentName":this.parentName,
      "password":this.password,
      "confirmPassword":this.confirmPassword

    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
