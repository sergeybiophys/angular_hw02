import {Component, Input, Output, EventEmitter, ViewChild} from "@angular/core";

export interface StudentInterface {
    id: number,
    firstName: string;
    lastName: string;
    birth: Date;
    mobile: string;
    email: string;
    group: string;
}

@Component({
    selector: 'students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['./students-list.component.scss'],
})

export class StudentsListComponent {
    title = 'Students Management';
    @Input() students: StudentInterface[] = [
        {
            id: 1,
            firstName: 'Vasya',
            lastName: 'Pupkin',
            birth: new Date(2000,10,10),
            mobile: '0500011222',
            email: 'vasya@mail.ru',
            group: 'VPU911'
        },
        {
            id: 2,
            firstName: 'Masha',
            lastName: 'Leonova',
            birth: new Date(1999,2,2),
            mobile: '0500022333',
            email: 'masha@mail.ru',
            group: 'VPU911'
        },
        {
            id: 3,
            firstName: 'Kolya',
            lastName: 'Terkin',
            birth: new Date(1998,11,11),
            mobile: '0670033224',
            email: 'kolya@gmail.com',
            group: 'VPU911'
        },
        {
            id: 4,
            firstName: 'Lena',
            lastName: 'Pyaterkina',
            birth: new Date(2001,5,15),
            mobile: '0630063205',
            email: 'lena@i.ua',
            group: 'VPU911'
        },
        {
            id: 5,
            firstName: 'Olya',
            lastName: 'Somova',
            birth: new Date(2002,3,13),
            mobile: '0992411568',
            email: 'olya@mail.ru',
            group: 'VPU911'
        }
    ];
}