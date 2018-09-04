"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Media = /** @class */ (function () {
    function Media(id, title, price) {
        this._id = id;
        this._title = title;
        this._price = price;
    }
    Object.defineProperty(Media.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    return Media;
}());
exports.Media = Media;
