import { Injectable } from '@angular/core';
import { user } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user:user[];
  users:user[];
  constructor() {
    this.users=[];
  }
  getUser(){
    return this.users;
  }
  addUser(user:user)
  {
    console.log(user);
    this.users.push(user);
  }
}
