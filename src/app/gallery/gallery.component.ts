import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import Art from '../models/art';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', '../styling/colors.css']
})
export class GalleryComponent implements OnInit {

  drawingsArtTab = true;
  confessionsArtTab = false;
  allArtWidth = 0;
  arts: Art[];
  drawingArtNames = [ "../assets/Drawings/05192019Aditi.jpg", 
                      "../assets/Drawings/06222018Aditi.jpg", 
                      "../assets/Drawings/06232018Aditi.jpg", 
                      "../assets/Drawings/07092017Aditi.jpg", 
                      "../assets/Drawings/07102017Aditi.jpg", 
                      "../assets/Drawings/07142017Aditi.jpg", 
                      "../assets/Drawings/07232017Aditi.jpg", 
                      "../assets/Drawings/08012017Aditi.jpg", 
                      "../assets/Drawings/08022017Aditi.jpg", 
                      "../assets/Drawings/08052017Aditi.jpg", 
                      "../assets/Drawings/08082017Aditi.jpg", 
                      "../assets/Drawings/08152018Aditi.jpg", 
                      "../assets/Drawings/08202018Aditi.jpg", 
                      "../assets/Drawings/08232018Aditi.jpg", 
                      "../assets/Drawings/12012017Aditi.jpg", 
                      "../assets/Drawings/12232018Aditi.jpg", 
                      "../assets/Drawings/12262019Aditi.jpg", 
                      "../assets/Drawings/110920191Aditi.jpg"
                    ];
  confessionArtNames = [ "../assets/Confessions/ifiknew.jpg", 
                         "../assets/Confessions/forgiving.jpg"
                        ]; 

  constructor(private artService: ArtService) { }

  ngOnInit() {
    this.artService.getArts()
      .subscribe((arts: Art[]) => {this.arts = arts; console.log(this.arts);});
  }

  getArtInfo(art: String, isConfessionArt: Boolean) {
    var artDescription = document.getElementById('art-description');
    var image = document.getElementById('image-art-description');
    var drawingArt = document.getElementById('drawing-art');
    var confessionArt = document.getElementById('confession-art');
    var artistName = document.getElementById('artist-name');
    var artStory = document.getElementById('art-story');
    
    if (isConfessionArt == false) {
      var artSplit = art.split("/");
      for(var i = 0; i < this.arts.length; i++) {
        if(this.arts[i].artNames.includes(artSplit[3])) {
          artistName.textContent = this.arts[i].artistName;
          if(this.arts[i].artStory.length != 0) {
            artStory.textContent = this.arts[i].artStory;
          } else {
            artStory.textContent = "No Story provided from Artist";
          }
        }
      }
      image.setAttribute('src',art.toString());
      artDescription.style.display = 'block'; 
      artDescription.style.animation = 'art-description-entry-animation 0.3s forwards ease-in';
      drawingArt.style.opacity = '0.3'; 
    } else {
      var artSplit = art.split("/");
      for(var i = 0; i < this.arts.length; i++) {
        if(this.arts[i].artNames.includes(artSplit[3])) {
          artistName.textContent = this.arts[i].artistName;
          artStory.textContent = this.arts[i].artConfession;
        }
      }
      artDescription.style.display = 'block'; 
      artDescription.style.animation = 'art-description-entry-animation 0.3s forwards ease-in';
      confessionArt.style.opacity = '0.3'; 
      document.getElementById('art-story-heading').textContent = 'Confession: ';
      document.getElementById('art-story').style.fontFamily = '\'Handlee\', cursive';
      image.setAttribute('src',art.toString());
    }
  }

  displayDrawings() {
    document.getElementById('drawing-toggle-button').style.color = 'var(--color5)';
    document.getElementById('drawing-toggle-button').style.backgroundColor = 'rgba(var(--color4rgb), 0.4)';
    if(window.innerWidth <= 650) {
      document.getElementById('drawing-art').style.display = 'grid';
    } else {
      document.getElementById('drawing-art').style.display = 'block';
    }
    document.getElementById('confessions-toggle-button').style.color = 'var(--color7)';
    document.getElementById('confessions-toggle-button').style.backgroundColor = 'rgba(var(--color4rgb))';
    document.getElementById('confession-art').style.display = 'none';
  }

  displayConfessions() {
    document.getElementById('confessions-toggle-button').style.color = 'var(--color5)';
    document.getElementById('confessions-toggle-button').style.backgroundColor = 'rgba(var(--color4rgb), 0.4)';
    if(window.innerWidth <= 650) {
      document.getElementById('confession-art').style.display = 'grid';
    } else  {
      document.getElementById('confession-art').style.display = 'block';
    }
    document.getElementById('drawing-toggle-button').style.color = 'var(--color7)';
    document.getElementById('drawing-toggle-button').style.backgroundColor = 'rgba(var(--color4rgb))';
    document.getElementById('drawing-art').style.display = 'none';
  }

  closeArtDescription() {
    var artDescription = document.getElementById('art-description');
    var drawingArt = document.getElementById('drawing-art');
    var confessionArt = document.getElementById('confession-art');

    artDescription.style.animation = 'art-description-exit-animation 0.3s forwards ease-out'
    setTimeout(function() {artDescription.style.display = 'none';}, 300);
    drawingArt.style.opacity = '1';  
    confessionArt.style.opacity = '1';    
  }

  rightArrow() {
    this.allArtWidth = this.allArtWidth + (document.getElementById('all-art').offsetWidth / document.documentElement.clientWidth *1000);
    document.getElementById('all-art').scroll({
      top:0,
      left: this.allArtWidth,
      behavior: 'smooth'
    });
  }

  leftArrow() {
    if (this.allArtWidth > 0) {
      this.allArtWidth = this.allArtWidth - (document.getElementById('all-art').offsetWidth / document.documentElement.clientWidth *1000);
      document.getElementById('all-art').scroll({
        top:0,
        left: this.allArtWidth,
        behavior: 'smooth'
      });
    }
  }
}
