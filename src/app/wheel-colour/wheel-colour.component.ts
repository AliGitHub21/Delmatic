import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import {SharedService} from '../Shared/shared.service'

@Component({
  selector: 'app-wheel-colour',
  templateUrl: './wheel-colour.component.html',
  styleUrls: ['./wheel-colour.component.scss']
})
export class WheelColourComponent implements OnInit {

  @Input() color: string = '';
  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  public heading:string = 'Select a colour';
  public show = false;
  public colourList:string[]=[];


  constructor(public sharedService: SharedService) { }


  ngOnInit() {
    this.getColourList();
  }

  getColourList(): void {
    this.sharedService.getColours().then(colourList => this.colourList = colourList);
  }

  /**
   * Change color from default colors
   * @param {string} color
   */
  public changeColor(color: string): void {
    this.color = color;
    this.event.emit(this.color);
    this.show = true;
    this.heading = 'Selected Colour'
  }

}
