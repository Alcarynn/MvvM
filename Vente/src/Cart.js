"use strict";
//
//https://code.visualstudio.com/docs/languages/typescript
//https://www.meziantou.net/2018/02/01/starting-a-typescript-project-with-visual-studio-code
Object.defineProperty(exports, "__esModule", { value: true });
var CartRow = /** @class */ (function () {
    function CartRow(media) {
        this._id = ++(CartRow.countId);
        this._media = media;
        this._quantite = 1;
    }
    Object.defineProperty(CartRow.prototype, "media", {
        get: function () {
            return this._media;
        },
        set: function (media) {
            this._media = media;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartRow.prototype, "quantite", {
        get: function () {
            return this._quantite;
        },
        set: function (quantite) {
            this._quantite = quantite;
        },
        enumerable: true,
        configurable: true
    });
    CartRow.prototype.increment = function () {
        this._quantite++;
    };
    CartRow.prototype.decrement = function () {
        if (this._quantite > 0) {
            this._quantite--;
        }
    };
    CartRow.countId = 0;
    return CartRow;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.cartRows = new Array();
    }
    Cart.prototype.add = function (media) {
        if (media != null) {
            if (this.cartRows.length != 0) {
                for (var ind in this.cartRows) {
                    if (this.cartRows[ind].media.id != media.id) {
                        var c = new CartRow(media); //to do
                        this.cartRows.push(c);
                    }
                    else {
                        this.cartRows[ind].increment();
                    }
                }
            }
            else {
                var c = new CartRow(media);
                this.cartRows.push(c);
            }
        }
    };
    Cart.prototype.remove = function (media) {
        if (media != null) {
            if (this.cartRows.length === 0) {
                throw new Error("tentative d'effacement d'un media dans un panier vide");
            }
            else {
                for (var ind = 0; ind < this.cartRows.length; ind++) {
                    if (this.cartRows[ind].media.id === media.id) {
                        this.cartRows[ind].decrement();
                        if (this.cartRows[ind].quantite === 0) {
                            this.cartRows.splice(ind, 1);
                        }
                    }
                    else {
                        throw new Error("tentative d'effacement d'un media qui n'existe pas");
                    }
                }
            }
        }
    };
    return Cart;
}());
exports.Cart = Cart;
