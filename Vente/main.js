"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./src/Book");
var Cart_1 = require("./src/Cart");
function main() {
    var cart, b, m;
    cart = new Cart_1.Cart();
    b = new Book_1.Book(1, "typescript pour les nulls", 10, 10);
    m = new Book_1.Book(2, "typescript pour les nulls", 20, 10);
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
    console.log("total net " + cart.netTotalPrice());
}
main();
