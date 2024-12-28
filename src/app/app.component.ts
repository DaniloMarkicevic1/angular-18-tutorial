import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
})
export class AppComponent {
  users: User[] = DUMMY_USERS;

  selectedUser?: User;

  onSelectUser(id: string) {
    const user: User | undefined = DUMMY_USERS?.find((user) => user.id === id);

    if (user) {
      this.selectedUser = user;
    }
    if (!user) {
      this.selectedUser = { id: '-1', name: 'No User', avatar: '' };
    }
  }
}
