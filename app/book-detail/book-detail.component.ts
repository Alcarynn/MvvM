import { Component, OnInit, Input } from '@angular/core';
import {Media} from '../vente/Media';
import * as vente from '../vente/vente';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  @Input() media:Media;
  constructor() { }
  ngOnInit() {
  }

}
