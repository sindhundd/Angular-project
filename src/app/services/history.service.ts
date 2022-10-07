import { Injectable } from '@angular/core';
import { history } from "../models/history";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history:history;
  imageHistory:history[];
  constructor() {
    this.imageHistory=[];
  }
  setKeywords(historyWord:any){
    this.history = new history(historyWord);
    this.imageHistory.push(this.history);
  }
  getKeywords(){
    return this.imageHistory;
  }
}
