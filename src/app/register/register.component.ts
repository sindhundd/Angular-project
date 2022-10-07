import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RegisterService } from '../services/register.service';
import { user } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup;
  @Input() user:user;
  users:any;
  constructor(private userService:RegisterService) {
    this.registerForm = new FormGroup({
      uname:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl(null,Validators.required)
    })}

  public get uname() : any {
    return this.registerForm.get('uname');
  }

  public get password() : any {
    return this.registerForm.get('password');
  }
  public get confirmPassword() : any {
    return this.registerForm.get('confirmPassword');
  }

  ngOnInit(): void {
    this.users=  this.userService.getUser();
  }

  register(registerForm:FormGroup){
    if(registerForm.value.password != registerForm.value.confirmPassword){
      alert('password Mismatch');
    }
    else if(registerForm.valid){
      console.log(registerForm);
      this.user = new  user(registerForm.value.uname,registerForm.value.password)
      console.log(this.user);
      this.userService.addUser(this.user);
      alert('successfully registered');
    }
    else
      alert('Please check teh values')
  }
}
