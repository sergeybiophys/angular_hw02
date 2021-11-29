import {Component, Input, Output, EventEmitter} from "@angular/core";
import { StudentInterface } from "../students-list.component";

@Component({
    selector:'student',
    templateUrl:'./student.component.html',
    styleUrls: ['./student.component.scss']
})

export class StudentComponent {
    @Input() student: StudentInterface = {

        id: 0,
        firstName: '',
        lastName: '',
        birth: new Date(0,0,0),
        mobile: '',
        email: '',
        group: ''
    }
}