import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  @Input() comments;
  @Output() newCommentAdded = new EventEmitter();

  isUserLogged: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
  }

  onNewCommentAdded(): void {
    this.newCommentAdded.emit();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
