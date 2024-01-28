import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BackgroundtypePipe',
})
export class BackgroundtypePipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'normal':
        color = '#AAA67F';
        break;
      case 'fighting':
        color = '#C12239';
        break;
      case 'flying':
        color = '#A891EC';
        break;
      case 'ground':
        color = '#DEC16B';
        break;
      case 'poison':
        color = '#A43E9E';
        break;
      case 'rock':
        color = '#B69E31';
        break;
      case 'bug':
        color = '#A7B723';
        break;
      case 'ghost':
        color = '#70559B';
        break;
      case 'steel':
        color = '#B7B9D0';
        break;
      case 'fire':
        color = '#F57D31';
        break;
      case 'water':
        color = '#6493EB';
        break;
      case 'grass':
        color = '#74CB48';
        break;
      case 'electric':
        color = '#F9CF30';
        break;
      case 'psychic':
        color = '#FB5584';
        break;
      case 'ice':
        color = '#9AD6DF';
        break;
      case 'dragon':
        color = '#7037FF';
        break;
      case 'dark':
        color = '#75574C';
        break;
      case 'fairy':
        color = '#E69EAC';
        break;
      default:
        color = '#9E9E9E';
        break;
    }

    return color;
  }
}
