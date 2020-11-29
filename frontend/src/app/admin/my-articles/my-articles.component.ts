import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss'],
})
export class MyArticlesComponent implements OnInit {
  articlesList = [];
  constructor(
    private httpService: HttpService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // this.getArticles();
  }

  getArticles(): void {
    this.httpService.getArticlesByUser().subscribe(
      (response) => {
        this.articlesList = response as Array<any>;
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
