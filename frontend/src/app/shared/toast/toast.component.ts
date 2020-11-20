import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.toast').toast('show');
  }

}
