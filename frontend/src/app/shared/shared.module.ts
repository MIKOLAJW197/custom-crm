import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [],
  providers: [HttpService],
  exports: [HeaderComponent]
})
export class SharedModule { }
