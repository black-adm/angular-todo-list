import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      title: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.tasks.push(new Task(1, 'Ir para a academia', false));
    this.tasks.push(new Task(2, 'Estudar o Angular.', false));
    this.tasks.push(new Task(3, 'Cortar o cabelo.', true));
    this.tasks.push(new Task(4, 'Terminar a tarefa de buscar dados da Api de Petshop.', false));
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
