import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  constructor(public data:PostsService) { }
  searches:string[]
  searchPost(SearchText) {
      console.log(SearchText);
      this.data.searchPosts(SearchText).subscribe(data=>{
        this.searches = data as string[];
        console.log(this.searches);
      });  
  }
}
