import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  projectorWindow = null;

  startFullscreen () {
    this.projectorWindow = window.open("projector/index.html");
  }
}
