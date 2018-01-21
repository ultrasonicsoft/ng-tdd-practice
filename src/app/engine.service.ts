import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

@Injectable()
export class EngineService {

  constructor() { }

  getHousePower(){
    return 150;
  }

  public getName(){
    return 'Basic Engine';
  }
}
