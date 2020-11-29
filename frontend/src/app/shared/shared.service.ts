import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  openModal = new Subject<{ isError: boolean; message: string }>();
  constructor() {}
}
