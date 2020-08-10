import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {

  constructor(private webService: WebService) { }

  getConfessions() {
    return this.webService.get('confessions');
  }

  createConfessions(confession: string, feelings: string[], isApproved: boolean) {
    console.log('In Confession Service ' + confession + ' ' + feelings + ' ' + isApproved);
    return this.webService.post('confession', { confession, feelings, isApproved });
  }
}
