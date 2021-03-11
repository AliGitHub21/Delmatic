import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public backgroundColor = '#fff';

  /**
   * Set color from color picker
   * @param {string} color
   */
 
  public setColor(color: string) {
    this.backgroundColor = color;
  }
}
