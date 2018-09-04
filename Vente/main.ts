import {Book} from './src/Book'
import {Cart} from './src/Cart'
import {Media} from './src/Media'
function main(){
        
        let cart:Cart,b:Book,m:Media;
        cart=new Cart();
        b=new Book(1,"typescript pour les nulls",10,10);
        m=new Book(2,"typescript pour les nulls",20,10);
        cart.add(b);
        cart.add(b);
        console.log("\n ajout de 2 fois le meme element:");
        console.log(cart);
        console.log("\n suppression d'un element:");
        cart.remove(b);
        console.log(cart);
        console.log("\nsuppression d'un element:");
        cart.remove(b);
        console.log(cart);
      /*  console.log("\nsuppression d'un element:");
        cart.remove(b);
        console.log(cart);
        */
        console.log("\n ajout de 2 fois le meme element et d'un nouvel element:");
        cart.add(b);
        cart.add(b);
        cart.add(m);
        console.log(cart);
        console.log("total net "+cart.netTotalPrice());
}
main();
