import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector:'[app-root]' Attribute Selector
  //selector:'.app-root' Class Selector
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`h3{
    color:red 
  }`,`h3{color:blue}`]
})
export class AppComponent {
  title = 'my-first-app';
  name = 'sahil';
}
