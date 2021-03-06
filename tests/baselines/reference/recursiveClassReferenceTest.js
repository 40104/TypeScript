//// [recursiveClassReferenceTest.ts]
// Scenario 1: Test reqursive function call with "this" parameter
// Scenario 2: Test recursive function call with cast and "this" parameter



declare module Sample.Thing {

	export interface IWidget {
		getDomNode(): any;
		destroy();
		gar(runner:(widget:Sample.Thing.IWidget)=>any):any;
	}

	export interface ICodeThing {
  
  		getDomNode(): Element;
		
		addWidget(widgetId:string, widget:IWidget);

		
		focus(); 
		
		//addWidget(widget: Sample.Thing.Widgets.IWidget);
	}

	export interface IAction {
		run(Thing:ICodeThing):boolean;
		getId():string;
	}	
}

module Sample.Actions.Thing.Find {
	export class StartFindAction implements Sample.Thing.IAction {
		
		public getId() { return "yo"; }
		
		public run(Thing:Sample.Thing.ICodeThing):boolean {

			return true;
		}
	}
}

module Sample.Thing.Widgets {
	export class FindWidget implements Sample.Thing.IWidget {

		public gar(runner:(widget:Sample.Thing.IWidget)=>any) { if (true) {return runner(this);}}
			
		private domNode:any = null;
		constructor(private codeThing: Sample.Thing.ICodeThing) {
		    // scenario 1
		    codeThing.addWidget("addWidget", this);
		}
		
		public getDomNode() {
			return domNode;
		}
		
		public destroy() {

		}

	}
}

interface IMode { getInitialState(): IState;} 
class AbstractMode implements IMode { public getInitialState(): IState { return null;} }

interface IState {}

interface Window {
    opener: Window;
}
declare var self: Window;

module Sample.Thing.Languages.PlainText {
	
	export class State implements IState {		
        constructor(private mode: IMode) { }
		public clone():IState {
			return this;
		}

		public equals(other:IState):boolean {
			return this === other;
		}
		
		public getMode(): IMode { return mode; }
	}
	
	export class Mode extends AbstractMode {

		// scenario 2
		public getInitialState(): IState {
			return new State(self);
		}


	}
}



//// [recursiveClassReferenceTest.js]
// Scenario 1: Test reqursive function call with "this" parameter
// Scenario 2: Test recursive function call with cast and "this" parameter
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
var Sample;
(function (Sample) {
    var Actions;
    (function (Actions) {
        var Thing;
        (function (Thing_1) {
            var Find;
            (function (Find) {
                var StartFindAction = (function () {
                    function StartFindAction() {
                    }
                    StartFindAction.prototype.getId = function () { return "yo"; };
                    StartFindAction.prototype.run = function (Thing) {
                        return true;
                    };
                    return StartFindAction;
                }());
                Find.StartFindAction = StartFindAction;
            })(Find = Thing_1.Find || (Thing_1.Find = {}));
        })(Thing = Actions.Thing || (Actions.Thing = {}));
    })(Actions = Sample.Actions || (Sample.Actions = {}));
})(Sample || (Sample = {}));
(function (Sample) {
    var Thing;
    (function (Thing) {
        var Widgets;
        (function (Widgets) {
            var FindWidget = (function () {
                function FindWidget(codeThing) {
                    this.codeThing = codeThing;
                    this.domNode = null;
                    // scenario 1
                    codeThing.addWidget("addWidget", this);
                }
                FindWidget.prototype.gar = function (runner) { if (true) {
                    return runner(this);
                } };
                FindWidget.prototype.getDomNode = function () {
                    return domNode;
                };
                FindWidget.prototype.destroy = function () {
                };
                return FindWidget;
            }());
            Widgets.FindWidget = FindWidget;
        })(Widgets = Thing.Widgets || (Thing.Widgets = {}));
    })(Thing = Sample.Thing || (Sample.Thing = {}));
})(Sample || (Sample = {}));
var AbstractMode = (function () {
    function AbstractMode() {
    }
    AbstractMode.prototype.getInitialState = function () { return null; };
    return AbstractMode;
}());
(function (Sample) {
    var Thing;
    (function (Thing) {
        var Languages;
        (function (Languages) {
            var PlainText;
            (function (PlainText) {
                var State = (function () {
                    function State(mode) {
                        this.mode = mode;
                    }
                    State.prototype.clone = function () {
                        return this;
                    };
                    State.prototype.equals = function (other) {
                        return this === other;
                    };
                    State.prototype.getMode = function () { return mode; };
                    return State;
                }());
                PlainText.State = State;
                var Mode = (function (_super) {
                    __extends(Mode, _super);
                    function Mode() {
                        return _super.apply(this, arguments) || this;
                    }
                    // scenario 2
                    Mode.prototype.getInitialState = function () {
                        return new State(self);
                    };
                    return Mode;
                }(AbstractMode));
                PlainText.Mode = Mode;
            })(PlainText = Languages.PlainText || (Languages.PlainText = {}));
        })(Languages = Thing.Languages || (Thing.Languages = {}));
    })(Thing = Sample.Thing || (Sample.Thing = {}));
})(Sample || (Sample = {}));
//# sourceMappingURL=recursiveClassReferenceTest.js.map