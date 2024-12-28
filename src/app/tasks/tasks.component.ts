import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskFormData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) id!: string;

  constructor(private tasksService: TasksService) {}

  isDialogOpen = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onAddTask(data: TaskFormData) {
    this.tasksService.addTask(data, this.id);
  }

  toggleDialog() {
    this.isDialogOpen = !this.isDialogOpen;
  }
}
