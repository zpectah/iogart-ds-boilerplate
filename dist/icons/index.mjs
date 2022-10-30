import Te from "react";
var Z = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function sr() {
  if (Ce)
    return L;
  Ce = 1;
  var l = Te, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, A = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(C, g, S) {
    var b, E = {}, x = null, N = null;
    S !== void 0 && (x = "" + S), g.key !== void 0 && (x = "" + g.key), g.ref !== void 0 && (N = g.ref);
    for (b in g)
      s.call(g, b) && !F.hasOwnProperty(b) && (E[b] = g[b]);
    if (C && C.defaultProps)
      for (b in g = C.defaultProps, g)
        E[b] === void 0 && (E[b] = g[b]);
    return { $$typeof: n, type: C, key: x, ref: N, props: E, _owner: A.current };
  }
  return L.Fragment = c, L.jsx = j, L.jsxs = j, L;
}
var D = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ur() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Te, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), C = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), Q = Symbol.iterator, Se = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var O = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var a = O.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var ke = !1, je = !1, Me = !1, ze = !1, Le = !1, ee;
    ee = Symbol.for("react.module.reference");
    function De(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === F || Le || e === A || e === S || e === b || ze || e === N || ke || je || Me || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === E || e.$$typeof === j || e.$$typeof === C || e.$$typeof === g || e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case c:
          return "Portal";
        case F:
          return "Profiler";
        case A:
          return "StrictMode";
        case S:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return re(r) + ".Consumer";
          case j:
            var t = e;
            return re(t._context) + ".Provider";
          case g:
            return Ae(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : _(e.type) || "Memo";
          case x: {
            var f = e, d = f._payload, u = f._init;
            try {
              return _(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, M = 0, te, ne, ae, ie, oe, le, se;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Fe() {
      {
        if (M === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, le = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
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
        M++;
      }
    }
    function Ne() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: te
            }),
            info: T({}, e, {
              value: ne
            }),
            warn: T({}, e, {
              value: ae
            }),
            error: T({}, e, {
              value: ie
            }),
            group: T({}, e, {
              value: oe
            }),
            groupCollapsed: T({}, e, {
              value: le
            }),
            groupEnd: T({}, e, {
              value: se
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = O.ReactCurrentDispatcher, H;
    function I(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
            H = a && a[1] || "";
          }
        return `
` + H + e;
      }
    }
    var U = !1, W;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ie();
    }
    function ce(e, r) {
      if (!e || U)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      U = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Y.current, Y.current = null, Fe();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (R) {
              a = R;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (R) {
              a = R;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            a = R;
          }
          e();
        }
      } catch (R) {
        if (R && a && typeof R.stack == "string") {
          for (var i = R.stack.split(`
`), m = a.stack.split(`
`), v = i.length - 1, h = m.length - 1; v >= 1 && h >= 0 && i[v] !== m[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (i[v] !== m[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || i[v] !== m[h]) {
                    var y = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, y), y;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        U = !1, Y.current = d, Ne(), Error.prepareStackTrace = f;
      }
      var k = e ? e.displayName || e.name : "", Re = k ? I(k) : "";
      return typeof e == "function" && W.set(e, Re), Re;
    }
    function We(e, r, t) {
      return ce(e, !1);
    }
    function $e(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, $e(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case S:
          return I("Suspense");
        case b:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return We(e.render);
          case E:
            return $(e.type, r, t);
          case x: {
            var a = e, f = a._payload, d = a._init;
            try {
              return $(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, fe = {}, de = O.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, f) {
      {
        var d = Function.call.bind(B);
        for (var u in e)
          if (d(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var m = Error((a || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              i = e[u](r, u, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (V(f), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, u, typeof i), V(null)), i instanceof Error && !(i.message in fe) && (fe[i.message] = !0, V(f), w("Failed %s type: %s", t, i.message), V(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Ye(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function he(e) {
      if (He(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(e)), ve(e);
    }
    var z = O.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge, J;
    J = {};
    function qe(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var t = _(z.current.type);
        J[t] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(z.current.type), e.ref), J[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          pe || (pe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, a, f, d, u) {
      var i = {
        $$typeof: n,
        type: e,
        key: r,
        ref: t,
        props: u,
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function Qe(e, r, t, a, f) {
      {
        var d, u = {}, i = null, m = null;
        t !== void 0 && (he(t), i = "" + t), Je(r) && (he(r.key), i = "" + r.key), qe(r) && (m = r.ref, Ge(r, f));
        for (d in r)
          B.call(r, d) && !Ue.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (d in v)
            u[d] === void 0 && (u[d] = v[d]);
        }
        if (i || m) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Ke(u, h), m && Xe(u, h);
        }
        return Ze(e, i, m, f, a, z.current, u);
      }
    }
    var G = O.ReactCurrentOwner, we = O.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function me() {
      {
        if (G.current) {
          var e = _(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
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
    function rr(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (be[t])
          return;
        be[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + _(e._owner.type) + "."), P(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), P(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            X(a) && ye(a, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Oe(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
              X(u.value) && ye(u.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = _(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var f = _(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            P(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function _e(e, r, t, a, f, d) {
      {
        var u = De(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = er(f);
          m ? i += m : i += me();
          var v;
          e === null ? v = "null" : q(e) ? v = "array" : e !== void 0 && e.$$typeof === n ? (v = "<" + (_(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var h = Qe(e, r, t, f, d);
        if (h == null)
          return h;
        if (u) {
          var y = r.children;
          if (y !== void 0)
            if (a)
              if (q(y)) {
                for (var k = 0; k < y.length; k++)
                  Ee(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(y, e);
        }
        return e === s ? nr(h) : tr(h), h;
      }
    }
    function ar(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ir(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ir, lr = ar;
    D.Fragment = s, D.jsx = or, D.jsxs = lr;
  }()), D;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = sr() : l.exports = ur();
})(Z);
const o = Z.exports.jsx, p = Z.exports.jsxs, fr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
    })]
  });
}, dr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
    })]
  });
}, vr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
    })]
  });
}, hr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
    })]
  });
}, pr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    })]
  });
}, gr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    })]
  });
}, wr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
    })]
  });
}, mr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
    })]
  });
}, br = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    })]
  });
}, yr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    })]
  });
}, Er = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: [/* @__PURE__ */ o("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /* @__PURE__ */ o("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    })]
  });
}, _r = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    fill: c,
    ...s,
    children: /* @__PURE__ */ p("g", {
      children: [/* @__PURE__ */ o("path", {
        d: "M0,0h24v24H0V0z",
        fill: "none"
      }), /* @__PURE__ */ o("path", {
        d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
      })]
    })
  });
}, Rr = (l) => {
  const {
    size: n = 32,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 44 44",
    width: n,
    height: n,
    stroke: c,
    ...s,
    children: /* @__PURE__ */ p("g", {
      fill: "none",
      fillRule: "evenodd",
      strokeWidth: "2",
      children: [/* @__PURE__ */ p("circle", {
        cx: "22",
        cy: "22",
        r: "1",
        children: [/* @__PURE__ */ o("animate", {
          attributeName: "r",
          begin: "0s",
          dur: "1.8s",
          values: "1; 20",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.165, 0.84, 0.44, 1",
          repeatCount: "indefinite"
        }), /* @__PURE__ */ o("animate", {
          attributeName: "stroke-opacity",
          begin: "0s",
          dur: "1.8s",
          values: "1; 0",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.3, 0.61, 0.355, 1",
          repeatCount: "indefinite"
        })]
      }), /* @__PURE__ */ p("circle", {
        cx: "22",
        cy: "22",
        r: "1",
        children: [/* @__PURE__ */ o("animate", {
          attributeName: "r",
          begin: "-0.9s",
          dur: "1.8s",
          values: "1; 20",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.165, 0.84, 0.44, 1",
          repeatCount: "indefinite"
        }), /* @__PURE__ */ o("animate", {
          attributeName: "stroke-opacity",
          begin: "-0.9s",
          dur: "1.8s",
          values: "1; 0",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.3, 0.61, 0.355, 1",
          repeatCount: "indefinite"
        })]
      })]
    })
  });
}, Cr = (l) => {
  const {
    size: n = 16,
    color: c = "currentColor",
    ...s
  } = l;
  return /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: n,
    width: n * 4,
    viewBox: "0 0 120 30",
    fill: c,
    ...s,
    children: [/* @__PURE__ */ p("circle", {
      cx: "15",
      cy: "15",
      r: "15",
      children: [/* @__PURE__ */ o("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ o("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })]
    }), /* @__PURE__ */ p("circle", {
      cx: "60",
      cy: "15",
      r: "9",
      fillOpacity: "0.3",
      children: [/* @__PURE__ */ o("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ o("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })]
    }), /* @__PURE__ */ p("circle", {
      cx: "105",
      cy: "15",
      r: "15",
      children: [/* @__PURE__ */ o("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ o("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })]
    })]
  });
};
export {
  fr as ArrowBack,
  dr as ArrowDownward,
  vr as ArrowForward,
  hr as ArrowUpward,
  pr as Check,
  gr as Close,
  wr as ExpandLess,
  mr as ExpandMore,
  br as Home,
  yr as Menu,
  Er as Search,
  _r as Settings,
  Rr as SpinnerPuff,
  Cr as SpinnerThreeDots
};
//# sourceMappingURL=index.mjs.map
