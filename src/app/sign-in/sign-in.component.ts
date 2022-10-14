import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  userName=""
  Password=""

  readValues=()=>{
    let data={
      "userName":this.userName,
      "password":this.Password
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
