const l = (...c) => {
  const t = (e) => e && typeof e == "object";
  return c.reduce((e, o) => (Object.keys(o).forEach((s) => {
    const a = e[s], r = o[s];
    Array.isArray(a) && Array.isArray(r) ? e[s] = a.concat(...r) : t(a) && t(r) ? e[s] = l(a, r) : e[s] = r;
  }), e), {});
}, n = (c) => c.replace(/^\w/, (t) => t.toUpperCase()), i = (c) => [...c].join(" ").replaceAll("  ", " ").replace(/\s+$/g, "");
export {
  n as capitalize,
  i as classNamesFromList,
  l as mergeDeep
};
//# sourceMappingURL=index.mjs.map
