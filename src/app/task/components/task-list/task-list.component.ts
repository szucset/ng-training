import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public loading: boolean;
  public tasks: Task[];

  public constructor(public taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public addNewTask() {
    this.loading = true;
    const task = new Task();
    task.name = 'New Task';
    this.taskService.create(task).subscribe(
      () => this.loadTasks(),
      () => this.loading = false
    );
  }

  public loadTasks() {
    this.loading = true;
    this.taskService.load().subscribe(
      () => this.loading = false
    );
  }

  public removeTask(removableTask: Task) {
    this.taskService.tasks = this.taskService.tasks.filter(task => task !== removableTask);
  }

}
