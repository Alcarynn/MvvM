import { Component, OnInit } from '@angular/core';
import * as Vente from "../vente/vente";
import {Media} from "../vente/Media"; 

import {BookService} from "../book.service";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  medias:Media[]; 
  
  getMedias(){
    return this.bookService.getMedias().subscribe(medias=>this.medias=medias);
  }
 
  constructor(private bookService:BookService) { }

  ngOnInit() {
      this.getMedias();
  }

}
