import { Component, OnInit } from '@angular/core';
import {SessionManagerService} from './../../session-manager.service';

@Component({
  selector: 'app-signup-interests',
  templateUrl: './signup-interests.component.html',
  styleUrls: ['./signup-interests.component.css']
})
export class SignupInterestsComponent implements OnInit {

  constructor() { }


  interests:any
  optionClick2(num:number){
    if(this.interests.includes(num)){
      this.interests = this.interests.filter((element)=>{
        return !(element===num)
      })
      var a = document.getElementsByClassName('meSelectOpt2')
        var i = 0;
        for(i=0;i<a.length;i++){
          a[i].classList.remove('acasccascas')
        }
        this.interests.forEach(element => {
          document.getElementById('opti'+element).classList.add('acasccascas')
          });
    } 
    else{
        if(!this.interests.includes(num)){
          this.interests.push(num)
        }
        var a = document.getElementsByClassName('meSelectOpt2')
        var i = 0;
        for(i=0;i<a.length;i++){
          a[i].classList.remove('acasccascas')
        }
        this.interests.forEach(element => {
          document.getElementById('opti'+element).classList.add('acasccascas')
          });
    }
    SessionManagerService.set('SD','profileInterests',this.interests?this.interests.join(','):"")  
  }

  nextClick(){


  }

  backClick(){

  }
  ngOnInit() {
    this.interests = []
  }

}
