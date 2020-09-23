import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly PostsURL = 'https://localhost:44362/';
  constructor(private http: HttpClient) { }
  getPosts(){
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(this.PostsURL+"Posts");
  }
  searchPosts(SearchText){
    return this.http.get(this.PostsURL+"Posts/"+SearchText);
  }
}
