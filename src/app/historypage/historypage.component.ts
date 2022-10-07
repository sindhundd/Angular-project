import { Component, OnInit } from '@angular/core';
import { history } from "../models/history";
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-historypage',
  templateUrl: './historypage.component.html',
  styleUrls: ['./historypage.component.css']
})
export class HistorypageComponent implements OnInit {
  imageHistory:history[];
  constructor( private historyService: HistoryService) {
  this.imageHistory = this.historyService.getKeywords();
  }

  ngOnInit(): void {
  }

}
