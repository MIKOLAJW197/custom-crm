import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent implements OnInit {
  loading = false;
  newArticleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.newArticleForm = this.formBuilder.group({
      title: '',
      description: '',
      content: '',
    });
  }

  onSubmit(): void {
    const {
      value: { title, description, content },
    } = this.newArticleForm;
    this.loading = true;
    this.httpService.addArticle({ title, description, content }).subscribe(
      (response) => {
        this.loading = false;
        this.newArticleForm.reset({
          title: '',
          description: '',
          content: '',
        });
        this.sharedService.openModal.next({
          isError: false,
          message: 'New article added!',
        });
        // refresh list
      },
      (error) => {
        this.loading = false;
        this.sharedService.openModal.next({
          isError: true,
          message: error.message,
        });
      }
    );
  }
}
