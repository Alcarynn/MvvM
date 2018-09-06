import { Injectable } from '@angular/core';
import {Media} from './vente/Media';
import {MEDIAS} from './vente/mock-medias';
import {Observable, of } from 'rxjs';
import {MessagesService} from "./messages.service";
@Injectable({
  providedIn: 'root'
})
export class BookService {

  getMedias():Observable<Media[]>{
    this.messagesService.add("fetch medias");
    return of(MEDIAS);

  }
  constructor(public messagesService:MessagesService) { }
}
