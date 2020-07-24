import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any={};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login()
  {
   this.authService.login(this.model).subscribe(next => {
    console.log('Login successfully');
    
   }, error => {
     console.log('failed to login');
   });
  }

  loggedin()
  {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout()
  {
    localStorage.removeItem('token');
    console.log('Logged out')
  }

}
