import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor(public data:PostsService) { }
  posts:string[]
  ngOnInit(): void {
    this.data.getPosts().subscribe(data=>{
      this.posts = data as string[];
      console.log(this.posts);
    });
  }

}
