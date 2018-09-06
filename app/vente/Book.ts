import {Media} from '../vente/media';


    export class Book extends Media{
        protected _nbPage:number;
        
       constructor(id:number,title:string,price:number){
            super(id,title,price);
        }
        get nbPage():number{
            return this._nbPage;
        }
        set nbPage(nbPage:number){
            this._nbPage=nbPage;
        }
         netPrice(): number{
            return this.price*1.05; 
        };
    }
