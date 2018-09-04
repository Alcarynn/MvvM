


	export interface IMedia{
		_id: number;
		_title: string;
		_price:number;
	   
   }
   
   
   export abstract class Media implements IMedia{
	   		_id:number;
			_title:string;
			_price:number;

		   constructor(id:number,title:string,price:number){
			   this._id=id;
			   this._title=title;
			   this._price=price;
			   
		   }
		   get id():number{
			   return this._id;
		   }
		   set id(id:number){
			   this._id=id;
		   }
		   get title():string{
			   return this._title;
		   }
		   set title(title:string){
			   this._title=title;
		   }
		   
		   get price():number{
			   return this._price;
			   
		   }           
		   set price(price:number){
			   this._price=price;
		   }

	   
   }
   
  
	
	


