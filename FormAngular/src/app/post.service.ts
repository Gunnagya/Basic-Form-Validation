import {Injectable} from '@angular/core';

@Injectable()
export class PostService
{
  post=[

  ];
  constructor()
  {

  }
  addpost(value)
  {
    this.post.push(value);
  }
  getpost()
  {
    return this.post;
  }


}
