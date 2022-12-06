import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.page.html',
  styleUrls: ['./scroll-page.page.scss'],
})
export class ScrollPagePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
  list:any[] = Array(20);
  constructor() { }

  ngOnInit() {

  }
  onIonInfinite(event:any){
    console.log("Cargando siguientes...");

    if(this.list.length > 80){
      event.target.complete();
      this.infiniteScroll.disabled=true;
      return;
    }

    setTimeout(() =>{
      const newList = Array(20);
      this.list.push(...newList);

      event.target.complete();

    }, 500);
  }

}
