import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postarr=[];
  constructor(public postobj:PostService) {
  this.postarr= postobj .getpost();
  }

  ngOnInit() {
  }

}
