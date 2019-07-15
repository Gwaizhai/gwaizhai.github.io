import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.css']
})
export class CertComponent implements OnInit {

  constructor() { }

  data:any
  timeStamp:any
  ngOnInit():void {
    this.data = {
      data:"\"If your portfolio was here – it’d be copyrighted by now\" | Private Intellectual Property Registration, Multimedia + More Protected On The Other Blockchain® | CVS8Jy#|w^jfTr^b!nJh0Z6y2RE57s0 | Artists & Creators | TOF® | Making Choice Personal\"If your portfolio was here – it’d be copyrighted by now\" | Private Intellectual Property Registration, Multimedia + More Protected On The Other Blockchain® | CVS8Jy#|w^jfTr^b!nJh0Z6y2RE57s0 | Artists & Creators | TOF® | Making Choice Personal",
      ipfsHash:"QXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      transactionId:"f8a6f6408f34ea9bf15f839f51c19e68e83687812adf10e18d8d7fc1e6351cb4",
      epoch:"1550903593",
      timeStamp:"2019-02-23 06:33:13",
      blockHash:"008ac191d6f4ca5a101c06fd7d692db3638c1cc5c5f305e13135e2a053ba67db",
      confirmation:"1206"
    }
    var date = new Date()
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    this.timeStamp = {
      stamp:months[date.getMonth()].toLocaleUpperCase()+" "+date.getDate()+" "+date.getFullYear(),
      time:date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    }
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();   
    });
  }

}
