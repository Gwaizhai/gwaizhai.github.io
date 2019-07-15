import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-logo-with-title',
  templateUrl: './logo-with-title.component.html',
  styleUrls: ['./logo-with-title.component.css']
})
export class LogoWithTitleComponent implements OnInit {

  constructor() { }
  @Input() title:String
  
  ngOnInit() {
  }

}
