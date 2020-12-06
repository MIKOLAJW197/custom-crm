import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss'],
})
export class AdminArticleComponent implements OnInit {
  @Output() articleDeleted = new EventEmitter();
  @Input() article;

  constructor(
    private httpService: HttpService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onArticleClick(): void {
    this.router.navigate([`/article/${this.article.id}`]);
  }

  navigateToEdit(): void {
    this.router.navigate([`/article/edit/${this.article.id}`]);
  }

  onArticleDelete(): void {
    this.httpService.deleteArticle(this.article.id).subscribe(
      () => {
        this.articleDeleted.emit();
        this.sharedService.openModal.next({
          isError: false,
          message: 'Article deleted!',
        });
      },
      (error) => {
        this.sharedService.openModal.next({
          isError: true,
          message: error.message,
        });
      }
    );
  }
}
