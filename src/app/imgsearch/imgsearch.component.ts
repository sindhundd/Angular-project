import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../services/searchservice.service';
import { HistoryService } from '../services/history.service';
import { history } from "../models/history";

@Component({
  selector: 'app-imgsearch',
  templateUrl: './imgsearch.component.html',
  styleUrls: ['./imgsearch.component.css']
})
export class ImgsearchComponent implements OnInit {
  name:string;
  images:any[];
  imageHistory:history[];
  //previewImage:any;
  constructor(private searchserviceService:SearchserviceService, private historyService: HistoryService ) {
    this.images=[];
    this.name="";
    this.getImage();
  }

  ngOnInit(): void {
    //this.imageHistory = this.historyService.getKeywords();
  }
  getImage(){
    var i;
    this.searchserviceService.getImage(this.name).subscribe((data)=>{
      this.images = data['hits'];
      console.log(data['hits']);
    })
   this.historyService.setKeywords(this.name);

  }
}
