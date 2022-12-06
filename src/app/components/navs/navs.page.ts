import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { InputsPage } from '../inputs/inputs.page';
@Component({
  selector: 'app-navs',
  templateUrl: './navs.page.html',
  styleUrls: ['./navs.page.scss'],
})
export class NavsPage implements OnInit {

  constructor
  (
   private router:Router
    ) { }

  ngOnInit() {
  }

  redirect(){
   this.router.navigate([InputsPage])
  }

}
