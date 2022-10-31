const d = "DEMO VALUE";
var m = /* @__PURE__ */ ((s) => (s.default = "default", s.outlined = "outlined", s.contained = "contained", s))(m || {}), t = /* @__PURE__ */ ((s) => (s.small = "small", s.medium = "medium", s.large = "large", s))(t || {});
const n = (s) => {
  const { className: e, style: l, classList: a = [] } = s, c = [e, ...a].join(" "), o = Object.assign({}, l);
  return {
    className: c,
    style: o
  };
};
export {
  t as ButtonSizeKeys,
  m as ButtonVariantKeys,
  d as DEMO_CONSTANT,
  n as useStyleProps
};
//# sourceMappingURL=index.mjs.map
