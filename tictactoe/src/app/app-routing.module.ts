import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryGameComponent } from './games/memory/memory-game/memory-game.component';

import { BoardComponent } from './games/tictactoe/board/board.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'game/tictactoe', component: BoardComponent },
  { path: 'game/memory', component: MemoryGameComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
