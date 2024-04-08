import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  // @ViewChild('f') formData: NgForm;
  // subscriptions = ['basic', 'advanced', 'pro'];
  // default = "basic";
  //
  // onSubmit() {
  //   console.log(this.formData.value);
  //   this.formData.reset();
  // };

  // serverElements = [{type: 'server', name: 'Test Server', content: 'basdasdas'}];
  //
  // onServerAdded(serverData: {serverName: string; serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  //
  // onBlueprintAdded(blueprintData: {serverName: string; serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }

  // counters: number[] = [];
  //
  // onGameStarted(counter: number) {
  // this.counters.push(counter);
  // }

  activeUsers = [];
  inactiveUsers = [];

  constructor(private users: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.users.activeUsers;
    this.inactiveUsers = this.users.inactiveUsers;
  }
}
