import {Media} from './Media';

    export class Book extends Media{
        protected _nbPage:number;
        
       constructor(id:number,title:string,price:number,nbPage:number){
            super(id,title,price);
            this._nbPage=nbPage;
            
        }
        get nbPage():number{
            return this._nbPage;
        }
        set nbPage(nbPage:number){
            this._nbPage=nbPage;
        }

    }
