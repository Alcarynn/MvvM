import {Media} from './Media';

    export class Cd extends Media{
        protected _nbTrack:number;
        
       constructor(id:number,title:string,price:number,nbTrack:number){
            super(id,title,price);
            this._nbTrack=nbTrack;
            
        }
        get nbTrack():number{
            return this._nbTrack;
        }
        set nbPage(nbTrack:number){
            this._nbTrack=nbTrack;
        }
         netPrice(): number{
            return this.price*1.20; 
        };
    }
