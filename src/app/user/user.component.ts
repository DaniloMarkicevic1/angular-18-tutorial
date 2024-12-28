// import { Component, computed, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);

//   // With signal
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//   // Without signal
//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser().avatar;
//   // }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }

import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
  output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user: User | undefined;
  @Input({ required: true }) selected: boolean | undefined;
  @Output() select = new EventEmitter<Select>(false);

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}

// SIGNAL INPUTS

// import { Component, Input, computed, input, signal } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   avatar = input.required<string>({});
//   name = input.required<string>();

//   select = output<Select>();

//   imagePath = computed(() => 'assets/users/' + this.avatar());

//   onSelectUser() {}
// }

type Select = string;
