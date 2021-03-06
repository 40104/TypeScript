//// [tests/cases/conformance/jsx/tsxDynamicTagName8.tsx] ////

//// [react.d.ts]

declare module 'react' {
	class Component<T, U> { }
}

//// [app.tsx]
import * as React from 'react';

export class Text extends React.Component<{}, {}> {
  _tagName: string = 'div';

  render() {
    return (
      <this._tagName> Hello world </this._tagName>
    );
  }
}

//// [app.jsx]
"use strict";
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
var React = require("react");
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super.apply(this, arguments) || this;
        _this._tagName = 'div';
        return _this;
    }
    Text.prototype.render = function () {
        return (<this._tagName> Hello world </this._tagName>);
    };
    return Text;
}(React.Component));
exports.Text = Text;
