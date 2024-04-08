import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.activateUser(id);
  }
}
