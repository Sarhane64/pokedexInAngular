import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component.js';
import { PokeDetailComponent } from './poke-detail/poke-detail.component.js';

const routes: Routes = [
  { path: 'pokemon', component: PokelistComponent },
  { path: 'pokemon/:id', component: PokeDetailComponent },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
