import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Media} from '../vente/Media';
import * as vente from '../vente/vente';
import {BookService} from '../book.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
 media:Media;
  constructor( private route: ActivatedRoute,
              private heroService: BookService,
              private location: Location) { }

 getMedia(): void {
                const id = +this.route.snapshot.paramMap.get('id');
                this.heroService.getMedia(id)
                  .subscribe(media => this.media = media);
              }
  goBack(){
    this.location.back();
  }
  ngOnInit() {
    this.getMedia();
  }

}
