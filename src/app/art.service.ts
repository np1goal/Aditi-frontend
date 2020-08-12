import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private webService: WebService) { }

  getArts() {
    return this.webService.get('arts');
  }
}
