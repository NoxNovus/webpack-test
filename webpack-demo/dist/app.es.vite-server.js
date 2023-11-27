import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=b604e048"; const Oe = __vite__cjsImport0_react.__esModule ? __vite__cjsImport0_react.default : __vite__cjsImport0_react;
var K = { exports: {} }, j = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function or() {
  if (me)
    return j;
  me = 1;
  var N = Oe, S = Symbol.for("react.element"), V = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, D = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: true, ref: true, __self: true, __source: true };
  function P(h, l, m) {
    var v, g = {}, y = null, A = null;
    m !== void 0 && (y = "" + m), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (A = l.ref);
    for (v in l)
      _.call(l, v) && !F.hasOwnProperty(v) && (g[v] = l[v]);
    if (h && h.defaultProps)
      for (v in l = h.defaultProps, l)
        g[v] === void 0 && (g[v] = l[v]);
    return { $$typeof: S, type: h, key: y, ref: A, props: g, _owner: D.current };
  }
  return j.Fragment = V, j.jsx = P, j.jsxs = P, j;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function ur() {
  return Te || (Te = 1, function() {
    var N = Oe, S = Symbol.for("react.element"), V = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), h = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), X = Symbol.iterator, Ce = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var T = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var we = false, xe = false, je = false, ke = false, De = false, Z;
    Z = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === F || De || e === D || e === m || e === v || ke || e === A || we || xe || je || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === P || e.$$typeof === h || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case V:
          return "Portal";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Q(r) + ".Consumer";
          case P:
            var t = e;
            return Q(t._context) + ".Provider";
          case l:
            return Ae(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case y: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, w = 0, ee, re, te, ne, ae, ie, oe;
    function ue() {
    }
    ue.__reactDisabledLog = true;
    function Ie() {
      {
        if (w === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, ie = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: true,
            enumerable: true,
            value: ue,
            writable: true
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        w++;
      }
    }
    function $e() {
      {
        if (w--, w === 0) {
          var e = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: ee
            }),
            info: R({}, e, {
              value: re
            }),
            warn: R({}, e, {
              value: te
            }),
            error: R({}, e, {
              value: ne
            }),
            group: R({}, e, {
              value: ae
            }),
            groupCollapsed: R({}, e, {
              value: ie
            }),
            groupEnd: R({}, e, {
              value: oe
            })
          });
        }
        w < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = T.ReactCurrentDispatcher, U;
    function I(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = false, $;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new We();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = true;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, Ie();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, f = d.length - 1; s >= 1 && f >= 0 && a[s] !== d[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== d[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== d[f]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, p), p;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = false, M.current = u, $e(), Error.prepareStackTrace = o;
      }
      var C = e ? e.displayName || e.name : "", _e = C ? I(C) : "";
      return typeof e == "function" && $.set(e, _e), _e;
    }
    function Ye(e, r, t) {
      return se(e, false);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Le(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case m:
          return I("Suspense");
        case v:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ye(e.render);
          case g:
            return W(e.type, r, t);
          case y: {
            var n = e, o = n._payload, u = n._init;
            try {
              return W(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, fe = {}, le = T.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(Y);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), L(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = true, L(o), c("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Me(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return ce(e), false;
      } catch {
        return true;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function de(e) {
      if (Ue(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), ce(e);
    }
    var x = T.ReactCurrentOwner, Be = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    }, ve, pe, J;
    J = {};
    function qe(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return false;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return false;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && x.current && r && x.current.stateNode !== r) {
        var t = E(x.current.type);
        J[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(x.current.type), e.ref), J[t] = true);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          ve || (ve = true, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = true, Object.defineProperty(e, "key", {
          get: t,
          configurable: true
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = true, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = true, Object.defineProperty(e, "ref", {
          get: t,
          configurable: true
        });
      }
    }
    var Ke = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: S,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }), Object.defineProperty(a, "_self", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (de(t), a = "" + t), Je(r) && (de(r.key), a = "" + r.key), qe(r) && (d = r.ref, Ge(r, o));
        for (u in r)
          Y.call(r, u) && !Be.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(i, f), d && He(i, f);
        }
        return Ke(e, a, d, o, n, x.current, i);
      }
    }
    var G = T.ReactCurrentOwner, ge = T.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = false;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === S;
    }
    function Ee() {
      {
        if (G.current) {
          var e = E(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function Qe(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function he(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = true;
        var t = Qe(r);
        if (be[t])
          return;
        be[t] = true;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + E(e._owner.type) + "."), O(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && he(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = true);
        else if (e) {
          var o = Se(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              H(i.value) && he(i.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = true;
          var o = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function Re(e, r, t, n, o, u) {
      {
        var i = Fe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = Ze(o);
          d ? a += d : a += Ee();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === S ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Xe(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (q(p)) {
                for (var C = 0; C < p.length; C++)
                  ye(p[C], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(p, e);
        }
        return e === _ ? rr(f) : er(f), f;
      }
    }
    function tr(e, r, t) {
      return Re(e, r, t, true);
    }
    function nr(e, r, t) {
      return Re(e, r, t, false);
    }
    var ar = nr, ir = tr;
    k.Fragment = _, k.jsx = ar, k.jsxs = ir;
  }()), k;
}
false ? K.exports = or() : K.exports = ur();
var sr = K.exports;
const lr = () => /* @__PURE__ */ sr.jsx("div", { children: "Hello, React and TypeScript!" });
export {
  lr as default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2UgZnJvbSBcInJlYWN0XCI7XG52YXIgSyA9IHsgZXhwb3J0czoge30gfSwgaiA9IHt9O1xuLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xudmFyIG1lO1xuZnVuY3Rpb24gb3IoKSB7XG4gIGlmIChtZSlcbiAgICByZXR1cm4gajtcbiAgbWUgPSAxO1xuICB2YXIgTiA9IE9lLCBTID0gU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksIFYgPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksIF8gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LCBEID0gTi5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRC5SZWFjdEN1cnJlbnRPd25lciwgRiA9IHsga2V5OiAhMCwgcmVmOiAhMCwgX19zZWxmOiAhMCwgX19zb3VyY2U6ICEwIH07XG4gIGZ1bmN0aW9uIFAoaCwgbCwgbSkge1xuICAgIHZhciB2LCBnID0ge30sIHkgPSBudWxsLCBBID0gbnVsbDtcbiAgICBtICE9PSB2b2lkIDAgJiYgKHkgPSBcIlwiICsgbSksIGwua2V5ICE9PSB2b2lkIDAgJiYgKHkgPSBcIlwiICsgbC5rZXkpLCBsLnJlZiAhPT0gdm9pZCAwICYmIChBID0gbC5yZWYpO1xuICAgIGZvciAodiBpbiBsKVxuICAgICAgXy5jYWxsKGwsIHYpICYmICFGLmhhc093blByb3BlcnR5KHYpICYmIChnW3ZdID0gbFt2XSk7XG4gICAgaWYgKGggJiYgaC5kZWZhdWx0UHJvcHMpXG4gICAgICBmb3IgKHYgaW4gbCA9IGguZGVmYXVsdFByb3BzLCBsKVxuICAgICAgICBnW3ZdID09PSB2b2lkIDAgJiYgKGdbdl0gPSBsW3ZdKTtcbiAgICByZXR1cm4geyAkJHR5cGVvZjogUywgdHlwZTogaCwga2V5OiB5LCByZWY6IEEsIHByb3BzOiBnLCBfb3duZXI6IEQuY3VycmVudCB9O1xuICB9XG4gIHJldHVybiBqLkZyYWdtZW50ID0gViwgai5qc3ggPSBQLCBqLmpzeHMgPSBQLCBqO1xufVxudmFyIGsgPSB7fTtcbi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbnZhciBUZTtcbmZ1bmN0aW9uIHVyKCkge1xuICByZXR1cm4gVGUgfHwgKFRlID0gMSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZ1bmN0aW9uKCkge1xuICAgIHZhciBOID0gT2UsIFMgPSBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSwgViA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksIF8gPSBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksIEQgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIiksIEYgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksIFAgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksIGggPSBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSwgbCA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSwgbSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSwgdiA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLCBnID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksIHkgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSwgQSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIiksIFggPSBTeW1ib2wuaXRlcmF0b3IsIENlID0gXCJAQGl0ZXJhdG9yXCI7XG4gICAgZnVuY3Rpb24gU2UoZSkge1xuICAgICAgaWYgKGUgPT09IG51bGwgfHwgdHlwZW9mIGUgIT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgciA9IFggJiYgZVtYXSB8fCBlW0NlXTtcbiAgICAgIHJldHVybiB0eXBlb2YgciA9PSBcImZ1bmN0aW9uXCIgPyByIDogbnVsbDtcbiAgICB9XG4gICAgdmFyIFQgPSBOLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAge1xuICAgICAgICBmb3IgKHZhciByID0gYXJndW1lbnRzLmxlbmd0aCwgdCA9IG5ldyBBcnJheShyID4gMSA/IHIgLSAxIDogMCksIG4gPSAxOyBuIDwgcjsgbisrKVxuICAgICAgICAgIHRbbiAtIDFdID0gYXJndW1lbnRzW25dO1xuICAgICAgICBQZShcImVycm9yXCIsIGUsIHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBQZShlLCByLCB0KSB7XG4gICAgICB7XG4gICAgICAgIHZhciBuID0gVC5SZWFjdERlYnVnQ3VycmVudEZyYW1lLCBvID0gbi5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICAgIG8gIT09IFwiXCIgJiYgKHIgKz0gXCIlc1wiLCB0ID0gdC5jb25jYXQoW29dKSk7XG4gICAgICAgIHZhciB1ID0gdC5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcoaSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1LnVuc2hpZnQoXCJXYXJuaW5nOiBcIiArIHIpLCBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2VdLCBjb25zb2xlLCB1KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHdlID0gITEsIHhlID0gITEsIGplID0gITEsIGtlID0gITEsIERlID0gITEsIFo7XG4gICAgWiA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tb2R1bGUucmVmZXJlbmNlXCIpO1xuICAgIGZ1bmN0aW9uIEZlKGUpIHtcbiAgICAgIHJldHVybiAhISh0eXBlb2YgZSA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBlID09IFwiZnVuY3Rpb25cIiB8fCBlID09PSBfIHx8IGUgPT09IEYgfHwgRGUgfHwgZSA9PT0gRCB8fCBlID09PSBtIHx8IGUgPT09IHYgfHwga2UgfHwgZSA9PT0gQSB8fCB3ZSB8fCB4ZSB8fCBqZSB8fCB0eXBlb2YgZSA9PSBcIm9iamVjdFwiICYmIGUgIT09IG51bGwgJiYgKGUuJCR0eXBlb2YgPT09IHkgfHwgZS4kJHR5cGVvZiA9PT0gZyB8fCBlLiQkdHlwZW9mID09PSBQIHx8IGUuJCR0eXBlb2YgPT09IGggfHwgZS4kJHR5cGVvZiA9PT0gbCB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAgIC8vIHdpdGguXG4gICAgICBlLiQkdHlwZW9mID09PSBaIHx8IGUuZ2V0TW9kdWxlSWQgIT09IHZvaWQgMCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBBZShlLCByLCB0KSB7XG4gICAgICB2YXIgbiA9IGUuZGlzcGxheU5hbWU7XG4gICAgICBpZiAobilcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB2YXIgbyA9IHIuZGlzcGxheU5hbWUgfHwgci5uYW1lIHx8IFwiXCI7XG4gICAgICByZXR1cm4gbyAhPT0gXCJcIiA/IHQgKyBcIihcIiArIG8gKyBcIilcIiA6IHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFEoZSkge1xuICAgICAgcmV0dXJuIGUuZGlzcGxheU5hbWUgfHwgXCJDb250ZXh0XCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEUoZSkge1xuICAgICAgaWYgKGUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBpZiAodHlwZW9mIGUudGFnID09IFwibnVtYmVyXCIgJiYgYyhcIlJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIpLCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBlLmRpc3BsYXlOYW1lIHx8IGUubmFtZSB8fCBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBlID09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBlO1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgXzpcbiAgICAgICAgICByZXR1cm4gXCJGcmFnbWVudFwiO1xuICAgICAgICBjYXNlIFY6XG4gICAgICAgICAgcmV0dXJuIFwiUG9ydGFsXCI7XG4gICAgICAgIGNhc2UgRjpcbiAgICAgICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuICAgICAgICBjYXNlIEQ6XG4gICAgICAgICAgcmV0dXJuIFwiU3RyaWN0TW9kZVwiO1xuICAgICAgICBjYXNlIG06XG4gICAgICAgICAgcmV0dXJuIFwiU3VzcGVuc2VcIjtcbiAgICAgICAgY2FzZSB2OlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlTGlzdFwiO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlID09IFwib2JqZWN0XCIpXG4gICAgICAgIHN3aXRjaCAoZS4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgaDpcbiAgICAgICAgICAgIHZhciByID0gZTtcbiAgICAgICAgICAgIHJldHVybiBRKHIpICsgXCIuQ29uc3VtZXJcIjtcbiAgICAgICAgICBjYXNlIFA6XG4gICAgICAgICAgICB2YXIgdCA9IGU7XG4gICAgICAgICAgICByZXR1cm4gUSh0Ll9jb250ZXh0KSArIFwiLlByb3ZpZGVyXCI7XG4gICAgICAgICAgY2FzZSBsOlxuICAgICAgICAgICAgcmV0dXJuIEFlKGUsIGUucmVuZGVyLCBcIkZvcndhcmRSZWZcIik7XG4gICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgdmFyIG4gPSBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCA/IG4gOiBFKGUudHlwZSkgfHwgXCJNZW1vXCI7XG4gICAgICAgICAgY2FzZSB5OiB7XG4gICAgICAgICAgICB2YXIgbyA9IGUsIHUgPSBvLl9wYXlsb2FkLCBpID0gby5faW5pdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBFKGkodSkpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBSID0gT2JqZWN0LmFzc2lnbiwgdyA9IDAsIGVlLCByZSwgdGUsIG5lLCBhZSwgaWUsIG9lO1xuICAgIGZ1bmN0aW9uIHVlKCkge1xuICAgIH1cbiAgICB1ZS5fX3JlYWN0RGlzYWJsZWRMb2cgPSAhMDtcbiAgICBmdW5jdGlvbiBJZSgpIHtcbiAgICAgIHtcbiAgICAgICAgaWYgKHcgPT09IDApIHtcbiAgICAgICAgICBlZSA9IGNvbnNvbGUubG9nLCByZSA9IGNvbnNvbGUuaW5mbywgdGUgPSBjb25zb2xlLndhcm4sIG5lID0gY29uc29sZS5lcnJvciwgYWUgPSBjb25zb2xlLmdyb3VwLCBpZSA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQsIG9lID0gY29uc29sZS5ncm91cEVuZDtcbiAgICAgICAgICB2YXIgZSA9IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIHZhbHVlOiB1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiAhMFxuICAgICAgICAgIH07XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICAgICAgaW5mbzogZSxcbiAgICAgICAgICAgIGxvZzogZSxcbiAgICAgICAgICAgIHdhcm46IGUsXG4gICAgICAgICAgICBlcnJvcjogZSxcbiAgICAgICAgICAgIGdyb3VwOiBlLFxuICAgICAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGUsXG4gICAgICAgICAgICBncm91cEVuZDogZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHcrKztcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gJGUoKSB7XG4gICAgICB7XG4gICAgICAgIGlmICh3LS0sIHcgPT09IDApIHtcbiAgICAgICAgICB2YXIgZSA9IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIHdyaXRhYmxlOiAhMFxuICAgICAgICAgIH07XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICAgICAgbG9nOiBSKHt9LCBlLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBlZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbmZvOiBSKHt9LCBlLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiByZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3YXJuOiBSKHt9LCBlLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB0ZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBlcnJvcjogUih7fSwgZSwge1xuICAgICAgICAgICAgICB2YWx1ZTogbmVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZ3JvdXA6IFIoe30sIGUsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IGFlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGdyb3VwQ29sbGFwc2VkOiBSKHt9LCBlLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBpZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBncm91cEVuZDogUih7fSwgZSwge1xuICAgICAgICAgICAgICB2YWx1ZTogb2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdyA8IDAgJiYgYyhcImRpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBNID0gVC5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLCBVO1xuICAgIGZ1bmN0aW9uIEkoZSwgciwgdCkge1xuICAgICAge1xuICAgICAgICBpZiAoVSA9PT0gdm9pZCAwKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICAgIH0gY2F0Y2ggKG8pIHtcbiAgICAgICAgICAgIHZhciBuID0gby5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgICAgIFUgPSBuICYmIG5bMV0gfHwgXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBgXG5gICsgVSArIGU7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBCID0gITEsICQ7XG4gICAge1xuICAgICAgdmFyIFdlID0gdHlwZW9mIFdlYWtNYXAgPT0gXCJmdW5jdGlvblwiID8gV2Vha01hcCA6IE1hcDtcbiAgICAgICQgPSBuZXcgV2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2UoZSwgcikge1xuICAgICAgaWYgKCFlIHx8IEIpXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAge1xuICAgICAgICB2YXIgdCA9ICQuZ2V0KGUpO1xuICAgICAgICBpZiAodCAhPT0gdm9pZCAwKVxuICAgICAgICAgIHJldHVybiB0O1xuICAgICAgfVxuICAgICAgdmFyIG47XG4gICAgICBCID0gITA7XG4gICAgICB2YXIgbyA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlO1xuICAgICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB2b2lkIDA7XG4gICAgICB2YXIgdTtcbiAgICAgIHUgPSBNLmN1cnJlbnQsIE0uY3VycmVudCA9IG51bGwsIEllKCk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgIHZhciBpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLnByb3RvdHlwZSwgXCJwcm9wc1wiLCB7XG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLCB0eXBlb2YgUmVmbGVjdCA9PSBcIm9iamVjdFwiICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChpLCBbXSk7XG4gICAgICAgICAgICB9IGNhdGNoIChiKSB7XG4gICAgICAgICAgICAgIG4gPSBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZSwgW10sIGkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpLmNhbGwoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgbiA9IGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLmNhbGwoaS5wcm90b3R5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgICB9IGNhdGNoIChiKSB7XG4gICAgICAgICAgICBuID0gYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChiKSB7XG4gICAgICAgIGlmIChiICYmIG4gJiYgdHlwZW9mIGIuc3RhY2sgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGZvciAodmFyIGEgPSBiLnN0YWNrLnNwbGl0KGBcbmApLCBkID0gbi5zdGFjay5zcGxpdChgXG5gKSwgcyA9IGEubGVuZ3RoIC0gMSwgZiA9IGQubGVuZ3RoIC0gMTsgcyA+PSAxICYmIGYgPj0gMCAmJiBhW3NdICE9PSBkW2ZdOyApXG4gICAgICAgICAgICBmLS07XG4gICAgICAgICAgZm9yICg7IHMgPj0gMSAmJiBmID49IDA7IHMtLSwgZi0tKVxuICAgICAgICAgICAgaWYgKGFbc10gIT09IGRbZl0pIHtcbiAgICAgICAgICAgICAgaWYgKHMgIT09IDEgfHwgZiAhPT0gMSlcbiAgICAgICAgICAgICAgICBkb1xuICAgICAgICAgICAgICAgICAgaWYgKHMtLSwgZi0tLCBmIDwgMCB8fCBhW3NdICE9PSBkW2ZdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gYFxuYCArIGFbc10ucmVwbGFjZShcIiBhdCBuZXcgXCIsIFwiIGF0IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZGlzcGxheU5hbWUgJiYgcC5pbmNsdWRlcyhcIjxhbm9ueW1vdXM+XCIpICYmIChwID0gcC5yZXBsYWNlKFwiPGFub255bW91cz5cIiwgZS5kaXNwbGF5TmFtZSkpLCB0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIgJiYgJC5zZXQoZSwgcCksIHA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKHMgPj0gMSAmJiBmID49IDApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgQiA9ICExLCBNLmN1cnJlbnQgPSB1LCAkZSgpLCBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IG87XG4gICAgICB9XG4gICAgICB2YXIgQyA9IGUgPyBlLmRpc3BsYXlOYW1lIHx8IGUubmFtZSA6IFwiXCIsIF9lID0gQyA/IEkoQykgOiBcIlwiO1xuICAgICAgcmV0dXJuIHR5cGVvZiBlID09IFwiZnVuY3Rpb25cIiAmJiAkLnNldChlLCBfZSksIF9lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBZZShlLCByLCB0KSB7XG4gICAgICByZXR1cm4gc2UoZSwgITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMZShlKSB7XG4gICAgICB2YXIgciA9IGUucHJvdG90eXBlO1xuICAgICAgcmV0dXJuICEhKHIgJiYgci5pc1JlYWN0Q29tcG9uZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVyhlLCByLCB0KSB7XG4gICAgICBpZiAoZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIGlmICh0eXBlb2YgZSA9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBzZShlLCBMZShlKSk7XG4gICAgICBpZiAodHlwZW9mIGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIEkoZSk7XG4gICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgY2FzZSBtOlxuICAgICAgICAgIHJldHVybiBJKFwiU3VzcGVuc2VcIik7XG4gICAgICAgIGNhc2UgdjpcbiAgICAgICAgICByZXR1cm4gSShcIlN1c3BlbnNlTGlzdFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZSA9PSBcIm9iamVjdFwiKVxuICAgICAgICBzd2l0Y2ggKGUuJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIGw6XG4gICAgICAgICAgICByZXR1cm4gWWUoZS5yZW5kZXIpO1xuICAgICAgICAgIGNhc2UgZzpcbiAgICAgICAgICAgIHJldHVybiBXKGUudHlwZSwgciwgdCk7XG4gICAgICAgICAgY2FzZSB5OiB7XG4gICAgICAgICAgICB2YXIgbiA9IGUsIG8gPSBuLl9wYXlsb2FkLCB1ID0gbi5faW5pdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBXKHUobyksIHIsIHQpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdmFyIFkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LCBmZSA9IHt9LCBsZSA9IFQuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICBmdW5jdGlvbiBMKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciByID0gZS5fb3duZXIsIHQgPSBXKGUudHlwZSwgZS5fc291cmNlLCByID8gci50eXBlIDogbnVsbCk7XG4gICAgICAgIGxlLnNldEV4dHJhU3RhY2tGcmFtZSh0KTtcbiAgICAgIH0gZWxzZVxuICAgICAgICBsZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIE5lKGUsIHIsIHQsIG4sIG8pIHtcbiAgICAgIHtcbiAgICAgICAgdmFyIHUgPSBGdW5jdGlvbi5jYWxsLmJpbmQoWSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gZSlcbiAgICAgICAgICBpZiAodShlLCBpKSkge1xuICAgICAgICAgICAgdmFyIGEgPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGVbaV0gIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBFcnJvcigobiB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IFwiICsgdCArIFwiIHR5cGUgYFwiICsgaSArIFwiYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgXCIgKyB0eXBlb2YgZVtpXSArIFwiYC5UaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC5cIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZC5uYW1lID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsIGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYSA9IGVbaV0ociwgaSwgbiwgdCwgbnVsbCwgXCJTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRFwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgICAgYSA9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhICYmICEoYSBpbnN0YW5jZW9mIEVycm9yKSAmJiAoTChvKSwgYyhcIiVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiBZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciBjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kIHNoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS5cIiwgbiB8fCBcIlJlYWN0IGNsYXNzXCIsIHQsIGksIHR5cGVvZiBhKSwgTChudWxsKSksIGEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGEubWVzc2FnZSBpbiBmZSkgJiYgKGZlW2EubWVzc2FnZV0gPSAhMCwgTChvKSwgYyhcIkZhaWxlZCAlcyB0eXBlOiAlc1wiLCB0LCBhLm1lc3NhZ2UpLCBMKG51bGwpKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBWZSA9IEFycmF5LmlzQXJyYXk7XG4gICAgZnVuY3Rpb24gcShlKSB7XG4gICAgICByZXR1cm4gVmUoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIE1lKGUpIHtcbiAgICAgIHtcbiAgICAgICAgdmFyIHIgPSB0eXBlb2YgU3ltYm9sID09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wudG9TdHJpbmdUYWcsIHQgPSByICYmIGVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCBlLmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJPYmplY3RcIjtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIFVlKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjZShlKSwgITE7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuICEwO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjZShlKSB7XG4gICAgICByZXR1cm4gXCJcIiArIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlKGUpIHtcbiAgICAgIGlmIChVZShlKSlcbiAgICAgICAgcmV0dXJuIGMoXCJUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS5cIiwgTWUoZSkpLCBjZShlKTtcbiAgICB9XG4gICAgdmFyIHggPSBULlJlYWN0Q3VycmVudE93bmVyLCBCZSA9IHtcbiAgICAgIGtleTogITAsXG4gICAgICByZWY6ICEwLFxuICAgICAgX19zZWxmOiAhMCxcbiAgICAgIF9fc291cmNlOiAhMFxuICAgIH0sIHZlLCBwZSwgSjtcbiAgICBKID0ge307XG4gICAgZnVuY3Rpb24gcWUoZSkge1xuICAgICAgaWYgKFkuY2FsbChlLCBcInJlZlwiKSkge1xuICAgICAgICB2YXIgciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgXCJyZWZcIikuZ2V0O1xuICAgICAgICBpZiAociAmJiByLmlzUmVhY3RXYXJuaW5nKVxuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlLnJlZiAhPT0gdm9pZCAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBKZShlKSB7XG4gICAgICBpZiAoWS5jYWxsKGUsIFwia2V5XCIpKSB7XG4gICAgICAgIHZhciByID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBcImtleVwiKS5nZXQ7XG4gICAgICAgIGlmIChyICYmIHIuaXNSZWFjdFdhcm5pbmcpXG4gICAgICAgICAgcmV0dXJuICExO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGUua2V5ICE9PSB2b2lkIDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEdlKGUsIHIpIHtcbiAgICAgIGlmICh0eXBlb2YgZS5yZWYgPT0gXCJzdHJpbmdcIiAmJiB4LmN1cnJlbnQgJiYgciAmJiB4LmN1cnJlbnQuc3RhdGVOb2RlICE9PSByKSB7XG4gICAgICAgIHZhciB0ID0gRSh4LmN1cnJlbnQudHlwZSk7XG4gICAgICAgIEpbdF0gfHwgKGMoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiBTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuIExlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBFKHguY3VycmVudC50eXBlKSwgZS5yZWYpLCBKW3RdID0gITApO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB6ZShlLCByKSB7XG4gICAgICB7XG4gICAgICAgIHZhciB0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmUgfHwgKHZlID0gITAsIGMoXCIlczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lIHZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgcHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKVwiLCByKSk7XG4gICAgICAgIH07XG4gICAgICAgIHQuaXNSZWFjdFdhcm5pbmcgPSAhMCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwia2V5XCIsIHtcbiAgICAgICAgICBnZXQ6IHQsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gSGUoZSwgcikge1xuICAgICAge1xuICAgICAgICB2YXIgdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBlIHx8IChwZSA9ICEwLCBjKFwiJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSB2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50IHByb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcylcIiwgcikpO1xuICAgICAgICB9O1xuICAgICAgICB0LmlzUmVhY3RXYXJuaW5nID0gITAsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInJlZlwiLCB7XG4gICAgICAgICAgZ2V0OiB0LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBLZSA9IGZ1bmN0aW9uKGUsIHIsIHQsIG4sIG8sIHUsIGkpIHtcbiAgICAgIHZhciBhID0ge1xuICAgICAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAgICAgJCR0eXBlb2Y6IFMsXG4gICAgICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgdHlwZTogZSxcbiAgICAgICAga2V5OiByLFxuICAgICAgICByZWY6IHQsXG4gICAgICAgIHByb3BzOiBpLFxuICAgICAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgICAgICBfb3duZXI6IHVcbiAgICAgIH07XG4gICAgICByZXR1cm4gYS5fc3RvcmUgPSB7fSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEuX3N0b3JlLCBcInZhbGlkYXRlZFwiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiAhMVxuICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcIl9zZWxmXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMSxcbiAgICAgICAgdmFsdWU6IG5cbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJfc291cmNlXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMSxcbiAgICAgICAgdmFsdWU6IG9cbiAgICAgIH0pLCBPYmplY3QuZnJlZXplICYmIChPYmplY3QuZnJlZXplKGEucHJvcHMpLCBPYmplY3QuZnJlZXplKGEpKSwgYTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIFhlKGUsIHIsIHQsIG4sIG8pIHtcbiAgICAgIHtcbiAgICAgICAgdmFyIHUsIGkgPSB7fSwgYSA9IG51bGwsIGQgPSBudWxsO1xuICAgICAgICB0ICE9PSB2b2lkIDAgJiYgKGRlKHQpLCBhID0gXCJcIiArIHQpLCBKZShyKSAmJiAoZGUoci5rZXkpLCBhID0gXCJcIiArIHIua2V5KSwgcWUocikgJiYgKGQgPSByLnJlZiwgR2UociwgbykpO1xuICAgICAgICBmb3IgKHUgaW4gcilcbiAgICAgICAgICBZLmNhbGwociwgdSkgJiYgIUJlLmhhc093blByb3BlcnR5KHUpICYmIChpW3VdID0gclt1XSk7XG4gICAgICAgIGlmIChlICYmIGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgdmFyIHMgPSBlLmRlZmF1bHRQcm9wcztcbiAgICAgICAgICBmb3IgKHUgaW4gcylcbiAgICAgICAgICAgIGlbdV0gPT09IHZvaWQgMCAmJiAoaVt1XSA9IHNbdV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhIHx8IGQpIHtcbiAgICAgICAgICB2YXIgZiA9IHR5cGVvZiBlID09IFwiZnVuY3Rpb25cIiA/IGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lIHx8IFwiVW5rbm93blwiIDogZTtcbiAgICAgICAgICBhICYmIHplKGksIGYpLCBkICYmIEhlKGksIGYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBLZShlLCBhLCBkLCBvLCBuLCB4LmN1cnJlbnQsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgRyA9IFQuUmVhY3RDdXJyZW50T3duZXIsIGdlID0gVC5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIGZ1bmN0aW9uIE8oZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIHIgPSBlLl9vd25lciwgdCA9IFcoZS50eXBlLCBlLl9zb3VyY2UsIHIgPyByLnR5cGUgOiBudWxsKTtcbiAgICAgICAgZ2Uuc2V0RXh0cmFTdGFja0ZyYW1lKHQpO1xuICAgICAgfSBlbHNlXG4gICAgICAgIGdlLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gICAgdmFyIHo7XG4gICAgeiA9ICExO1xuICAgIGZ1bmN0aW9uIEgoZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBlID09IFwib2JqZWN0XCIgJiYgZSAhPT0gbnVsbCAmJiBlLiQkdHlwZW9mID09PSBTO1xuICAgIH1cbiAgICBmdW5jdGlvbiBFZSgpIHtcbiAgICAgIHtcbiAgICAgICAgaWYgKEcuY3VycmVudCkge1xuICAgICAgICAgIHZhciBlID0gRShHLmN1cnJlbnQudHlwZSk7XG4gICAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICByZXR1cm4gYFxuXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBcXGBgICsgZSArIFwiYC5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gWmUoZSkge1xuICAgICAge1xuICAgICAgICBpZiAoZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdmFyIHIgPSBlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sIFwiXCIpLCB0ID0gZS5saW5lTnVtYmVyO1xuICAgICAgICAgIHJldHVybiBgXG5cbkNoZWNrIHlvdXIgY29kZSBhdCBgICsgciArIFwiOlwiICsgdCArIFwiLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYmUgPSB7fTtcbiAgICBmdW5jdGlvbiBRZShlKSB7XG4gICAgICB7XG4gICAgICAgIHZhciByID0gRWUoKTtcbiAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgdmFyIHQgPSB0eXBlb2YgZSA9PSBcInN0cmluZ1wiID8gZSA6IGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lO1xuICAgICAgICAgIHQgJiYgKHIgPSBgXG5cbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPGAgKyB0ICsgXCI+LlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaGUoZSwgcikge1xuICAgICAge1xuICAgICAgICBpZiAoIWUuX3N0b3JlIHx8IGUuX3N0b3JlLnZhbGlkYXRlZCB8fCBlLmtleSAhPSBudWxsKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZS5fc3RvcmUudmFsaWRhdGVkID0gITA7XG4gICAgICAgIHZhciB0ID0gUWUocik7XG4gICAgICAgIGlmIChiZVt0XSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGJlW3RdID0gITA7XG4gICAgICAgIHZhciBuID0gXCJcIjtcbiAgICAgICAgZSAmJiBlLl9vd25lciAmJiBlLl9vd25lciAhPT0gRy5jdXJyZW50ICYmIChuID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBFKGUuX293bmVyLnR5cGUpICsgXCIuXCIpLCBPKGUpLCBjKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCB0LCBuKSwgTyhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24geWUoZSwgcikge1xuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIGUgIT0gXCJvYmplY3RcIilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChxKGUpKVxuICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgZS5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIG4gPSBlW3RdO1xuICAgICAgICAgICAgSChuKSAmJiBoZShuLCByKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEgoZSkpXG4gICAgICAgICAgZS5fc3RvcmUgJiYgKGUuX3N0b3JlLnZhbGlkYXRlZCA9ICEwKTtcbiAgICAgICAgZWxzZSBpZiAoZSkge1xuICAgICAgICAgIHZhciBvID0gU2UoZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBvID09IFwiZnVuY3Rpb25cIiAmJiBvICE9PSBlLmVudHJpZXMpXG4gICAgICAgICAgICBmb3IgKHZhciB1ID0gby5jYWxsKGUpLCBpOyAhKGkgPSB1Lm5leHQoKSkuZG9uZTsgKVxuICAgICAgICAgICAgICBIKGkudmFsdWUpICYmIGhlKGkudmFsdWUsIHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVyKGUpIHtcbiAgICAgIHtcbiAgICAgICAgdmFyIHIgPSBlLnR5cGU7XG4gICAgICAgIGlmIChyID09IG51bGwgfHwgdHlwZW9mIHIgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0O1xuICAgICAgICBpZiAodHlwZW9mIHIgPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgIHQgPSByLnByb3BUeXBlcztcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHIgPT0gXCJvYmplY3RcIiAmJiAoci4kJHR5cGVvZiA9PT0gbCB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgICAgICByLiQkdHlwZW9mID09PSBnKSlcbiAgICAgICAgICB0ID0gci5wcm9wVHlwZXM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgdmFyIG4gPSBFKHIpO1xuICAgICAgICAgIE5lKHQsIGUucHJvcHMsIFwicHJvcFwiLCBuLCBlKTtcbiAgICAgICAgfSBlbHNlIGlmIChyLlByb3BUeXBlcyAhPT0gdm9pZCAwICYmICF6KSB7XG4gICAgICAgICAgeiA9ICEwO1xuICAgICAgICAgIHZhciBvID0gRShyKTtcbiAgICAgICAgICBjKFwiQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/XCIsIG8gfHwgXCJVbmtub3duXCIpO1xuICAgICAgICB9XG4gICAgICAgIHR5cGVvZiByLmdldERlZmF1bHRQcm9wcyA9PSBcImZ1bmN0aW9uXCIgJiYgIXIuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkICYmIGMoXCJnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcnIoZSkge1xuICAgICAge1xuICAgICAgICBmb3IgKHZhciByID0gT2JqZWN0LmtleXMoZS5wcm9wcyksIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgICAgICAgIHZhciBuID0gclt0XTtcbiAgICAgICAgICBpZiAobiAhPT0gXCJjaGlsZHJlblwiICYmIG4gIT09IFwia2V5XCIpIHtcbiAgICAgICAgICAgIE8oZSksIGMoXCJJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiBSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLlwiLCBuKSwgTyhudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlLnJlZiAhPT0gbnVsbCAmJiAoTyhlKSwgYyhcIkludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuXCIpLCBPKG51bGwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gUmUoZSwgciwgdCwgbiwgbywgdSkge1xuICAgICAge1xuICAgICAgICB2YXIgaSA9IEZlKGUpO1xuICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICB2YXIgYSA9IFwiXCI7XG4gICAgICAgICAgKGUgPT09IHZvaWQgMCB8fCB0eXBlb2YgZSA9PSBcIm9iamVjdFwiICYmIGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXMoZSkubGVuZ3RoID09PSAwKSAmJiAoYSArPSBcIiBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSBpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCIpO1xuICAgICAgICAgIHZhciBkID0gWmUobyk7XG4gICAgICAgICAgZCA/IGEgKz0gZCA6IGEgKz0gRWUoKTtcbiAgICAgICAgICB2YXIgcztcbiAgICAgICAgICBlID09PSBudWxsID8gcyA9IFwibnVsbFwiIDogcShlKSA/IHMgPSBcImFycmF5XCIgOiBlICE9PSB2b2lkIDAgJiYgZS4kJHR5cGVvZiA9PT0gUyA/IChzID0gXCI8XCIgKyAoRShlLnR5cGUpIHx8IFwiVW5rbm93blwiKSArIFwiIC8+XCIsIGEgPSBcIiBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50P1wiKSA6IHMgPSB0eXBlb2YgZSwgYyhcIlJlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSBjb21wb25lbnRzKSBidXQgZ290OiAlcy4lc1wiLCBzLCBhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZiA9IFhlKGUsIHIsIHQsIG8sIHUpO1xuICAgICAgICBpZiAoZiA9PSBudWxsKVxuICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIHZhciBwID0gci5jaGlsZHJlbjtcbiAgICAgICAgICBpZiAocCAhPT0gdm9pZCAwKVxuICAgICAgICAgICAgaWYgKG4pXG4gICAgICAgICAgICAgIGlmIChxKHApKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgQyA9IDA7IEMgPCBwLmxlbmd0aDsgQysrKVxuICAgICAgICAgICAgICAgICAgeWUocFtDXSwgZSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZSAmJiBPYmplY3QuZnJlZXplKHApO1xuICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBjKFwiUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiBVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgeWUocCwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGUgPT09IF8gPyBycihmKSA6IGVyKGYpLCBmO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cihlLCByLCB0KSB7XG4gICAgICByZXR1cm4gUmUoZSwgciwgdCwgITApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBucihlLCByLCB0KSB7XG4gICAgICByZXR1cm4gUmUoZSwgciwgdCwgITEpO1xuICAgIH1cbiAgICB2YXIgYXIgPSBuciwgaXIgPSB0cjtcbiAgICBrLkZyYWdtZW50ID0gXywgay5qc3ggPSBhciwgay5qc3hzID0gaXI7XG4gIH0oKSksIGs7XG59XG5wcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBLLmV4cG9ydHMgPSBvcigpIDogSy5leHBvcnRzID0gdXIoKTtcbnZhciBzciA9IEsuZXhwb3J0cztcbmNvbnN0IGxyID0gKCkgPT4gLyogQF9fUFVSRV9fICovIHNyLmpzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcIkhlbGxvLCBSZWFjdCBhbmQgVHlwZVNjcmlwdCFcIiB9KTtcbmV4cG9ydCB7XG4gIGxyIGFzIGRlZmF1bHRcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUTtBQUNmLElBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBLElBQUk7QUFDSixTQUFTLEtBQUs7QUFDWixNQUFJO0FBQ0YsV0FBTztBQUNULE9BQUs7QUFDTCxNQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLFVBQVUsZ0JBQWdCLElBQUksRUFBRSxtREFBbUQsbUJBQW1CLElBQUksRUFBRSxLQUFLLE1BQUksS0FBSyxNQUFJLFFBQVEsTUFBSSxVQUFVLEtBQUc7QUFDalAsV0FBUyxF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