import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent} from './app.component';
import { TabMenuDemo } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TabMenuDemo
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

