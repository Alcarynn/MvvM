"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Media_1 = require("./Media");
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, price, nbPage) {
        var _this = _super.call(this, id, title, price) || this;
        _this._nbPage = nbPage;
        return _this;
    }
    Object.defineProperty(Book.prototype, "nbPage", {
        get: function () {
            return this._nbPage;
        },
        set: function (nbPage) {
            this._nbPage = nbPage;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}(Media_1.Media));
exports.Book = Book;
