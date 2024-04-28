
import { Component } from '@angular/core';

interface Task {
  id: number;
  name: string;
  content: string;
  status: 'active' | 'cloturer';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks: Task[] = [];
  newTaskName = '';
  newTaskContent = '';


  // Fonction pour ajouter une tache

  addTask() {
    const task: Task = {
      id: this.tasks.length + 1,
      name: this.newTaskName,
      content: this.newTaskContent,
      status: 'active'
    };
    this.tasks.push(task);
    this.newTaskName = '';
    this.newTaskContent = '';
  }


  // Fonction pour cloturer une tache
  closeTask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = 'cloturer';
    }
  }
}
