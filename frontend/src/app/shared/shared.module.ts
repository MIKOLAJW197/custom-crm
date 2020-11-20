import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [HeaderComponent, ToastComponent],
  imports: [],
  providers: [HttpService],
  exports: [HeaderComponent, ToastComponent]
})
export class SharedModule { }
