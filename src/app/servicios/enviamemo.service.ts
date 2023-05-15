//import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviamemoService {

  @Output() disparadorMemo: EventEmitter<any> = new EventEmitter<any>();

  }
