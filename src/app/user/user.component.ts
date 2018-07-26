import { Component, OnInit } from '@angular/core';
import {HttpClientService}  from '../services/httpclient.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  $users;
  $userlist;
  
  constructor(private httpClient: HttpClientService,
          private router: Router,
          private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.$users = this.httpClient.getUsers();
      this.$users.forEach(item=>{
          this.$userlist= item;
      });
  }
  
  navigatelog(){
      this.router.navigate(['log']);
  }

}
