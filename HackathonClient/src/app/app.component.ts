import { Component } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackathonClient';
  isFetching = false;
  loadedPosts = [];


  constructor(private postService: PostService) {}

  // onCreatePost(postData: Post) { 
  //   this.postService.createAndStorePost(postData.title, postData.content);
  // }

  // onFetchPosts() {
  //   // Send Http request
  //   this.isFetching = true;
  //   this.postService.fetchPosts().subscribe(posts => {
  //       this.isFetching = false;
  //       this.loadedPosts = posts;
  //   })
  // }

}