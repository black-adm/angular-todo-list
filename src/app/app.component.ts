import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minha lista de tarefas';

  constructor() {
    this.todos.push('Estudar angular');
    this.todos.push('Ir para academia');
    this.todos.push('Fazer a Alice dormir');
  }

  changeTitle() {
    this.title = 'Meus objetivos diários'
  }
}
