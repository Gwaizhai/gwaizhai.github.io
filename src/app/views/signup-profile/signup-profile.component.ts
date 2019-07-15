import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from 'src/app/session-manager.service';

@Component({
  selector: 'app-signup-profile',
  templateUrl: './signup-profile.component.html',
  styleUrls: ['./signup-profile.component.css']
})
export class SignupProfileComponent implements OnInit {

  constructor() { }

  profile:any


  optionClick(num:number){
    var a = document.getElementById('msel1')
    var b = document.getElementById('msel2')
    var c = document.getElementById('msel3')
    a.classList.remove('acasccascas')
    b.classList.remove('acasccascas')
    c.classList.remove('acasccascas')
    if(num===1){
        a.classList.add('acasccascas')
        this.profile = 'member'
        SessionManagerService.set('SD','profile','member')
    }
    if(num===2){
        b.classList.add('acasccascas')
        this.profile = 'artist'
        SessionManagerService.set('SD','profile','artist')
    }
    if(num===3){
        c.classList.add('acasccascas')
        this.profile = 'provider'   
        SessionManagerService.set('SD','profile','provider')
    }
}
type:any
optionClick1(num:number){
  var a = document.getElementById('msel11')
  var b = document.getElementById('msel12')
  a.classList.remove('acasccascas')
  b.classList.remove('acasccascas')
  if(num===1){
      this.type=[]
      a.classList.add('acasccascas') 
      this.type.push('private')
  }
  if(num===2){
      b.classList.add('acasccascas')     
      this.type=[]
      this.type.push('corporate')
  }
  SessionManagerService.set('SD','profileType',this.type?this.type.join(','):"")  
}


optionClick2(num:number){
  if(this.type.includes(num)){
    this.type = this.type.filter((element)=>{
      return !(element===num)
    })
    var a = document.getElementsByClassName('meSelectOpt2')
      var i = 0;
      for(i=0;i<a.length;i++){
        a[i].classList.remove('acasccascas')
      }
      this.type.forEach(element => {
        document.getElementById('opta'+element).classList.add('acasccascas')
        });
  } 
  else{
    if(this.type.length<3){
      if(!this.type.includes(num)){
        this.type.push(num)
      }
      var a = document.getElementsByClassName('meSelectOpt2')
      var i = 0;
      for(i=0;i<a.length;i++){
        a[i].classList.remove('acasccascas')
      }
      this.type.forEach(element => {
        document.getElementById('opta'+element).classList.add('acasccascas')
        });
    }
    else{
      this.type = this.type.slice(1)
      this.optionClick2(num)
    }
  }
  SessionManagerService.set('SD','profileType',this.type?this.type.join(','):"")  
}

optionClick3(num:number){
  if(this.type.includes(num)){
    this.type = this.type.filter((element)=>{
      return !(element===num)
    })
    var a = document.getElementsByClassName('meSelectOpt')
      var i = 0;
    for(i=0;i<a.length;i++){
      a[i].classList.remove('acasccascas')
    }
    this.type.forEach(element => {
      document.getElementById('optp'+element).classList.add('acasccascas')
    });
  } 
  else{
    if(this.type.length<3){
      if(!this.type.includes(num)){
        this.type.push(num)
      }
      var a = document.getElementsByClassName('meSelectOpt')
      var i = 0;
      for(i=0;i<a.length;i++){
        a[i].classList.remove('acasccascas')
      }
      this.type.forEach(element => {
        document.getElementById('optp'+element).classList.add('acasccascas')
      });
  }
  else{
    this.type = this.type.slice(1)
    this.optionClick2(num)
  }
  }
  SessionManagerService.set('SD','profileType',this.type?this.type.join(','):"")  
}


profileClick(){
  this.type = []
  document.getElementById('main').classList.add('collapse')
  this.profile = SessionManagerService.get('SD','profile')==='member'?1:SessionManagerService.get('SD','profile')==='artist'?2:SessionManagerService.get('SD','profile')==='provider'?3:null
  if(this.profile===1){
    document.getElementById('member').classList.remove('collapse')
  }
  else if(this.profile === 2){
    document.getElementById('artist').classList.remove('collapse')
  }
  else if(this.profile===3){
    document.getElementById('provider').classList.remove('collapse')
  }
}
profileBackClick(){
  document.getElementById('')
}
memberClick(){
  this.nextClick()
  
}

memberBackClick(){
  document.getElementById('member').classList.add('collapse')
  document.getElementById('main').classList.remove('collapse')
}

  
artistClick(){
  this.nextClick()

}

artistBackClick(){
  document.getElementById('artist').classList.add('collapse')
  document.getElementById('main').classList.remove('collapse')
}

providerClick(){
  this.nextClick()
}

nextClick(){
  
}
providerBackClick(){
  document.getElementById('provider').classList.add('collapse')
  document.getElementById('main').classList.remove('collapse')
}
  ngOnInit() {
    this.type = []
    this.profile = 1
  }

}
