import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static makeApiCall(code:string,data:any) {
    if(code==='UNC'){
      // username check
      return true;
    }
    else if(code==='EC'){
      // email check
      return true;
    }
    else if(code==='REG'){
      // Register
    }
    else if(code==='LOGIN'){
      // Login
    }
  }
  
  constructor() { }
}
