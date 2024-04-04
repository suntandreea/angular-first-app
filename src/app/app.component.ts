import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  counters: number[] = [];

  onGameStarted(counter: number) {
  this.counters.push(counter);
  }
}
