import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string
  day: string
  reminder: boolean
  showAddtask: boolean
  subsscription: Subscription

  constructor(private uiService: UiService) {
    this.subsscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddtask = value))
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}

