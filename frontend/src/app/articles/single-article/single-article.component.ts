import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss'],
})
export class SingleArticleComponent implements OnInit {
  @Input() article;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onArticleClick(): void {
    this.router.navigate([`/article/${this.article.id}`]);
  }
}
