import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if(texto === ''){
      return arreglo;
    }
    texto = texto.toLowerCase();

    return arreglo.filter( item => {
      console.log(item.title.toLowerCase().includes(texto));
      return item.title.toLowerCase().includes(texto);
     
      
    });
  }
}
