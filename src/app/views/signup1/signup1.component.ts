import { Component, OnInit } from '@angular/core';
import {SessionManagerService} from './../../session-manager.service';
import {ApiService} from './../../api.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  email:String
  password:String
  displayName:String
  userName:String

  constructor() { 
    
  }

  callBack2=()=>{
    if(!this.displayName || this.displayName.length<1){
      this.appendError('Invalid displayname',"display name should not be empty.")
    }
    else{
      if(!this.userName || this.userName.length<1){
        this.appendError('Invalid username',"username should not be empty.")
      }
     else{
        if(ApiService.makeApiCall('UNC',this.userName)){
          SessionManagerService.set('SD','username',this.userName)
          SessionManagerService.set('SD','displayname',this.displayName)  
          document.getElementById('nav-signup-tab').classList.remove('active')
          document.getElementById('nav-nearly-tab').classList.add('active')
          var a = document.getElementById('nav-signup')
          a.classList.remove('active')
          a.classList.remove('show')
          var b = document.getElementById('nav-nearly')
          b.classList.add('active')
          b.classList.add('show')
        }else{
          this.appendError('Already Exists',"username already taken try another name.")
        }
      }
    }
  }

  callBack3=()=>{
    document.getElementById('part2').classList.add('collapse')
    document.getElementById('part1').classList.remove('collapse')
  }

  callBack=()=>{
    if(!this.email || this.email.length<1){
      this.appendError('Invalid Mail',"email id should not be empty.")
    }else{
      if(!this.checkMail(this.email)){
        this.appendError('Invalid Mail',"Please enter valid email id.")
      }else{
        if(!this.password || this.password.length<6){
          if(!this.password ||  this.password.length<1){
            this.appendError('Too short','Password should not be empty.')
          }else{
            this.appendError('Too short','Password should be atleast 6 character long.')
          }
        }else{
          document.getElementById('spin').style.display = 'inline-block'
            document.getElementById('spin').style.display = 'none'
            if(ApiService.makeApiCall('EC',this.userName)){
              document.getElementById('spin').style.display = 'none'
              document.getElementById('err').style.display = 'none'
              document.getElementById('check').style.display = 'inline-block'
              SessionManagerService.set('SD','email',this.email)
              SessionManagerService.set('SD','password',this.password)
              document.getElementById('part1').classList.add('collapse')
              document.getElementById('part2').classList.remove('collapse')
            }else{
              document.getElementById('spin').style.display = 'none'
              document.getElementById('check').style.display = 'none'
              document.getElementById('err').style.display = 'inline-block'
              this.appendError('Already Exists',"email already exists please check and try again.")
            }
        }
      }
    }
    
  }

  appendError = (title,message) =>{
    var a = document.createElement('div')
    a.className = "alert alert-danger alert-dismissible fade show"
    a.innerHTML = '<strong>'+title+', </strong>'+message+'\
    <button type="button" class="close" data-dismiss="alert">&times;</button>'
    document.getElementById('errorGroup').appendChild(a)
  }

  checkMail = (email:String)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
  }
  ngOnInit() {
    document.getElementById('spin').style.display = 'none'
    document.getElementById('check').style.display = 'none'
    document.getElementById('err').style.display = 'none'
  }

}
