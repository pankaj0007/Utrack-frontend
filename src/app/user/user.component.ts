import { Component, OnInit } from '@angular/core';
import {HttpClientService}  from '../services/httpclient.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  $users;
  
  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
      console.log('UserCompoenent ....');
      this.$users = this.httpClient.getUsers();
      console.log('users : ', this.$users);
      this.$users.forEach(item=>{
          console.log('name : ', item);
          item.forEach(c=>{
              console.log(c.name,' ', c.password, ' ', c.role);
          });
      });
  }

}
