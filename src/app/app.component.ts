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
    this.load();
  }

  changeTitle() {
    this.titleIndex = (this.titleIndex + 1) % this.titlesList.length;
    this.title = [this.titlesList[this.titleIndex]];
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.tasks.length + 1;

    this.tasks.push(new Task(id, title, false))
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(task: Task) {
    const index = this.tasks.indexOf(task);
    const remove = index ? index !== -1 : this.tasks.splice(index, 1);
    this.save();
    return remove;
  }

  markDone(task: Task) {
    task.done = true;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', data);
  }

  load() {
    const items = localStorage.getItem('tasks');

    if (items) return this.tasks = JSON.parse(items);
    return this.tasks = [];
  }
}
