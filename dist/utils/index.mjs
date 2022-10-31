const l = (...r) => {
  const c = (t) => t && typeof t == "object";
  return r.reduce((t, e) => (Object.keys(e).forEach((n) => {
    const s = t[n], o = e[n];
    Array.isArray(s) && Array.isArray(o) ? t[n] = s.concat(...o) : c(s) && c(o) ? t[n] = l(s, o) : t[n] = o;
  }), t), {});
}, f = (r, c = !1) => {
  const t = (o) => (new Array(2).join("0") + o).slice(-2);
  if (r.indexOf("#") === 0 && (r = r.slice(1)), r.length === 3 && (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]), r.length !== 6)
    throw new Error("Invalid HEX color.");
  let e = parseInt(r.slice(0, 2), 16), n = parseInt(r.slice(2, 4), 16), s = parseInt(r.slice(4, 6), 16);
  return c ? e * 0.299 + n * 0.587 + s * 0.114 > 186 ? "#000000" : "#ffffff" : (e = (255 - e).toString(16), n = (255 - n).toString(16), s = (255 - s).toString(16), "#" + t(e) + t(n) + t(s));
}, p = (r) => r.replace(/^\w/, (c) => c.toUpperCase()), g = (r) => [...r].join(" ").replaceAll("  ", " ").replace(/\s+$/g, "");
export {
  p as capitalize,
  g as classNamesFromList,
  f as invertColor,
  l as mergeDeep
};
//# sourceMappingURL=index.mjs.map
