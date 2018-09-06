
	 
	 export class Publisher {
		_id:number;
		_name:string;

		constructor(id:number,name:string){
			this._id=id;
			this._name=name;
			
		}
		get id():number{
				return this._id;
			}

		set id(id:number){
				this._id=id;
		}

		set name(name:string){
				this._name=name;
			}

		get name():string{
				return this._name;
		}
		
	}

	export interface IAuthor {
		id:number;
		firstName:string;
		lastName:string;
	}

	export interface IMedia{
		 _id: number;
		_title: string;
		_price:number;
		netPrice(): number;
		_authors:Array<IAuthor>;
		_publisher:Publisher;
   }
   
   
   export abstract class Media implements IMedia{
	   		 _id:number;
			 _title:string;
			 _price:number;
			 _authors:Array<IAuthor>=new Array<IAuthor>();
			 _publisher:Publisher=null;

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
		   get publisher():Publisher{
				return this._publisher;
		   }
		   set publisher(publisher:Publisher){
			   this._publisher=publisher;
		   }
		   get authors():Array<IAuthor>{
			return this._authors;
	  		}
	  	 	set authors(authors:Array<IAuthor>){
		 	  this._authors=authors;
	 	  	}

		   abstract netPrice(): number;
   }
   

	


