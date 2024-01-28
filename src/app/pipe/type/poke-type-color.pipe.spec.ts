import { PokeTypeColorPipe } from '../type/poke-type-color.pipe.js';

describe('PokeTypeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokeTypeColorPipe();
    expect(pipe).toBeTruthy();
  });
});
