
import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'hw02-app';
// }

// export class TabMenuDemo {
    
//   items: MenuItem[];

//   ngOnInit() {
//       this.items = [
//           {label: 'Home', icon: 'pi pi-fw pi-home'},
//           {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
//           {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
//           {label: 'Documentation', icon: 'pi pi-fw pi-file'},
//           {label: 'Settings', icon: 'pi pi-fw pi-cog'}
//       ];
//   }
// }

export class AppComponent { 
        
  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
          {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
          {label: 'Documentation', icon: 'pi pi-fw pi-file'},
          {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];

      this.activeItem = this.items[0];
  }
}