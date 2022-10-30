import { createElement as a } from "react";
const l = (s) => {
  const { className: t, style: e, classList: o = [] } = s, c = [t, ...o].join(" "), n = Object.assign({}, e);
  return {
    className: c,
    style: n
  };
}, r = "_button_ssbae_1", u = {
  button: r
}, y = ({ ...s }) => {
  const { className: t, style: e } = l({ ...s });
  return {
    className: [u.button, t].join(" "),
    style: Object.assign({}, e)
  };
}, b = ({}) => ({}), d = (s) => {
  const {
    children: t,
    className: e,
    style: o,
    ...c
  } = s, {
    className: n,
    style: m
  } = y({
    className: e,
    style: o
  });
  return a("button", {
    className: n,
    style: m,
    ...c
  }, t);
}, N = "_tag_uwjou_1", g = {
  tag: N
}, i = ({ ...s }) => {
  const { className: t, style: e } = l({ ...s });
  return {
    className: [g.tag, t].join(" "),
    style: Object.assign({}, e)
  };
}, j = ({}) => ({}), S = (s) => {
  const {
    children: t,
    className: e,
    style: o
  } = s, {
    className: c,
    style: n
  } = i({
    className: e,
    style: o
  });
  return a("span", {
    className: c,
    style: n
  }, t);
};
export {
  d as Button,
  S as Tag,
  b as useButton,
  y as useButtonStyles,
  j as useTag,
  i as useTagStyles
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.id="@iogart-ds-boilerplate/components",e.appendChild(document.createTextNode("._button_ssbae_1{margin:0;padding:0;border:none;background-color:transparent}._tag_uwjou_1{margin:0;padding:0;display:inline-flex}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
//# sourceMappingURL=index.mjs.map
