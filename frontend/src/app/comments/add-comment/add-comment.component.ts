import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  @Output() commentAdded = new EventEmitter();

  commentText: any;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.httpService.addComment(articleId, this.commentText).subscribe(
      () => {
        this.commentAdded.emit();
        this.commentText = '';
        this.sharedService.openModal.next({
          isError: false,
          message: 'Comment added!',
        });
      },
      (error) =>
        this.sharedService.openModal.next({
          isError: true,
          message: error.message,
        })
    );
  }
}
