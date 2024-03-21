import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }
  `]
})

export class ServerComponent {
  serverId: number = 0;
  serverStatus: string = 'offline';

  constructor() {
    this.serverId = Math.floor(Math.random() * 100000);
    this.serverStatus = this.serverId > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
