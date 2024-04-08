import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.inactivateUser(id);
  }
}
