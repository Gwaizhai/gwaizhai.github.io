import { Component, OnInit } from '@angular/core';
import {SessionManagerService} from './../../session-manager.service';
import {arr} from '../../../assets/lib/countries.js' 

@Component({
  selector: 'app-nearly-signup',
  templateUrl: './nearly-signup.component.html',
  styleUrls: ['./nearly-signup.component.css']
})
export class NearlySignupComponent implements OnInit {

  constructor() { }

  genderSel(num:number){
    document.getElementById('male').classList.remove('optActive')
    document.getElementById('female').classList.remove('optActive')
    document.getElementById('mixed').classList.remove('optActive')

  if(num===1){
      SessionManagerService.set('SD','gender','male')
      document.getElementById('male').classList.add('optActive')
  }
  if(num===2){
      SessionManagerService.set('SD','gender','female')
      document.getElementById('female').classList.add('optActive')
  }
  if(num===3){
      SessionManagerService.set('SD','gender','na')
      document.getElementById('mixed').classList.add('optActive')
  }
  }

  cities = []
  updateCountry(event:Event):void {
    this.selectedCountry = (<HTMLSelectElement>event.srcElement).value;
    if(this.selectedCountry===''){
      document.getElementById('cities').style.display='none'
    }else{
      document.getElementById('cities').style.display='block'
    }
    this.cities = arr[this.selectedCountry]
  }

  updateCity(event:Event):void{
    this.selectedCity = (<HTMLSelectElement>event.srcElement).value;
    if(this.selectedCity!=''){
      SessionManagerService.set('SD','location',this.selectedCountry+','+this.selectedCity)
    }
  }

  countries = Object.keys(arr)

  selectedCountry:string
  selectedCity:string

  callBack(){
    if(this.selectedCity!=''&&this.selectedCountry!=''){
      document.getElementById('nav-nearly-tab').classList.remove('active')
      document.getElementById('nav-terms-tab').classList.add('active')
      var a = document.getElementById('nav-nearly')
      a.classList.remove('active')
      a.classList.remove('show')
      var b = document.getElementById('nav-terms')
      b.classList.add('active')
      b.classList.add('show')
    }
  }

  callBack2(){

  }
  ngOnInit() {
  }

}
