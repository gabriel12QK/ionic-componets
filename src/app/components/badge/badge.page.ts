import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {
  follow=0
  notify=0
  likes=0
  stars=0
  complete=0
  warnings=0
  constructor() { }

  

  ngOnInit() {
  }
add(id:string){
  switch (id) {
    case 'F':
          this.follow++
      break;
      case 'N':
          this.notify++
      break;
      case 'L':
          this.likes++
      break;
      case 'S':
          this.stars++
      break;
      case 'C':
          this.complete++
      break;
      case 'W':
          this.warnings++
      break;
  
    default:
      break;
  }

}

}
