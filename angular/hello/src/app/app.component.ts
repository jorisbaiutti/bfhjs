import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello Application';
  public name: string;
  public greeting: string;

  public sayHello() {
    this.greeting = 'Hello ' + this.name + '!';
    this.name = '';
  }
}
