import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private myrouter:Router) { }

  userName=""
  Password=""

  readValues=()=>{
    let data={
      "userName":this.userName,
      "password":this.Password
    }
    if(this.userName =="admin" && this.Password=="12345"){
      this.myrouter.navigate(["/dashboard"])
    }
    else {
      alert("invalid login")
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
