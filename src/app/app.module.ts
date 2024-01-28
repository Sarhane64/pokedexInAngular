import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http/index.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonservService } from './pokemon-service.service.js';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';

@NgModule({
  declarations: [AppComponent, PokelistComponent, PokeDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonservService],
  bootstrap: [AppComponent],
})
export class AppModule {}
