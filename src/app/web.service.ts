import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) { 
    // this.ROOT_URL = "http://localhost:3100/";
  }

  get(uri: String) {
    return this.http.get(`${uri}`);
  }

  post(uri: String, payload: object) {
    console.log("Coming to post")
    return this.http.post(`${uri}`, payload);
  }

  put(uri: String, payload: object) {
    return this.http.get(`${uri}`, payload);
  }

  delete(uri: String) {
    return this.http.get(`${uri}`);
  }
}
