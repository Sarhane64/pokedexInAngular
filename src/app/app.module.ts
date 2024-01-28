import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonservService } from './pokemon-service.service.js';
import { PokedetailComponent } from './poke-detail/poke-detail.component.js';
import { PokeTypeColorPipe } from './pipe/poke-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokeTypeColorPipe,
    PokedetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonservService],
  bootstrap: [AppComponent],
})
export class AppModule {}
