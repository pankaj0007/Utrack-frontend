import { Component, OnInit } from '@angular/core';
import {HttpClientService}  from '../services/httpclient.service'

@Component({
  selector: 'app-auditlog',
  templateUrl: './auditlog.component.html',
  styleUrls: ['./auditlog.component.css']
})
export class AuditlogComponent implements OnInit {
  
  $logs;
  $logslist;
   
  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
      this.$logs = this.httpClient.getAuditLogs();
      this.$logs.forEach(item=>{
          this.$logslist= item;
      });
  }

}
