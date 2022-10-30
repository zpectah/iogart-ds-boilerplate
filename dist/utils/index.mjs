const n = (...s) => {
  const r = (e) => e && typeof e == "object";
  return s.reduce((e, o) => (Object.keys(o).forEach((t) => {
    const a = e[t], c = o[t];
    Array.isArray(a) && Array.isArray(c) ? e[t] = a.concat(...c) : r(a) && r(c) ? e[t] = n(a, c) : e[t] = c;
  }), e), {});
}, i = (s) => s.replace(/^\w/, (r) => r.toUpperCase());
export {
  i as capitalize,
  n as mergeDeep
};
//# sourceMappingURL=index.mjs.map
