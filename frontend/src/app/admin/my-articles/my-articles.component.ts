import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss'],
})
export class MyArticlesComponent {
  @Input() articlesList = [];
  @Output() articleDeleted = new EventEmitter();

  constructor() {}

  onArticleDeleted(): void {
    this.articleDeleted.emit();
  }
}
