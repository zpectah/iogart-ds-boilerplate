import xe, { createElement as Pe } from "react";
const je = (l) => {
  const { className: u, style: d, classList: v = [] } = l, b = [u, ...v].join(" "), y = Object.assign({}, d);
  return {
    className: b,
    style: y
  };
}, fr = (l) => [...l].join(" ").replaceAll("  ", " ").replace(/\s+$/g, ""), dr = "_button_w0crc_1", vr = "_small_w0crc_46", pr = "_medium_w0crc_51", mr = "_large_w0crc_56", gr = "_outlined_w0crc_61", _r = "_contained_w0crc_66", br = "_pill_w0crc_70", yr = "_loading_w0crc_75", hr = "_preloader_w0crc_79", Er = "_disabled_w0crc_90", j = {
  button: dr,
  small: vr,
  medium: pr,
  large: mr,
  outlined: gr,
  contained: _r,
  pill: br,
  loading: yr,
  preloader: hr,
  disabled: Er
}, Rr = ({
  variant: l = "default",
  size: u = "medium",
  pill: d,
  loading: v,
  disabled: b,
  ...y
}) => {
  const { className: w, style: h } = je({ ...y });
  return {
    className: fr([
      j.button,
      j[u],
      j[l],
      d && j.pill,
      v && j.loading,
      b && j.disabled,
      w
    ]),
    style: Object.assign({}, h),
    preloaderClassName: j.preloader
  };
};
var z = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function wr() {
  if (Oe)
    return $;
  Oe = 1;
  var l = xe, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, b = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(h, p, S) {
    var m, R = {}, T = null, k = null;
    S !== void 0 && (T = "" + S), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (k = p.ref);
    for (m in p)
      v.call(p, m) && !y.hasOwnProperty(m) && (R[m] = p[m]);
    if (h && h.defaultProps)
      for (m in p = h.defaultProps, p)
        R[m] === void 0 && (R[m] = p[m]);
    return { $$typeof: u, type: h, key: T, ref: k, props: R, _owner: b.current };
  }
  return $.Fragment = d, $.jsx = w, $.jsxs = w, $;
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
var Se;
function Tr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var l = xe, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), M = Symbol.iterator, J = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[J];
      return typeof r == "function" ? r : null;
    }
    var N = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var n = N.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, De = !1, Ae = !1, Ie = !1, $e = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === y || $e || e === b || e === S || e === m || Ie || e === k || Fe || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === w || e.$$typeof === h || e.$$typeof === p || e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function C(e) {
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
        case b:
          return "StrictMode";
        case S:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ne(r) + ".Consumer";
          case w:
            var t = e;
            return ne(t._context) + ".Provider";
          case p:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case T: {
            var i = e, s = i._payload, o = i._init;
            try {
              return C(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, ae, oe, ie, se, le, ue, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, le = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: se
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = N.ReactCurrentDispatcher, K;
    function L(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var H = !1, V;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ve();
    }
    function de(e, r) {
      if (!e || H)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = G.current, G.current = null, Me();
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
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), _ = n.stack.split(`
`), c = a.length - 1, f = _.length - 1; c >= 1 && f >= 0 && a[c] !== _[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== _[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== _[f]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, E), E;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = s, Le(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Ce = D ? L(D) : "";
      return typeof e == "function" && V.set(e, Ce), Ce;
    }
    function Ue(e, r, t) {
      return de(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case S:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ue(e.render);
          case R:
            return U(e.type, r, t);
          case T: {
            var n = e, i = n._payload, s = n._init;
            try {
              return U(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, ve = {}, pe = N.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var s = Function.call.bind(B);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, q(i), g("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var ze = Array.isArray;
    function X(e) {
      return ze(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ge(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), me(e);
    }
    var I = N.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, be, Z;
    Z = {};
    function He(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = C(I.current.type);
        Z[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(I.current.type), e.ref), Z[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          _e || (_e = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: u,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: s
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
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, _ = null;
        t !== void 0 && (ge(t), a = "" + t), Xe(r) && (ge(r.key), a = "" + r.key), He(r) && (_ = r.ref, Ze(r, i));
        for (s in r)
          B.call(r, s) && !Ke.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || _) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, f), _ && er(o, f);
        }
        return rr(e, a, _, i, n, I.current, o);
      }
    }
    var Q = N.ReactCurrentOwner, ye = N.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function he() {
      {
        if (Q.current) {
          var e = C(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function ar(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + C(e._owner.type) + "."), F(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Re(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              re(o.value) && Re(o.value, r);
        }
      }
    }
    function or(e) {
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
          var n = C(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var i = C(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
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
    function Te(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = nr(i);
          _ ? a += _ : a += he();
          var c;
          e === null ? c = "null" : X(e) ? c = "array" : e !== void 0 && e.$$typeof === u ? (c = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = tr(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (X(E)) {
                for (var D = 0; D < E.length; D++)
                  we(E[D], e);
                Object.freeze && Object.freeze(E);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(E, e);
        }
        return e === v ? ir(f) : or(f), f;
      }
    }
    function sr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var ur = lr, cr = sr;
    W.Fragment = v, W.jsx = ur, W.jsxs = cr;
  }()), W;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = wr() : l.exports = Tr();
})(z);
const Cr = z.exports.Fragment, x = z.exports.jsx, Y = z.exports.jsxs, Or = (l) => {
  const {
    size: u = 16,
    color: d = "currentColor",
    ...v
  } = l;
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
      children: [/* @__PURE__ */ x("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ x("animate", {
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
      children: [/* @__PURE__ */ x("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ x("animate", {
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
      children: [/* @__PURE__ */ x("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
      }), /* @__PURE__ */ x("animate", {
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
}, Sr = ({
  children: l,
  startIcon: u,
  endIcon: d,
  loading: v,
  preloaderClassName: b
}) => ({
  children: /* @__PURE__ */ Y(Cr, {
    children: [u && u, l, d && d, v && /* @__PURE__ */ x("span", {
      className: b,
      children: /* @__PURE__ */ x(Or, {
        size: 10
      })
    })]
  })
}), Nr = (l) => {
  const {
    children: u,
    className: d,
    style: v,
    variant: b,
    size: y,
    pill: w,
    loading: h,
    startIcon: p,
    endIcon: S,
    disabled: m,
    ...R
  } = l, {
    className: T,
    style: k,
    preloaderClassName: M
  } = Rr({
    className: d,
    style: v,
    variant: b,
    size: y,
    pill: w,
    loading: h,
    disabled: m
  }), {
    children: J
  } = Sr({
    children: u,
    startIcon: p,
    endIcon: S,
    loading: h,
    preloaderClassName: M
  });
  return Pe("button", {
    className: T,
    style: k,
    disabled: m,
    ["aria-disabled"]: m,
    ...R
  }, J);
}, xr = "_tag_uwjou_1", Pr = {
  tag: xr
}, jr = ({ ...l }) => {
  const { className: u, style: d } = je({ ...l });
  return {
    className: [Pr.tag, u].join(" "),
    style: Object.assign({}, d)
  };
}, Fr = ({}) => ({}), Dr = (l) => {
  const {
    children: u,
    className: d,
    style: v
  } = l, {
    className: b,
    style: y
  } = jr({
    className: d,
    style: v
  });
  return Pe("span", {
    className: b,
    style: y
  }, u);
};
export {
  Nr as Button,
  Dr as Tag,
  Sr as useButton,
  Rr as useButtonStyles,
  Fr as useTag,
  jr as useTagStyles
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.id="@iogart-ds-boilerplate/components",e.appendChild(document.createTextNode('._button_w0crc_1{margin:0;padding:.5rem 1rem;display:inline-flex;align-items:center;justify-content:center;flex-direction:row;flex-wrap:nowrap;gap:.5rem;box-sizing:border-box;appearance:button;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-weight:600;border:1px solid transparent;background-color:transparent;border-radius:.25rem;cursor:pointer;vertical-align:middle}._button_w0crc_1:before{content:"";position:absolute;top:0;left:0;background-color:transparent;transition:background-color .125s ease-in-out 0s}._button_w0crc_1:not(:disabled):hover{position:relative;overflow:hidden}._button_w0crc_1:not(:disabled):hover:before{width:100%;height:100%;display:block;background-color:#19191912}._button_w0crc_1+._button_w0crc_1{margin-left:.35rem}._button_w0crc_1._small_w0crc_46{min-height:34px;font-size:.825rem;line-height:1.05}._button_w0crc_1._medium_w0crc_51{min-height:40px;font-size:1rem;line-height:1.15}._button_w0crc_1._large_w0crc_56{min-height:46px;font-size:1.105rem;line-height:1.25}._button_w0crc_1._outlined_w0crc_61{border-width:1px;border-style:solid;border-color:#191919bf}._button_w0crc_1._contained_w0crc_66{color:#fafafa;background-color:#191919}._button_w0crc_1._pill_w0crc_70{padding-left:1.25rem;padding-right:1.25rem;border-radius:5rem}._button_w0crc_1._loading_w0crc_75{position:relative;overflow:hidden}._button_w0crc_1._loading_w0crc_75 ._preloader_w0crc_79{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;background-color:#c8c8c880}._button_w0crc_1._disabled_w0crc_90{opacity:.5}._tag_uwjou_1{margin:0;padding:0;display:inline-flex}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
//# sourceMappingURL=index.mjs.map
