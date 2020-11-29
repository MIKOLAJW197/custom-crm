import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss'],
})
export class AdminArticleComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  onArticleDelete(): void {
    this.httpService.deleteArticle('').subscribe(
      () => {},
      (error) => {
        this.sharedService.openModal.next({
          isError: true,
          message: error.message,
        });
      }
    );
  }
}
