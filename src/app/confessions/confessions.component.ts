import { Component, OnInit } from '@angular/core';
import  *  as  Feelings  from  '../data/feelings.json';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import Confession from '../models/confession';
import { ConfessionService } from '../confession.service';

@Component({
  selector: 'app-confessions',
  templateUrl: './confessions.component.html',
  styleUrls: ['./confessions.component.css', '../styling/colors.css']
})
export class ConfessionsComponent implements OnInit {
  
  feelings: string[] = [];
  feelingsSelected = [];
  confessions: Confession[];
  confessString: string;

  constructor(private confessionService: ConfessionService) { }

  ngOnInit() {
    for(var i = 0; i < Feelings["feelings"].length; i++) {
      this.feelings.push(Feelings["feelings"][i].name);
    }
    this.confessionService.getConfessions()
      .subscribe((confessions: Confession[]) => this.confessions = confessions);
  }

  openConfessTextArea() {
    document.getElementById('confessions').style.opacity = '0.3';
    document.getElementById('confession-card').style.webkitAnimation = 'confession-card-entry-animation 0.5s ease-out'
    document.getElementById('confession-card').style.display = 'grid';
  }

  feelingsAdded(feeling) {
    if((!this.feelingsSelected.includes(feeling)) && (this.feelingsSelected.length < 3)) {
      this.feelingsSelected.push(feeling);
      var feel = document.createElement('div');
      feel.setAttribute('id', feeling);
      var feelingText = feeling + " " + '×';
      feel.textContent = feelingText;
      feel.style.display = 'inline';
      feel.style.width = '100px';
      feel.style.height = '30px';
      feel.style.border = '2px solid #00214e';
      feel.style.backgroundColor = 'transparent';
      feel.style.borderRadius = '10px';
      feel.style.padding = '5px';
      feel.style.marginRight = '5px';
      feel.style.bottom = '5px';
      feel.setAttribute('click', 'feelingRemoved("hello")');
      // feel.onclick = feelingRemoved();
      document.getElementById('feeling-selected').appendChild(feel);
    } else {
      document.getElementById('feeling-selected-error').style.display = 'inline';
    }

    var feelingRemoved = function() {
      console.log(feeling);
    };
  }

  submitConfession() {
    this.confessionService.createConfessions(this.confessString, this.feelingsSelected, false).subscribe();
    this.closeConfessTextArea();
  }

  closeConfessTextArea() {
    var confessionCard = document.getElementById('confession-card');
    var confessions = document.getElementById('confessions');

    confessionCard.style.animation = 'confession-card-exit-animation 0.3s forwards ease-out'
    confessions.style.opacity = '1';    

    this.feelingsSelected = [];    
    var feelingsSelected = document.getElementById('feeling-selected');
    while (feelingsSelected.hasChildNodes()) {
      feelingsSelected.removeChild(feelingsSelected.lastChild);
    }
  }  
}
