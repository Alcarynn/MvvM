import { Component, OnInit } from '@angular/core';
import * as Vente from "../vente/vente";
import {Media} from "../vente/Media"; 
import {MEDIAS} from "../vente/mock-medias";
import {BookService} from "../book.service";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  medias:Media[]=MEDIAS; 
  selectedMedia:Media;
  getMedias(){
    return this.bookService.getMedias().subscribe(medias=>this.medias=medias);
  }
  onSelect(media:Media){
    this.selectedMedia=media;
  }
  constructor(private bookService:BookService) { }

  ngOnInit() {
      this.getMedias();
  }

}
