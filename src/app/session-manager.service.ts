import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }

  static set(type:string, key:string, value:any) {
    var time = new Date().getTime()+(5*1*1000)
    if(SessionManagerService.has(type)){
      var a = JSON.parse(window.sessionStorage[type])
      a[key] = value
      window.sessionStorage.setItem(type, JSON.stringify(a));
    }else{
      window.sessionStorage.setItem(type, JSON.stringify({[key]:value,expiresAt:time}));
    }
  }



  static get(type:string, key:string) {
      if(SessionManagerService.has(type))
        if(JSON.parse(window.sessionStorage[type]))[key]
         return JSON.parse(window.sessionStorage[type])[key]
        return null
      return null;
  }

  static has(key:string) {
      if(window.sessionStorage[key]) return true;
      return false;
  }

  static remove(type:string, key:string) {
    SessionManagerService.set(type,key,JSON.stringify(null)); // this line is only for IE11 (problems with sessionStorage.removeItem)
      window.sessionStorage.removeItem(key);
  }

}
