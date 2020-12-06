import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  loading = false;
  editArticleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editArticleForm = this.formBuilder.group({
      title: '',
      description: '',
      content: '',
    });
  }

  ngOnInit(): void {
    const articleId = this.route.snapshot.params.id;
    this.httpService.getArticleById(articleId).subscribe(
      ({title, description, content}: any) => {
        this.editArticleForm.reset({
          title,
          description,
          content,
        });
      }
    );
  }

  onSubmit(): void {
    const {
      value: { title, description, content },
    } = this.editArticleForm;
    const articleId = this.route.snapshot.params.id;
    this.loading = true;
    this.httpService.editArticle({ title, description, content }, articleId).subscribe(
      () => {
        this.loading = false;
        this.sharedService.openModal.next({
          isError: false,
          message: 'Article edited!',
        });
        this.router.navigate(['/admin']);
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