import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ServerComponent} from '../other/server/server.component';
import { ServersComponent } from '../other/servers/servers.component';
import { ReactiveFormComponent } from '../other/reactive-form/reactive-form.component';
import { CockpitComponent } from '../other/cockpit/cockpit.component';
import { ServerElementComponent } from '../other/server-element/server-element.component';
import { GameControlComponent } from './components/game-control/game-control.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ReactiveFormComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
