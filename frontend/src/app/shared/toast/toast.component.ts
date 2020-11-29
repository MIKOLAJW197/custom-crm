import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
declare const $;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnDestroy {
  sub: Subscription;
  isError = false;
  message = '';
  constructor(private sharedService: SharedService) {
    this.sub = this.sharedService.openModal.subscribe(
      ({ isError, message }) => {
        this.isError = isError;
        this.message = message;
        $('.toast').toast('show');

        setTimeout(() => $('.toast').toast('hide'), 5000);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
