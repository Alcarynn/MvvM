import {Media} from '../vente/media'

    export class Cd extends Media{
        protected _nbTrack:number;
        
       constructor(id:number,title:string,price:number){
            super(id,title,price);
           
            
        }
        set nbTrack(nbTrack:number){
            this._nbTrack=nbTrack;
        }
        get nbTrack():number{
            return this._nbTrack;
        }

         netPrice(): number{
            return this.price*1.20; 
        };
    }
