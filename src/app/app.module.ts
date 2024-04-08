import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CockpitComponent} from './components/other/cockpit/cockpit.component';
import { GameControlComponent } from './components/other/game-control/game-control.component';
import { OddComponent } from './components/other/odd/odd.component';
import { EvenComponent } from './components/other/even/even.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';
import {ReactiveFormComponent} from './components/other/reactive-form/reactive-form.component';
import {ServerElementComponent} from './components/other/server-element/server-element.component';
import {ServerComponent} from './components/other/server/server.component';
import {ServersComponent} from './components/other/servers/servers.component';

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
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
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
