import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';



@NgModule({
    declarations: [

    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      TabMenuModule,
      MenuItem
        
    ],
    exports: [
      CommonModule,
      TabMenuModule,
      MenuItem

    ],
    providers: [

    ],
})

export class SharedModule {}