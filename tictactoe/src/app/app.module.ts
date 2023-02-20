import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './games/tictactoe/board/board.component';
import { SquareComponent } from './games/tictactoe/square/square.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

import { MemoryBoardComponent } from './games/memory/memory-board/memory-board.component';
import { MemoryCardComponent } from './games/memory/memory-card/memory-card.component';
import { MemoryGameComponent } from './games/memory/memory-game/memory-game.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    LandingPageComponent,
    MemoryBoardComponent,
    MemoryCardComponent,
    MemoryGameComponent
  ],
  imports: [
    // Angular stuff
    FormsModule,
    BrowserAnimationsModule,
    // PrimeNG stuff
    ButtonModule,
    CardModule,
    DropdownModule,
    // App stuff
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
