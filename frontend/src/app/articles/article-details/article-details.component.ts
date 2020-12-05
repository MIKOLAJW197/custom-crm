import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  articleDetails: any;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadArticle();
  }

  refreshArticle(): void {
    this.loadArticle();
  }

  private loadArticle(): void {
    const articleId = this.route.snapshot.params.id;
    this.httpService.getArticleById(articleId).subscribe((res) => {
      this.articleDetails = res;
    });
  }
}
