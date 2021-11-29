import {NgModule} from '@angular/core';
import { StudentComponent } from './student/student.component';
import { StudentsListComponent } from './students-list.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declaration: [
        StudentComponent,
        StudentsListComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [StudentsListComponent],
    providers: [],

})

export class StudentListModule {}