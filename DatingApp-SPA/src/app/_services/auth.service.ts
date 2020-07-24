import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseurl = 'http://localhost:5000/api/auth/';
constructor(private http: HttpClient){ }

public login(model: any) {
return this.http.post(this.baseurl + 'login', model)
.pipe(map((responce: any) =>
{
  const user = responce;
  if ( user ) {
  localStorage.setItem('token', user.token);
}
}));
}

public register(model:any)
{
  return this.http.post(this.baseurl+ 'register', model);
}

}
