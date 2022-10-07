import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { user } from '../models/user';
import { ActivatedRoute,Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  users:any[];
  //users:user[];
  user:user;
  loginCheck:boolean=false;
  constructor(private router:Router,private userService:RegisterService ) {
    //this.user = new  user("test@gmail.com","12345");
    //this.users.push(user);
    this.users=[{username:'test@gmail.com',password:'12345'},
      {uname:'test1@gmail.com',password:'12345'},
      {uname:'abc@gmail.com',password:'12345'},
    ]
    console.log(this.users);

    this.loginForm = new FormGroup({
      uname:new FormControl(null,[]),
      password:new FormControl(null,[]),
    })
  }

  ngOnInit(): void {
    this.users=this.userService.getUser();
    console.log(this.users)
  }

  register(loginForm:FormGroup) {
  for(var i=0;i<this.users.length;i++ ){
    console.log(this.users[i].uname );
    console.log( 'sdfsd', loginForm.value.uname);
      if((this.users[i].uname ==  loginForm.value.uname ) && (this.users[i].password ==   loginForm.value.password))
      {
        this.loginCheck=true;
        break;
      }
    }
      if(this.loginCheck){
        alert('Successful login');
        this.router.navigateByUrl('search');
      }else{
        alert('Invalid username / password');
      }
    console.log(loginForm);

  }

}
