//// [recursiveBaseCheck4.ts]
class M<T> extends M<string> { }
(new M).blah;

//// [recursiveBaseCheck4.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var M = (function (_super) {
    __extends(M, _super);
    function M() {
        return _super.apply(this, arguments) || this;
    }
    return M;
}(M));
(new M).blah;
