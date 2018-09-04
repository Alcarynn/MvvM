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
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(id, title, price, nbTrack) {
        var _this = _super.call(this, id, title, price) || this;
        _this._nbTrack = nbTrack;
        return _this;
    }
    Object.defineProperty(Cd.prototype, "nbTrack", {
        get: function () {
            return this._nbTrack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cd.prototype, "nbPage", {
        set: function (nbTrack) {
            this._nbTrack = nbTrack;
        },
        enumerable: true,
        configurable: true
    });
    Cd.prototype.netPrice = function () {
        return this.price * 1.20;
    };
    ;
    return Cd;
}(Media_1.Media));
exports.Cd = Cd;
