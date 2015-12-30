var c = null;
var Member = (function () {
    function Member() {
    }
    //hidden(target:Object, key: string) : void;
    Member.prototype.hidden = function (target, key, propDef) {
        c = target;
        if (propDef) {
            propDef.enumerable = false;
            console.log("set to hidden");
            return propDef;
        }
        throw new TypeError("Invalid member type for hidden attribute:" + key + " field is not supported");
    };
    Member.prototype.before = function (fn) {
        return function (target, key, propDef) {
            var orig = propDef.value;
            propDef.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                if (fn.call(this, args, key) !== false) {
                    return orig.apply(this, args);
                }
            };
            return propDef;
        };
    };
    Member.prototype.after = function (fn) {
        return function (target, key, propDef) {
            var orig = propDef.value;
            propDef.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var t = new Date().getTime();
                var retval = orig.apply(this, args);
                fn.call(this, retval, args, key, new Date().getTime() - t);
                return retval;
            };
            return propDef;
        };
    };
    return Member;
})();
exports.Member = Member;
//export const methodChain = (...args) => [args]
exports.member = new Member();
//# sourceMappingURL=Member.js.map