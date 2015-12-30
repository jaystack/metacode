var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/mocha/mocha.d.ts" />
var src_1 = require('../src');
describe("Attribute facase", function () {
    it("a", function () {
        var A = (function () {
            function A() {
            }
            Object.defineProperty(A.prototype, "f2", {
                get: function () { return this.f; },
                set: function (value) { this.f = value; },
                enumerable: true,
                configurable: true
            });
            A.prototype.doThisAndThat = function (a, b, c) {
                console.log("@!@!", this, arguments);
                return a + b;
            };
            __decorate([
                src_1.member.hidden, 
                __metadata('design:type', String)
            ], A.prototype, "f2", null);
            __decorate([
                src_1.member.hidden,
                src_1.member.before(function () { return false; }),
                src_1.member.before(function (args, name) { console.log(name, "@@@", this, args); }),
                src_1.member.after(function () { return console.log.bind(console); }), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Object, Object]), 
                __metadata('design:returntype', String)
            ], A.prototype, "doThisAndThat", null);
            return A;
        })();
        for (var i in (new A())) {
            console.log(i);
        }
        var j = new A();
        j.f2 = "alma";
        console.log(j);
        console.log("@@@", j.doThisAndThat(1, 2));
    });
});
//# sourceMappingURL=test.js.map