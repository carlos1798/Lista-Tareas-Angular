import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  private list = new TodoList("Carlos", [
    new TodoItem("Aprender Spring", false),
    new TodoItem("Aprender angular", false),
    new TodoItem("Estudiar Hibernate ", true),
  ]);
  get username(): string{
    return this.list.user;
  }
  get itemCount(): number{
    return this.list.Items.filter(item => !item.complete).length;
  }
  get items(): readonly TodoItem[] {
    return this.list.Items.filter(item => this.showComplete||!item.complete);
  }
  addItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
    }
  }
  showComplete: boolean = false;
}
