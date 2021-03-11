
import { Injectable } from '@angular/core';
import { ColourList } from './Constants/ColourList';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getColours(): Promise<string[]> {
    return Promise.resolve(ColourList);
  }

}
