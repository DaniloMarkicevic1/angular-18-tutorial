import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);
  // constructor(private tasksService: TasksService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClickClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}

// Signals with 2way binding, only adds signal() to states;
// export class NewTaskComponent {
//   @Output() clickedOnClose = new EventEmitter<void>();

//   enteredTitle = signal('');
//   enteredSummary = signal('');
//   enteredDate = signal('');

//   onClickClose() {
//     this.clickedOnClose.emit();
//   }
// }
