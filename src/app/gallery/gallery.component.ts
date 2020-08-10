import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  drawingsArtTab = true;
  confessionsArtTab = false;
  allArtWidth = 0;

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

  constructor() { }

  ngOnInit() {

  }

  getArtInfo(art: String) {
    var artDescription = document.getElementById('art-description');
    var image = document.getElementById('image-art-description');
    var drawingArt = document.getElementById('drawing-art');
    var confessionArt = document.getElementById('confession-art');
    
    

    artDescription.style.display = 'block'; 
    artDescription.style.animation = 'art-description-entry-animation 0.3s forwards ease-in';
    drawingArt.style.opacity = '0.3'; 
    confessionArt.style.opacity = '0.3'; 
    image.setAttribute('src',art.toString());
    var artSplit = art.split("/");
  }

  closeArtDescription() {
    var artDescription = document.getElementById('art-description');
    var drawingArt = document.getElementById('drawing-art');
    var confessionArt = document.getElementById('confession-art');

    artDescription.style.animation = 'art-description-exit-animation 0.3s forwards ease-out'
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
