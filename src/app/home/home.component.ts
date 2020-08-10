import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout( ()=>{
    // document.getElementById('aditi-logo-1').style.opacity = '0.1';
    // document.getElementById('aditi-logo-2').style.opacity = '0.1';
    }, 3000)
  }
}
