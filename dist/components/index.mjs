import Pe, { createElement as je } from "react";
var Ne = /* @__PURE__ */ ((i) => (i.default = "default", i.outlined = "outlined", i.contained = "contained", i))(Ne || {}), ke = /* @__PURE__ */ ((i) => (i.small = "small", i.medium = "medium", i.large = "large", i))(ke || {});
const Fe = (i) => {
  const { className: u, style: d, classList: v = [] } = i, h = [u, ...v].join(" "), y = Object.assign({}, d);
  return {
    className: h,
    style: y
  };
}, vr = (i) => [...i].join(" ").replaceAll("  ", " ").replace(/\s+$/g, ""), pr = "iogart-Button", mr = "iogart-children", gr = "iogart-preloader", br = "iogart-pill", hr = "iogart-small", yr = "iogart-medium", Er = "iogart-large", _r = "iogart-outlined", Rr = "iogart-contained", Tr = "iogart-loading", Cr = "iogart-disabled", P = {
  Button: pr,
  children: mr,
  preloader: gr,
  pill: br,
  small: hr,
  medium: yr,
  large: Er,
  outlined: _r,
  contained: Rr,
  loading: Tr,
  disabled: Cr
}, Or = ({
  variant: i = Ne.default,
  size: u = ke.medium,
  pill: d,
  loading: v,
  disabled: h,
  ...y
}) => {
  const { className: T, style: E } = Fe({ ...y });
  return {
    className: vr([
      P.Button,
      P[u],
      P[i],
      d && P.pill,
      v && P.loading,
      h && P.disabled,
      T
    ]),
    style: Object.assign({}, E),
    childrenClassName: P.children,
    preloaderClassName: P.preloader
  };
};
var J = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function wr() {
  if (Se)
    return I;
  Se = 1;
  var i = Pe, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, p, x) {
    var m, R = {}, C = null, N = null;
    x !== void 0 && (C = "" + x), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (N = p.ref);
    for (m in p)
      v.call(p, m) && !y.hasOwnProperty(m) && (R[m] = p[m]);
    if (E && E.defaultProps)
      for (m in p = E.defaultProps, p)
        R[m] === void 0 && (R[m] = p[m]);
    return { $$typeof: u, type: E, key: C, ref: N, props: R, _owner: h.current };
  }
  return I.Fragment = d, I.jsx = T, I.jsxs = T, I;
}
var W = {};
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
function Sr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Pe, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), M = Symbol.iterator, z = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[z];
      return typeof r == "function" ? r : null;
    }
    var k = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ae = !1, $e = !1, Ie = !1, We = !1, Ye = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === y || Ye || e === h || e === x || e === m || We || e === N || Ae || $e || Ie || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === R || e.$$typeof === T || e.$$typeof === E || e.$$typeof === p || e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case d:
          return "Portal";
        case y:
          return "Profiler";
        case h:
          return "StrictMode";
        case x:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ae(r) + ".Consumer";
          case T:
            var t = e;
            return ae(t._context) + ".Provider";
          case p:
            return Le(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case C: {
            var s = e, l = s._payload, o = s._init;
            try {
              return O(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, A = 0, oe, ie, se, le, ue, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ue() {
      {
        if (A === 0) {
          oe = console.log, ie = console.info, se = console.warn, le = console.error, ue = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        A++;
      }
    }
    function Ve() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: oe
            }),
            info: j({}, e, {
              value: ie
            }),
            warn: j({}, e, {
              value: se
            }),
            error: j({}, e, {
              value: le
            }),
            group: j({}, e, {
              value: ue
            }),
            groupCollapsed: j({}, e, {
              value: ce
            }),
            groupEnd: j({}, e, {
              value: fe
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = k.ReactCurrentDispatcher, X;
    function L(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, U;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Be();
    }
    function ve(e, r) {
      if (!e || Z)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = H.current, H.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (w) {
              n = w;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var a = w.stack.split(`
`), b = n.stack.split(`
`), c = a.length - 1, f = b.length - 1; c >= 1 && f >= 0 && a[c] !== b[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== b[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== b[f]) {
                    var _ = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, _), _;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Z = !1, H.current = l, Ve(), Error.prepareStackTrace = s;
      }
      var D = e ? e.displayName || e.name : "", we = D ? L(D) : "";
      return typeof e == "function" && U.set(e, we), we;
    }
    function qe(e, r, t) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Je(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return qe(e.render);
          case R:
            return V(e.type, r, t);
          case C: {
            var n = e, s = n._payload, l = n._init;
            try {
              return V(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, pe = {}, me = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, s) {
      {
        var l = Function.call.bind(B);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, q(s), g("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Ge = Array.isArray;
    function K(e) {
      return Ge(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (Xe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ge(e);
    }
    var $ = k.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye, Q;
    Q = {};
    function Ke(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = O($.current.type);
        Q[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O($.current.type), e.ref), Q[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          he || (he = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, s, l, o) {
      var a = {
        $$typeof: u,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, s) {
      {
        var l, o = {}, a = null, b = null;
        t !== void 0 && (be(t), a = "" + t), Qe(r) && (be(r.key), a = "" + r.key), Ke(r) && (b = r.ref, er(r, s));
        for (l in r)
          B.call(r, l) && !Ze.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            o[l] === void 0 && (o[l] = c[l]);
        }
        if (a || b) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, f), b && tr(o, f);
        }
        return nr(e, a, b, s, n, $.current, o);
      }
    }
    var ee = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function _e() {
      {
        if (ee.current) {
          var e = O(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ir(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Te(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = G(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), o; !(o = l.next()).done; )
              te(o.value) && Te(o.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var s = O(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Oe(e, r, t, n, s, l) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = or(s);
          b ? a += b : a += _e();
          var c;
          e === null ? c = "null" : K(e) ? c = "array" : e !== void 0 && e.$$typeof === u ? (c = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = ar(e, r, t, s, l);
        if (f == null)
          return f;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (K(_)) {
                for (var D = 0; D < _.length; D++)
                  Ce(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(_, e);
        }
        return e === v ? lr(f) : sr(f), f;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    W.Fragment = v, W.jsx = fr, W.jsxs = dr;
  }()), W;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = wr() : i.exports = Sr();
})(J);
const xr = J.exports.Fragment, S = J.exports.jsx, Y = J.exports.jsxs, Pr = (i) => {
  const {
    size: u = 16,
    color: d = "currentColor",
    ...v
  } = i;
  return /* @__PURE__ */ Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: u,
    width: u * 4,
    viewBox: "0 0 120 30",
    fill: d,
    ...v,
    children: [/* @__PURE__ */ Y("circle", {
      cx: "15",
      cy: "15",
      r: "15",
      children: [/* @__PURE__ */ S("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ S("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
      })]
    }), /* @__PURE__ */ Y("circle", {
      cx: "60",
      cy: "15",
      r: "9",
      fillOpacity: "0.3",
      children: [/* @__PURE__ */ S("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ S("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
      })]
    }), /* @__PURE__ */ Y("circle", {
      cx: "105",
      cy: "15",
      r: "15",
      children: [/* @__PURE__ */ S("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ S("animate", {
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
}, jr = ({
  children: i,
  startIcon: u,
  endIcon: d,
  loading: v,
  preloaderClassName: h,
  childrenClassName: y
}) => ({
  children: /* @__PURE__ */ Y(xr, {
    children: [u && u, /* @__PURE__ */ S("span", {
      className: y,
      children: i
    }), d && d, v && /* @__PURE__ */ S("span", {
      className: h,
      children: /* @__PURE__ */ S(Pr, {
        size: 10
      })
    })]
  })
}), Ar = (i) => {
  const {
    children: u,
    className: d,
    style: v,
    variant: h,
    size: y,
    pill: T,
    loading: E,
    startIcon: p,
    endIcon: x,
    disabled: m,
    ...R
  } = i, {
    className: C,
    style: N,
    preloaderClassName: M,
    childrenClassName: z
  } = Or({
    className: d,
    style: v,
    variant: h,
    size: y,
    pill: T,
    loading: E,
    disabled: m
  }), {
    children: G
  } = jr({
    children: u,
    startIcon: p,
    endIcon: x,
    loading: E,
    preloaderClassName: M,
    childrenClassName: z
  });
  return je("button", {
    className: C,
    style: N,
    disabled: m,
    ...R
  }, G);
}, Nr = "iogart-Tag", kr = {
  Tag: Nr
}, Fr = ({ ...i }) => {
  const { className: u, style: d } = Fe({ ...i });
  return {
    className: [kr.tag, u].join(" "),
    style: Object.assign({}, d)
  };
}, $r = ({}) => ({}), Ir = (i) => {
  const {
    children: u,
    className: d,
    style: v
  } = i, {
    className: h,
    style: y
  } = Fr({
    className: d,
    style: v
  });
  return je("span", {
    className: h,
    style: y
  }, u);
};
export {
  Ar as Button,
  Ir as Tag,
  jr as useButton,
  Or as useButtonStyles,
  $r as useTag,
  Fr as useTagStyles
};
(function(){"use strict";try{if(typeof document!="undefined"){var r=document.createElement("style");r.appendChild(document.createTextNode('.bg-primary{background-color:#29282d!important}.bg-primary-darker-10{background-color:#101012!important}.bg-primary-darker-20,.bg-primary-darker-30,.bg-primary-darker-40,.bg-primary-darker-50{background-color:#000!important}.bg-primary-lighter-10{background-color:#424048!important}.bg-primary-lighter-20{background-color:#5a5863!important}.bg-primary-lighter-30{background-color:#73707e!important}.bg-primary-lighter-40{background-color:#8d8a97!important}.bg-primary-lighter-50{background-color:#a7a5af!important}.bg-secondary{background-color:#625d60!important}.bg-secondary-darker-10{background-color:#484446!important}.bg-secondary-darker-20{background-color:#2e2b2d!important}.bg-secondary-darker-30{background-color:#131313!important}.bg-secondary-darker-40,.bg-secondary-darker-50{background-color:#000!important}.bg-secondary-lighter-10{background-color:#7c767a!important}.bg-secondary-lighter-20{background-color:#959093!important}.bg-secondary-lighter-30{background-color:#aeaaac!important}.bg-secondary-lighter-40{background-color:#c7c4c6!important}.bg-secondary-lighter-50{background-color:#e0dedf!important}.bg-light{background-color:#dbd3d0!important}.bg-light-darker-10{background-color:#c5b8b3!important}.bg-light-darker-20{background-color:#af9d96!important}.bg-light-darker-30{background-color:#998279!important}.bg-light-darker-40{background-color:#7e6961!important}.bg-light-darker-50{background-color:#61514b!important}.bg-light-lighter-10{background-color:#f1eeed!important}.bg-light-lighter-20,.bg-light-lighter-30,.bg-light-lighter-40,.bg-light-lighter-50{background-color:#fff!important}.bg-dark{background-color:#191919!important}.bg-dark-darker-10,.bg-dark-darker-20,.bg-dark-darker-30,.bg-dark-darker-40,.bg-dark-darker-50{background-color:#000!important}.bg-dark-lighter-10{background-color:#333!important}.bg-dark-lighter-20{background-color:#4c4c4c!important}.bg-dark-lighter-30{background-color:#666!important}.bg-dark-lighter-40{background-color:#7f7f7f!important}.bg-dark-lighter-50{background-color:#999!important}.bg-success{background-color:#388e3c!important}.bg-success-darker-10{background-color:#2a692d!important}.bg-success-darker-20{background-color:#1b451d!important}.bg-success-darker-30{background-color:#0d200e!important}.bg-success-darker-40,.bg-success-darker-50{background-color:#000!important}.bg-success-lighter-10{background-color:#46b34b!important}.bg-success-lighter-20{background-color:#68c46d!important}.bg-success-lighter-30{background-color:#8dd290!important}.bg-success-lighter-40{background-color:#b2e0b4!important}.bg-success-lighter-50{background-color:#d6efd7!important}.bg-info{background-color:#0288d1!important}.bg-info-darker-10{background-color:#02679e!important}.bg-info-darker-20{background-color:#01466c!important}.bg-info-darker-30{background-color:#012539!important}.bg-info-darker-40{background-color:#000507!important}.bg-info-darker-50{background-color:#000!important}.bg-info-lighter-10{background-color:#09a7fd!important}.bg-info-lighter-20{background-color:#3cb9fd!important}.bg-info-lighter-30{background-color:#6ecbfe!important}.bg-info-lighter-40{background-color:#a1ddfe!important}.bg-info-lighter-50{background-color:#d3efff!important}.bg-warning{background-color:#f57c00!important}.bg-warning-darker-10{background-color:#c26200!important}.bg-warning-darker-20{background-color:#8f4800!important}.bg-warning-darker-30{background-color:#5c2f00!important}.bg-warning-darker-40{background-color:#291500!important}.bg-warning-darker-50{background-color:#000!important}.bg-warning-lighter-10{background-color:#ff9529!important}.bg-warning-lighter-20{background-color:#ffae5c!important}.bg-warning-lighter-30{background-color:#ffc88f!important}.bg-warning-lighter-40{background-color:#ffe1c2!important}.bg-warning-lighter-50{background-color:#fffaf5!important}.bg-error{background-color:#d32f2f!important}.bg-error-darker-10{background-color:#ab2424!important}.bg-error-darker-20{background-color:#811b1b!important}.bg-error-darker-30{background-color:#571212!important}.bg-error-darker-40{background-color:#2d0909!important}.bg-error-darker-50{background-color:#020101!important}.bg-error-lighter-10{background-color:#dc5959!important}.bg-error-lighter-20{background-color:#e58383!important}.bg-error-lighter-30{background-color:#eeadad!important}.bg-error-lighter-40{background-color:#f7d7d7!important}.bg-error-lighter-50{background-color:#fff!important}.bg-white{background-color:#fdfdfd!important}.bg-black{background-color:#020202!important}.bg-red{background-color:#d32f2f!important}.bg-pink{background-color:#c2185b!important}.bg-purple{background-color:#7b1fa2!important}.bg-deepPurple{background-color:#512da8!important}.bg-indigo{background-color:#303f9f!important}.bg-blue{background-color:#1976d2!important}.bg-lightBlue{background-color:#0288d1!important}.bg-cyan{background-color:#0097a7!important}.bg-teal{background-color:#00796b!important}.bg-green{background-color:#388e3c!important}.bg-lightGreen{background-color:#689f38!important}.bg-lime{background-color:#afb42b!important}.bg-yellow{background-color:#fbc02d!important}.bg-amber{background-color:#ffa000!important}.bg-orange{background-color:#f57c00!important}.bg-deepOrange{background-color:#e64a19!important}.bg-brown{background-color:#5d4037!important}.bg-grey{background-color:#616161!important}.bg-blueGrey{background-color:#455a64!important}.color-primary{color:#29282d!important}.color-primary-darker-10{color:#101012!important}.color-primary-darker-20,.color-primary-darker-30,.color-primary-darker-40,.color-primary-darker-50{color:#000!important}.color-primary-lighter-10{color:#424048!important}.color-primary-lighter-20{color:#5a5863!important}.color-primary-lighter-30{color:#73707e!important}.color-primary-lighter-40{color:#8d8a97!important}.color-primary-lighter-50{color:#a7a5af!important}.color-secondary{color:#625d60!important}.color-secondary-darker-10{color:#484446!important}.color-secondary-darker-20{color:#2e2b2d!important}.color-secondary-darker-30{color:#131313!important}.color-secondary-darker-40,.color-secondary-darker-50{color:#000!important}.color-secondary-lighter-10{color:#7c767a!important}.color-secondary-lighter-20{color:#959093!important}.color-secondary-lighter-30{color:#aeaaac!important}.color-secondary-lighter-40{color:#c7c4c6!important}.color-secondary-lighter-50{color:#e0dedf!important}.color-light{color:#dbd3d0!important}.color-light-darker-10{color:#c5b8b3!important}.color-light-darker-20{color:#af9d96!important}.color-light-darker-30{color:#998279!important}.color-light-darker-40{color:#7e6961!important}.color-light-darker-50{color:#61514b!important}.color-light-lighter-10{color:#f1eeed!important}.color-light-lighter-20,.color-light-lighter-30,.color-light-lighter-40,.color-light-lighter-50{color:#fff!important}.color-dark{color:#191919!important}.color-dark-darker-10,.color-dark-darker-20,.color-dark-darker-30,.color-dark-darker-40,.color-dark-darker-50{color:#000!important}.color-dark-lighter-10{color:#333!important}.color-dark-lighter-20{color:#4c4c4c!important}.color-dark-lighter-30{color:#666!important}.color-dark-lighter-40{color:#7f7f7f!important}.color-dark-lighter-50{color:#999!important}.color-success{color:#388e3c!important}.color-success-darker-10{color:#2a692d!important}.color-success-darker-20{color:#1b451d!important}.color-success-darker-30{color:#0d200e!important}.color-success-darker-40,.color-success-darker-50{color:#000!important}.color-success-lighter-10{color:#46b34b!important}.color-success-lighter-20{color:#68c46d!important}.color-success-lighter-30{color:#8dd290!important}.color-success-lighter-40{color:#b2e0b4!important}.color-success-lighter-50{color:#d6efd7!important}.color-info{color:#0288d1!important}.color-info-darker-10{color:#02679e!important}.color-info-darker-20{color:#01466c!important}.color-info-darker-30{color:#012539!important}.color-info-darker-40{color:#000507!important}.color-info-darker-50{color:#000!important}.color-info-lighter-10{color:#09a7fd!important}.color-info-lighter-20{color:#3cb9fd!important}.color-info-lighter-30{color:#6ecbfe!important}.color-info-lighter-40{color:#a1ddfe!important}.color-info-lighter-50{color:#d3efff!important}.color-warning{color:#f57c00!important}.color-warning-darker-10{color:#c26200!important}.color-warning-darker-20{color:#8f4800!important}.color-warning-darker-30{color:#5c2f00!important}.color-warning-darker-40{color:#291500!important}.color-warning-darker-50{color:#000!important}.color-warning-lighter-10{color:#ff9529!important}.color-warning-lighter-20{color:#ffae5c!important}.color-warning-lighter-30{color:#ffc88f!important}.color-warning-lighter-40{color:#ffe1c2!important}.color-warning-lighter-50{color:#fffaf5!important}.color-error{color:#d32f2f!important}.color-error-darker-10{color:#ab2424!important}.color-error-darker-20{color:#811b1b!important}.color-error-darker-30{color:#571212!important}.color-error-darker-40{color:#2d0909!important}.color-error-darker-50{color:#020101!important}.color-error-lighter-10{color:#dc5959!important}.color-error-lighter-20{color:#e58383!important}.color-error-lighter-30{color:#eeadad!important}.color-error-lighter-40{color:#f7d7d7!important}.color-error-lighter-50{color:#fff!important}.color-white{color:#fdfdfd!important}.color-black{color:#020202!important}.color-red{color:#d32f2f!important}.color-pink{color:#c2185b!important}.color-purple{color:#7b1fa2!important}.color-deepPurple{color:#512da8!important}.color-indigo{color:#303f9f!important}.color-blue{color:#1976d2!important}.color-lightBlue{color:#0288d1!important}.color-cyan{color:#0097a7!important}.color-teal{color:#00796b!important}.color-green{color:#388e3c!important}.color-lightGreen{color:#689f38!important}.color-lime{color:#afb42b!important}.color-yellow{color:#fbc02d!important}.color-amber{color:#ffa000!important}.color-orange{color:#f57c00!important}.color-deepOrange{color:#e64a19!important}.color-brown{color:#5d4037!important}.color-grey{color:#616161!important}.color-blueGrey{color:#455a64!important}.iogart-Button{margin:0;padding:.5rem 1rem;display:inline-flex;align-items:center;justify-content:center;flex-direction:row;flex-wrap:nowrap;gap:.5rem;box-sizing:border-box;appearance:none;font-family:"Inter, Avenir, Helvetica, Arial, sans-serif";font-weight:400;border:1px solid transparent;background-color:transparent;border-radius:.25rem;cursor:pointer;vertical-align:middle}.iogart-Button:before{content:"";width:0;height:0;position:absolute;top:0;left:0;display:none;background-color:transparent;border-radius:100%}.iogart-Button:not(:disabled):hover{position:relative;overflow:hidden}.iogart-Button:not(:disabled):hover:before{width:100%;height:100%;display:block;background-color:#191919f2;border-radius:initial}.iogart-Button .iogart-children{display:inline-flex;align-items:center;justify-content:center}.iogart-Button .iogart-preloader{width:100%;height:100%;display:none;align-items:center;justify-content:center;position:absolute;top:0;left:0;color:inherit;background-color:transparent}.iogart-Button+.iogart-Button{margin-left:.5rem}.iogart-Button.iogart-pill{border-radius:1.5rem}.iogart-Button.iogart-small{min-width:34px;min-height:34px;font-size:85%;line-height:1.05}.iogart-Button.iogart-small.iogart-pill{padding-left:1.25rem;padding-right:1.25rem}.iogart-Button.iogart-medium{min-width:40px;min-height:40px;font-size:100%;line-height:1.15}.iogart-Button.iogart-medium.iogart-pill{padding-left:1.35rem;padding-right:1.35rem}.iogart-Button.iogart-large{min-width:46px;min-height:46px;font-size:115%;line-height:1.25}.iogart-Button.iogart-large.iogart-pill{padding-left:1.5rem;padding-right:1.5rem}.iogart-Button.iogart-outlined{border-width:1px;border-style:solid;border-color:#29282d;color:#29282d}.iogart-Button.iogart-contained{color:#fdfdfd;background-color:#29282d}.iogart-Button.iogart-loading{position:relative;overflow:hidden}.iogart-Button.iogart-loading .iogart-children{opacity:0}.iogart-Button.iogart-loading .iogart-preloader{display:flex}.iogart-Button.iogart-disabled{cursor:not-allowed}.iogart-Button.iogart-disabled .iogart-children{opacity:.75}.iogart-Tag{margin:0;padding:0;display:inline-flex}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
//# sourceMappingURL=index.mjs.map
