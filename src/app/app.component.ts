import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public backgroundColor = '#fff';

  public SetColor(color: string) {
    this.backgroundColor = color;
  }
}
