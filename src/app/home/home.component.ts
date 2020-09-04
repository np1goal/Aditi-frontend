import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../styling/colors.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout( ()=>{
    document.getElementById('home-loading').style.display = 'none';
    }, 6500)
  }
}
