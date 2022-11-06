const d = "DEMO VALUE";
var n = /* @__PURE__ */ ((s) => (s.default = "default", s.outlined = "outlined", s.contained = "contained", s))(n || {}), t = /* @__PURE__ */ ((s) => (s.small = "small", s.medium = "medium", s.large = "large", s))(t || {});
const m = (s) => {
  const { className: e, style: l, classList: a = [] } = s, c = [e, ...a].join(" "), o = Object.assign({}, l);
  return {
    className: c,
    style: o
  };
};
export {
  t as ButtonSizeKeys,
  n as ButtonVariantKeys,
  d as DEMO_CONSTANT,
  m as useStyleProps
};
//# sourceMappingURL=index.mjs.map
