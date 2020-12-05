import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  articlesList = [];

  constructor(
    private httpService: HttpService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }

  onArticleDeleted(): void {
    this.getArticles();
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
