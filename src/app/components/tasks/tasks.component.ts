import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
// import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
      this.tasks = this.taskService.getTasks()
  }
}


