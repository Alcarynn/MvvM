import { Component, OnInit } from '@angular/core';
import {Media} from "../vente/Media"; 
import { BookService } from '../book.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  medias:Media[]; 
  
  
  getMedias(){
    return this.bookService.getMedias().subscribe(medias=>this.medias=medias.slice(1, 5));
  }
 
  constructor(private bookService:BookService) { }

  ngOnInit() {
      this.getMedias();
  }

}
