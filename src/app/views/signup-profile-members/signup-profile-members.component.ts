import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-profile-members',
  templateUrl: './signup-profile-members.component.html',
  styleUrls: ['./signup-profile-members.component.css']
})
export class SignupProfileMembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callBack2(){

  }
  callBack3(){
    
  }
  optionClick(num:number){
    var a = document.getElementById('msel11')
    var b = document.getElementById('msel12')
    a.classList.remove('acasccascas')
    b.classList.remove('acasccascas')
    if(num===1){
        // window.userData.profileSel[0] = 'private'  
        a.classList.add('acasccascas') 
    }
    if(num===2){
        // window.userData.profileSel[0] = 'corporate'  
        b.classList.add('acasccascas')        
    }
    
}


optionClick1(num:number){
  var a = document.getElementById('msel11')
  var b = document.getElementById('msel12')
  a.classList.remove('acasccascas')
  b.classList.remove('acasccascas')
  if(num===1){
      // window.userData.profileSel[0] = 'private'  
      a.classList.add('acasccascas') 
  }
  if(num===2){
      // window.userData.profileSel[0] = 'corporate'  
      b.classList.add('acasccascas')        
  }
  
}

}
