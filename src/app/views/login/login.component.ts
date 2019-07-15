import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {ApiService} from './../../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  callBack = () =>{
    this.appendError('Failed to Login','Invalid email or password.')
    // ApiService.makeApiCall('hi')
  }
  appendError = (title,message) =>{
    var a = document.createElement('div')
    a.className = "alert alert-danger alert-dismissible fade show"
    a.innerHTML = '<strong>'+title+', </strong>'+message+'\
    <button type="button" class="close" data-dismiss="alert">&times;</button>'
    document.getElementById('errorGroup').appendChild(a)
  }

  ngOnInit() {
  }

}
