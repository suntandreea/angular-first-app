import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable() // asta nu are nevoie sa fie app wide
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor(private counter: CounterService) {
  }

  activateUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveToActiveCounter = this.counter.increaseCounter(this.inactiveToActiveCounter);
    console.log('inactiveToActiveCounter: ', this.inactiveToActiveCounter);
  }

  inactivateUser(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeToInactiveCounter = this.counter.increaseCounter(this.activeToInactiveCounter);
    console.log('activeToInactiveCounter: ', this.activeToInactiveCounter);
  }
}
