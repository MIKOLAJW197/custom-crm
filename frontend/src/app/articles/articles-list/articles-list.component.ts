import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getAllArticles()
      .subscribe((res: Array<any>) => (this.articles = res));
  }
}
