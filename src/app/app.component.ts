import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: Task[] = [];
  public titleIndex: number = 0;
  public titlesList: String[] = [
    'Minha lista de tarefas',
    'Meus objetivos diários',
    'Missões a serem concluídas',
    'Metas para finalizar'
  ];
  public title: String[] = [this.titlesList[0]];

  constructor() {
    this.tasks.push(new Task(1, 'Ir para a academia', false));
    this.tasks.push(new Task(2, 'Estudar o Angular.', false));
    this.tasks.push(new Task(3, 'Cortar o cabelo.', true));
  }

  changeTitle() {
    this.titleIndex = (this.titleIndex + 1) % this.titlesList.length;
    this.title = [this.titlesList[this.titleIndex]];
  }

  remove(task: Task) {
    const index = this.tasks.indexOf(task);
    const remove = index ? index !== -1 : this.tasks.splice(index, 1);
    return remove;
  }

  markDone(task: Task) {
      task.done = true;
  }
}
