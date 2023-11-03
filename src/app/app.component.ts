import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: any[] = [];
  public titleIndex: number = 0;
  public titlesList: String[] = ['Minha lista de tarefas', 'Meus objetivos diários', 'Missões a serem concluídas'];
  public title: String[] = [this.titlesList[0]];

  constructor() {
    this.tasks.push('Estudar angular');
    this.tasks.push('Ir para academia');
    this.tasks.push('Fazer a Alice dormir');
  }

  changeTitle() {
    this.titleIndex = (this.titleIndex + 1) % this.titlesList.length;
    this.title = [this.titlesList[this.titleIndex]];
  }
}
