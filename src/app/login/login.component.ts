import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;m;
  password;
  email;
  name;
 
  logview:boolean=true;
  regview:boolean=false;

  constructor(private ls:LibraryService,private route:Router) { } 

  public login(){
    this.logview=true;
    this.regview=false;
    console.log(this.username);
   var log={username:this.username,password:this.password};
    this.ls.checklog(log).subscribe(data=>{
      this.m=data;
      console.log(this.m.msg)
      if(this.m.msg == "Success"){
        this.route.navigateByUrl("/books");

      }

    })
  }

  public signview(){
    this.logview=false;
    this.regview=true;
  }

  public loginview(){
    this.logview=true;
    this.regview=false;
  }

  public signup(){
    this.logview=false;
    this.regview=true;
    var reg={name:this.name,email:this.email,username:this.username,password:this.password};
    this.ls.register(reg).subscribe(data=>{
      this.m=data;
      console.log(this.m)
      this.logview=true;
    this.regview=false;
    })
  }

  ngOnInit() {
  }

}
