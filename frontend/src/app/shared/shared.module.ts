import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';
import { ToastComponent } from './toast/toast.component';
import { SharedService } from './shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, ToastComponent],
  imports: [CommonModule, RouterModule],
  providers: [HttpService, SharedService],
  exports: [HeaderComponent, ToastComponent],
})
export class SharedModule {}
