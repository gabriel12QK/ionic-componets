import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Buttons', url: 'buttons', icon: 'add-circle' },
    { title: 'Badge', url: 'badge', icon: 'list-circle' },
    { title: 'Cards', url: 'cards', icon: 'card' },
    { title: 'Inputs', url: 'inputs', icon: 'text' },
    { title: 'Scroll', url: 'scroll-page', icon: 'infinite' },
    { title: 'Modal', url: 'modales', icon: 'copy' },
    { title: 'Reorder', url: 'reorder', icon: 'pizza' },
    { title: 'Navs', url: 'navs', icon: 'layers' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
