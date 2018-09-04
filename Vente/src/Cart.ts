//
//https://code.visualstudio.com/docs/languages/typescript
//https://www.meziantou.net/2018/02/01/starting-a-typescript-project-with-visual-studio-code

//public au point de vue package
import {Media} from './Media';


    class CartRow {
        
        private _id:number;
        private _media: Media;
        private _quantite:number;
        private static  countId=0;
        constructor(media:Media){
            this._id=++(CartRow.countId);
            this._media=media;
            this._quantite=1;
        }
        get media():Media{
            return this._media;
        }
        set media(media:Media){
            this._media=media;
        }
        get quantite():number{
            return this._quantite;
        }
        
        set quantite(quantite:number){
            this._quantite=quantite;
        }
        
        increment(){
            this._quantite++;
        }

        decrement(){
            if(this._quantite>0){
                this._quantite--;
            }
            
        }
    }
    
    export class Cart{
        cartRows:Array<CartRow>=new Array<CartRow>();
         add(media:Media){
            if(media!=null){
                if(this.cartRows.length!=0){
                    for(let ind in this.cartRows){
                        if(this.cartRows[ind].media.id!=media.id)
                        {
                            let c:CartRow=new CartRow(media);//to do
                            this.cartRows.push(c);
                        }
                        else{
                            this.cartRows[ind].increment();
                        }
                    }
                }
                else{
                    let c:CartRow=new CartRow(media);
                    this.cartRows.push(c);
                }   
                
            }
        }
    
        
       remove(media:Media){
            if(media!=null){
                if(this.cartRows.length===0){
                    throw new Error("tentative d'effacement d'un media dans un panier vide");
                }else{
                    for(let ind:number=0;ind<this.cartRows.length;ind++){
                        if(this.cartRows[ind].media.id===media.id)
                        {
                            this.cartRows[ind].decrement();
                            if(this.cartRows[ind].quantite===0)
                            {
                                
                                this.cartRows.splice(ind,1);
                            }
                        }
                        else{
                            throw new Error("tentative d'effacement d'un media qui n'existe pas");
                        }
                    }

                }
                
                
            }
            
        }
        
    }

