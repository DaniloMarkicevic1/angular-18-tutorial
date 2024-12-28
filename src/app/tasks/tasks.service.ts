import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { type TaskFormData } from './new-task/new-task.model';
import { ɵparseCookieValue } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const lsTasks = localStorage.getItem('tasks');

    if (lsTasks) {
      this.tasks = JSON.parse(lsTasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(data: TaskFormData, userId: string) {
    this.tasks.push({
      id: 't' + (this.tasks.length + 1).toString(),
      userId,
      ...data,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
