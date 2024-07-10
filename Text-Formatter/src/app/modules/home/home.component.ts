import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  btn_class: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateData(item : any){
    this.btn_class = item;
  }

}
