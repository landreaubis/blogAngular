import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: Number;

  constructor() { }

  ngOnInit() {
  }

    getColor() {
        if (this.postLoveIts > 0)
            return 'green';
        else if (this.postLoveIts < 0)
            return 'red';
    }

}
