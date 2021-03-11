import { Component } from '@angular/core';
import {SharedService} from '../app/Shared/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: SharedService){}

  public backgroundColor = '#fff';

  public SetColor(color: string) {
    this.backgroundColor = color;
  }
}
