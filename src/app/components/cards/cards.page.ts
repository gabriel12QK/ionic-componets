import { Component, OnInit } from '@angular/core';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';
import { nextTick } from 'process';
import {ServiceService} from 'src/app/service.service'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
    valid=false
    animes:any
    text: string = '';
     card=[
      {url:'https://img.unocero.com/2014/02/BIOSHOCK.jpg',titulo:'Bioshock',desc:'(2007) El box art de “Bioshock” es sencillo, al punto y efectivo: se trata de un Big Daddy (enemigo principal del juego).'},
      {url:'https://img.unocero.com/2014/02/VIBORDERLANDS-150x150.jpg',titulo:'Borderlands',desc:'(2009) “Borderlands” es uno de los juegos más visualmente extraños… y su box art es algo igual de perturbado y genial.'}
    ]
  constructor(private Anime:ServiceService) { }

  ngOnInit() {
  this.Anime.showAnime().subscribe({
    next:(res)=> {this.animes=res.data
     //console.log(this.animes);
     this.valid=true
    }

  })
  }
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

  buscar(event:any){
      console.log( event.detail.value);
      
        this.text= event.detail.value;

  }
}
