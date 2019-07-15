import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nxt-btn',
  templateUrl: './nxt-btn.component.html',
  styleUrls: ['./nxt-btn.component.css']
})
export class NxtBtnComponent implements OnInit {

  constructor() { }
  @Input() text:String;
  @Input() text2:String;
  @Input() callBackFunction: any;
  @Input() callBackFunction1: any;

  ngOnInit() {
  }

}
