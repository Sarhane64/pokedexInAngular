import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeTypeColor',
})
export class PokeTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'normal':
        color = '#ff5733';
        break;
      case 'fighting':
        color = '#33a1fd';
        break;
      case 'flying':
        color = '#a74dff';
        break;
      case 'ground':
        color = '#ffc107';
        break;
      case 'poison':
        color = '#ff66b2';
        break;
      case 'rock':
        color = '#8b4513';
        break;
      case 'bug':
        color = '#7fff00';
        break;
      case 'ghost':
        color = '#4b0082';
        break;
      case 'steel':
        color = '#c0c0c0';
        break;
      case 'fire':
        color = '#ff4500';
        break;
      case 'water':
        color = '#1e90ff';
        break;
      case 'grass':
        color = '#32cd32';
        break;
      case 'electric':
        color = '#ffff00';
        break;
      case 'psychic':
        color = '#ff1493';
        break;
      case 'ice':
        color = '#add8e6';
        break;
      case 'dragon':
        color = '#800080';
        break;
      case 'dark':
        color = '#2f4f4f';
        break;
      case 'fairy':
        color = '#ff69b4';
        break;
      default:
        color = '#9E9E9E';
        break;
    }

    return color;
  }
}
