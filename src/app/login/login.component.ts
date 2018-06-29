import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserloginService} from '../userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:any;
  password:any;

  constructor(private userloginservice: UserloginService, private route: Router) { }

  onSubmit(subcribe: NgForm){
    this.userName = subcribe.value.userName;
    this.password = subcribe.value.password;
    this.userloginservice.userLogin(this.userName, this.password).subscribe((data:any) => {
      this.userloginservice.userData = JSON.parse(data.TABLE_DATA);
      if(this.userloginservice.userData){
        sessionStorage.setItem('user', 'in');
        this.route.navigate(['/users']);
      }
    })
  }

  ngOnInit() {   
  }

}
