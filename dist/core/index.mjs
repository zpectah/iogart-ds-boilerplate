const l = "DEMO VALUE", n = (s) => {
  const { className: e, style: t, classList: o = [] } = s, c = [e, ...o].join(" "), a = Object.assign({}, t);
  return {
    className: c,
    style: a
  };
};
export {
  l as DEMO_CONSTANT,
  n as useStyleProps
};
//# sourceMappingURL=index.mjs.map
