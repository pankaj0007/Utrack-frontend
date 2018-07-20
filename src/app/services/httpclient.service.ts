import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {BASE_URI} from '../services/auth.constant';

@Injectable()
export class HttpClientService {
    
  constructor(private http: AuthHttp) {
  }

  getUsers() {
      return this.http.get(BASE_URI.concat('/utrack/user')).map(res => res.json());     
    }
}