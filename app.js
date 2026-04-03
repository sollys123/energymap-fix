(() => {
  const { useState, useEffect, useRef, useMemo, useCallback } = React;
  const Ic = ({ children, size = 20, cl = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: cl }, children);
  const XIcon = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M18 6 6 18" }), /* @__PURE__ */ React.createElement("path", { d: "m6 6 12 12" }));
  const Activity = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }));
  const BarChart3 = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 3v18h18" }), /* @__PURE__ */ React.createElement("path", { d: "M18 17V9" }), /* @__PURE__ */ React.createElement("path", { d: "M13 17V5" }), /* @__PURE__ */ React.createElement("path", { d: "M8 17v-3" }));
  const Coins = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "6" }), /* @__PURE__ */ React.createElement("path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }));
  const ArrowLeft = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m12 19-7-7 7-7" }), /* @__PURE__ */ React.createElement("path", { d: "M19 12H5" }));
  const ChevronL = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m15 18-6-6 6-6" }));
  const ChevronR = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 18 6-6-6-6" }));
  const Layers = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }), /* @__PURE__ */ React.createElement("polyline", { points: "2 17 12 22 22 17" }), /* @__PURE__ */ React.createElement("polyline", { points: "2 12 12 17 22 12" }));
  const BatteryC = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }), /* @__PURE__ */ React.createElement("line", { x1: "23", x2: "23", y1: "13", y2: "11" }), /* @__PURE__ */ React.createElement("polyline", { points: "11 6 7 12 13 12 9 18" }));
  const Download = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "7 10 12 15 17 10" }), /* @__PURE__ */ React.createElement("line", { x1: "12", x2: "12", y1: "15", y2: "3" }));
  const Edit3 = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 20h9" }), /* @__PURE__ */ React.createElement("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }));
  const Eye = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
  const DollarSign = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("line", { x1: "12", x2: "12", y1: "2", y2: "22" }), /* @__PURE__ */ React.createElement("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }));
  const Upload = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 8 12 3 7 8" }), /* @__PURE__ */ React.createElement("line", { x1: "12", x2: "12", y1: "3", y2: "15" }));
  const ArchiveIc = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }), /* @__PURE__ */ React.createElement("path", { d: "M10 12h4" }));
  const Plus = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("line", { x1: "12", x2: "12", y1: "5", y2: "19" }), /* @__PURE__ */ React.createElement("line", { x1: "5", x2: "19", y1: "12", y2: "12" }));
  const Trash = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("polyline", { points: "3 6 5 6 21 6" }), /* @__PURE__ */ React.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
  const MapPin = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "3" }));
  const Route = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "19", r: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "5", r: "3" }));
  const StickyNote = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 3v4a2 2 0 0 0 2 2h4" }));
  const Palette = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "6.5", cy: "12", r: ".5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z" }));
  const CircleIc = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }));
  const RectIc = (p) => /* @__PURE__ */ React.createElement(Ic, { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }));
  const ADCODE = {
    "\u6CB3\u5317\u7701": 13e4,
    "\u5C71\u897F\u7701": 14e4,
    "\u5E7F\u4E1C\u7701": 44e4,
    "\u7518\u8083\u7701": 62e4,
    "\u6CB3\u5357\u7701": 41e4,
    "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A": 64e4,
    "\u6C5F\u82CF\u7701": 32e4,
    "\u6D59\u6C5F\u7701": 33e4,
    "\u9655\u897F\u7701": 61e4,
    "\u5317\u4EAC\u5E02": 11e4,
    "\u5929\u6D25\u5E02": 12e4,
    "\u5C71\u4E1C\u7701": 37e4,
    "\u5B89\u5FBD\u7701": 34e4,
    "\u798F\u5EFA\u7701": 35e4,
    "\u4E0A\u6D77\u5E02": 31e4,
    "\u6E56\u5317\u7701": 42e4,
    "\u6E56\u5357\u7701": 43e4,
    "\u6C5F\u897F\u7701": 36e4,
    "\u5409\u6797\u7701": 22e4,
    "\u9ED1\u9F99\u6C5F\u7701": 23e4,
    "\u8FBD\u5B81\u7701": 21e4,
    "\u5185\u8499\u53E4\u81EA\u6CBB\u533A": 15e4,
    "\u9752\u6D77\u7701": 63e4,
    "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A": 65e4,
    "\u56DB\u5DDD\u7701": 51e4,
    "\u91CD\u5E86\u5E02": 5e5,
    "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A": 45e4,
    "\u8D35\u5DDE\u7701": 52e4,
    "\u4E91\u5357\u7701": 53e4,
    "\u6D77\u5357\u7701": 46e4,
    "\u897F\u85CF\u81EA\u6CBB\u533A": 54e4,
    "\u53F0\u6E7E\u7701": 71e4,
    "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A": 81e4
  };
  const ALL_PROVINCES = Object.keys(ADCODE);
  const REQUIRED_PROVINCE_CODES = Object.values(ADCODE).map(String);
  const ALIAS = { "\u5317\u4EAC": "\u5317\u4EAC\u5E02", "\u5929\u6D25": "\u5929\u6D25\u5E02", "\u6CB3\u5317\u5357\u7F51": "\u6CB3\u5317\u7701", "\u5180\u5317": "\u6CB3\u5317\u7701", "\u5C71\u4E1C": "\u5C71\u4E1C\u7701", "\u5C71\u897F": "\u5C71\u897F\u7701", "\u5B89\u5FBD": "\u5B89\u5FBD\u7701", "\u798F\u5EFA": "\u798F\u5EFA\u7701", "\u4E0A\u6D77": "\u4E0A\u6D77\u5E02", "\u6C5F\u82CF": "\u6C5F\u82CF\u7701", "\u6D59\u6C5F": "\u6D59\u6C5F\u7701", "\u6E56\u5317": "\u6E56\u5317\u7701", "\u6E56\u5357": "\u6E56\u5357\u7701", "\u6CB3\u5357": "\u6CB3\u5357\u7701", "\u6C5F\u897F": "\u6C5F\u897F\u7701", "\u5409\u6797": "\u5409\u6797\u7701", "\u9ED1\u9F99\u6C5F": "\u9ED1\u9F99\u6C5F\u7701", "\u8FBD\u5B81": "\u8FBD\u5B81\u7701", "\u7518\u8083": "\u7518\u8083\u7701", "\u5B81\u590F": "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A", "\u9752\u6D77": "\u9752\u6D77\u7701", "\u9655\u897F": "\u9655\u897F\u7701", "\u65B0\u7586": "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A", "\u56DB\u5DDD": "\u56DB\u5DDD\u7701", "\u91CD\u5E86": "\u91CD\u5E86\u5E02", "\u5E7F\u4E1C": "\u5E7F\u4E1C\u7701", "\u5E7F\u897F": "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A", "\u8D35\u5DDE": "\u8D35\u5DDE\u7701", "\u4E91\u5357": "\u4E91\u5357\u7701", "\u6D77\u5357": "\u6D77\u5357\u7701", "\u8499\u897F": "\u5185\u8499\u53E4\u81EA\u6CBB\u533A", "\u8499\u4E1C": "\u5185\u8499\u53E4\u81EA\u6CBB\u533A" };
  const norm = (n) => ALIAS[n] || n;
  const shortName = (n) => (n || "").replace(/省|市|自治区|回族|壮族|维吾尔|特别行政区/g, "");
  const resolveProvinceName = (rawName) => {
    if (!rawName) return null;
    if (ADCODE[rawName]) return rawName;
    const normalized = norm(rawName);
    if (ADCODE[normalized]) return normalized;
    const candidates = [
      `${rawName}\u7701`,
      `${rawName}\u5E02`,
      `${rawName}\u81EA\u6CBB\u533A`,
      `${rawName}\u7279\u522B\u884C\u653F\u533A`
    ];
    for (const c of candidates) {
      if (ADCODE[c]) return c;
    }
    const rawShort = shortName(rawName);
    return ALL_PROVINCES.find((p) => shortName(p) === rawShort) || null;
  };
  const hoverColor = "#fbbf24";
  const MAP_STORE = window.__HEATMAP_MAP_STORE__ || (window.__HEATMAP_MAP_STORE__ = { china: null, provinces: {}, loadedScripts: {} });
  const LOCAL_MAP_SCRIPT_PATHS = {
    china: "./maps/china.js",
    province: (code) => `./maps/provinces/${code}.js`
  };
  const loadScriptOnce = (src) => {
    if (MAP_STORE.loadedScripts[src] === "loaded") return Promise.resolve();
    if (MAP_STORE.loadedScripts[src]) return MAP_STORE.loadedScripts[src];
    MAP_STORE.loadedScripts[src] = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-dynamic-src="${src}"]`);
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(`\u811A\u672C\u52A0\u8F7D\u5931\u8D25: ${src}`)), { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.dataset.dynamicSrc = src;
      script.onload = () => {
        MAP_STORE.loadedScripts[src] = "loaded";
        resolve();
      };
      script.onerror = () => {
        delete MAP_STORE.loadedScripts[src];
        reject(new Error(`\u811A\u672C\u52A0\u8F7D\u5931\u8D25: ${src}`));
      };
      document.head.appendChild(script);
    });
    return MAP_STORE.loadedScripts[src];
  };
  const normalizeChinaGeoJSON = (geo) => {
    if (!geo || !Array.isArray(geo.features)) return geo;
    if (geo.__normalizedForHeatmap) return geo;
    const normalized = { ...geo, features: geo.features.map((feature) => {
      const next = { ...feature, properties: { ...feature.properties || {} } };
      const resolved = resolveProvinceName(next.properties?.name) || next.properties?.name;
      if (resolved) next.properties.name = resolved;
      return next;
    }) };
    normalized.__normalizedForHeatmap = true;
    return normalized;
  };
  const ensureChinaGeoJSON = async () => {
    if (!MAP_STORE.china) {
      await loadScriptOnce(LOCAL_MAP_SCRIPT_PATHS.china);
    }
    if (MAP_STORE.china) {
      MAP_STORE.china = normalizeChinaGeoJSON(MAP_STORE.china);
      return MAP_STORE.china;
    }
    throw new Error("\u5168\u56FD\u5730\u56FE\u6587\u4EF6\u7F3A\u5931");
  };
  const ensureProvinceGeoJSON = async (code) => {
    const key = String(code);
    if (!MAP_STORE.provinces[key]) {
      await loadScriptOnce(LOCAL_MAP_SCRIPT_PATHS.province(key));
    }
    if (MAP_STORE.provinces[key]) return MAP_STORE.provinces[key];
    throw new Error(`\u7701\u7EA7\u5730\u56FE\u6587\u4EF6\u7F3A\u5931: ${key}`);
  };
  const PROVINCE_CENTERS = {
    "\u5317\u4EAC\u5E02": [116.4, 39.9],
    "\u5929\u6D25\u5E02": [117.2, 39.12],
    "\u6CB3\u5317\u7701": [114.48, 38.03],
    "\u5C71\u897F\u7701": [112.55, 37.87],
    "\u5185\u8499\u53E4\u81EA\u6CBB\u533A": [111.67, 40.82],
    "\u8FBD\u5B81\u7701": [123.43, 41.8],
    "\u5409\u6797\u7701": [125.32, 43.9],
    "\u9ED1\u9F99\u6C5F\u7701": [126.63, 45.75],
    "\u4E0A\u6D77\u5E02": [121.47, 31.23],
    "\u6C5F\u82CF\u7701": [118.78, 32.04],
    "\u6D59\u6C5F\u7701": [120.15, 30.28],
    "\u5B89\u5FBD\u7701": [117.28, 31.86],
    "\u798F\u5EFA\u7701": [119.3, 26.08],
    "\u6C5F\u897F\u7701": [115.89, 28.68],
    "\u5C71\u4E1C\u7701": [117, 36.67],
    "\u6CB3\u5357\u7701": [113.62, 34.75],
    "\u6E56\u5317\u7701": [114.31, 30.52],
    "\u6E56\u5357\u7701": [112.98, 28.19],
    "\u5E7F\u4E1C\u7701": [113.27, 23.13],
    "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A": [108.32, 22.82],
    "\u6D77\u5357\u7701": [110.35, 20.02],
    "\u91CD\u5E86\u5E02": [106.55, 29.56],
    "\u56DB\u5DDD\u7701": [104.06, 30.67],
    "\u8D35\u5DDE\u7701": [106.71, 26.57],
    "\u4E91\u5357\u7701": [102.71, 25.04],
    "\u897F\u85CF\u81EA\u6CBB\u533A": [91.11, 29.65],
    "\u9655\u897F\u7701": [108.95, 34.27],
    "\u7518\u8083\u7701": [103.73, 36.03],
    "\u9752\u6D77\u7701": [101.78, 36.62],
    "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A": [106.28, 38.47],
    "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A": [87.62, 43.82],
    "\u53F0\u6E7E\u7701": [121.52, 25.05],
    "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A": [114.17, 22.32],
    "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A": [113.54, 22.19]
  };
  const createRectFeature = (name, center = [104.11, 35.55], halfWidth = 2.8, halfHeight = 1.9) => {
    const [lng, lat] = center;
    return {
      type: "Feature",
      properties: { name },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [lng - halfWidth, lat - halfHeight],
          [lng + halfWidth, lat - halfHeight],
          [lng + halfWidth, lat + halfHeight],
          [lng - halfWidth, lat + halfHeight],
          [lng - halfWidth, lat - halfHeight]
        ]]
      }
    };
  };
  const buildFallbackChinaGeoJSON = () => ({
    type: "FeatureCollection",
    features: ALL_PROVINCES.map((name) => createRectFeature(name, PROVINCE_CENTERS[name] || [104.11, 35.55], 2.6, 1.75))
  });
  const buildFallbackProvinceGeoJSON = (provinceName) => ({
    type: "FeatureCollection",
    features: [createRectFeature(provinceName, PROVINCE_CENTERS[provinceName] || [104.11, 35.55], 3.8, 2.6)]
  });
  const makeDefaultEntry = (name) => ({
    title: name,
    totalVolume: "\u6682\u65E0\u6570\u636E",
    marketVolumeDisplay: "\u6682\u65E0\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u70B9\u51FB\u7F16\u8F91\u6A21\u5F0F\u6DFB\u52A0\u6570\u636E",
    tags: [],
    details: [],
    notes: "",
    color: null
  });
  const INIT_FREQ = {
    "\u6CB3\u5317\u7701": { title: "\u6CB3\u5317\u7701(\u5357\u7F51)", totalVolume: "5000\u4E07\u5143", marketVolumeDisplay: "\u6BCF\u6708\u50A8\u80FD\u5206\u644A\u4EFD\u989D\u7EA65000\u4E07\u5143", tags: ["\u70ED\u5EA6\u6700\u9AD8", "2026\u5F00\u653E"], details: [{ label: "\u6570\u636E\u6765\u6E90", value: "\u6CB3\u5317\u5357\u7F51\u4EA4\u6613\u4E2D\u5FC3" }], mapValue: 5e3 },
    "\u6CB3\u5357\u7701": { title: "\u6CB3\u5357\u7701", totalVolume: "4000\u4E07\u5143", marketVolumeDisplay: "\u6BCF\u6708\u50A8\u80FD\u5206\u644A\u4EFD\u989D\u7EA64000\u4E07\u5143", tags: ["\u70ED\u5EA6\u9AD8", "2027\u5F00\u653E"], details: [{ label: "\u6570\u636E\u6765\u6E90", value: "\u6CB3\u5357\u8C03\u5EA6\u8BA1\u5212\u5904\u4E3B\u4EFB" }], mapValue: 4e3 },
    "\u5E7F\u4E1C\u7701": { title: "\u5E7F\u4E1C\u7701", totalVolume: "5000\u4E07\u5143", marketVolumeDisplay: "\u6BCF\u6708\u72EC\u7ACB\u50A8\u80FD\u5E02\u573A\u603B\u91CF5000\u4E07\u5143", tags: ["\u6570\u636E\u8BE6\u5B9E", "\u6536\u76CA\u5360\u6BD490%"], details: [{ label: "\u6570\u636E\u6765\u6E90", value: "5-7\u6708\u6536\u76CA\u8868" }], mapValue: 5e3 },
    "\u5C71\u897F\u7701": { title: "\u5C71\u897F\u7701", totalVolume: "4100\u4E07\u5143", marketVolumeDisplay: "\u6BCF\u6708\u5E02\u573A\u603B\u91CF4100\u4E07\u5143", tags: ["\u5E02\u573A\u6210\u719F", "\u5360\u6BD480%"], details: [{ label: "\u6570\u636E\u6765\u6E90", value: "\u5B9E\u5730\u8C03\u7814(1-3\u6708\u6536\u76CA\u8868)" }], mapValue: 4100 },
    "\u7518\u8083\u7701": { title: "\u7518\u8083\u7701", totalVolume: "2500-2600\u4E07\u5143", marketVolumeDisplay: "25\u5E747-9\u6708\u8C03\u9891\u603B\u989D\u8FDE\u7EED\u4E0A\u884C\u81F3\u7EA62500-2600\u4E07\u5143", tags: ["\u8D8B\u52BF\u4E0A\u6DA8"], details: [{ label: "\u6570\u636E\u6765\u6E90", value: "\u7518\u8083\u7535\u529B\u4EA4\u6613\u4E2D\u5FC3" }, { label: "\u6700\u65B0\u8FDB\u5C55", value: "8\u30019\u6708\u5DF2\u4E0A\u6DA8\u81F3\u7EA62600\u4E07\u5143" }], mapValue: 2500 },
    "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A": { title: "\u5B81\u590F", totalVolume: "500\u4E07\u5143", marketVolumeDisplay: "\u6BCF\u6708\u603B\u91CF500\u4E07\u5143", tags: ["\u6DA8\u5E45\u4E0D\u5927"], details: [{ label: "\u6570\u636E\u6765\u6E90", value: "\u5B9E\u5730\u8C03\u7814" }], mapValue: 500 }
  };
  const INIT_ENERGY_RAW = {
    "\u5317\u4EAC\u5E02": { range: [0.318, 0.596], display: "0.318~0.596", note: "\u534E\u5317\uFF1A\u5CF0\u8C37\u4EF7\u5DEE", cat: "market" },
    "\u5929\u6D25\u5E02": { value: 0.51, display: "0.51", note: "\u534E\u5317", cat: "market" },
    "\u6CB3\u5317\u7701": { range: [0.43, 0.6], display: "0.43\u20130.6", note: "\u4E24\u5145\u4E24\u653E~0.43\uFF1B\u4E00\u5145\u4E00\u653E~0.6", cat: "actual" },
    "\u5C71\u4E1C\u7701": { value: 0.601, display: "0.601", note: "\u534E\u5317", cat: "market" },
    "\u5C71\u897F\u7701": { value: 0.45, display: "0.45", note: "\u534E\u5317\uFF1A\u6D4B\u7B97", cat: "actual" },
    "\u5B89\u5FBD\u7701": { range: [0.257, 0.607], display: "0.257~0.607", note: "\u534E\u4E1C", cat: "market" },
    "\u798F\u5EFA\u7701": { range: [0.216, 0.452], display: "0.216~0.452", note: "\u534E\u4E1C", cat: "market" },
    "\u4E0A\u6D77\u5E02": { value: 0.679, display: "0.679", note: "\u4E00\u6B21\u8C37\u5145\u5CF0\u653E", cat: "market" },
    "\u6C5F\u82CF\u7701": { value: 0.2, display: "0.2", note: "\u534E\u4E1C\uFF1A\u5B9E\u6D4B", cat: "actual" },
    "\u6D59\u6C5F\u7701": { value: 0.1, display: "0.1", note: "\u534E\u4E1C\uFF1A\u5B9E\u6D4B", cat: "actual" },
    "\u6CB3\u5357\u7701": { value: 0.4, display: "0.4", note: "\u534E\u4E2D\uFF1A\u5B9E\u6D4B", cat: "actual" },
    "\u6E56\u5317\u7701": { range: [0.229, 0.562], display: "0.229~0.562", note: "\u534E\u4E2D\uFF1A\u4E24\u5C0F\u65F6\u5C16\u5CF0", cat: "market" },
    "\u6E56\u5357\u7701": { range: [0.246, 0.492], display: "0.246~0.492", note: "\u534E\u4E2D", cat: "market" },
    "\u6C5F\u897F\u7701": { range: [0.273, 0.547], display: "0.273~0.547", note: "\u534E\u4E2D", cat: "market" },
    "\u5409\u6797\u7701": { value: 0.469, display: "0.469", note: "\u4E1C\u5317", cat: "market" },
    "\u9ED1\u9F99\u6C5F\u7701": { value: 0.395, display: "0.395", note: "\u4E1C\u5317", cat: "market" },
    "\u8FBD\u5B81\u7701": { value: 0.423, display: "0.423", note: "\u4E1C\u5317", cat: "market" },
    "\u5185\u8499\u53E4\u81EA\u6CBB\u533A": { range: [0.223, 0.407], display: "\u8499\u4E1C0.342\uFF1B\u8499\u897F0.223~0.407", note: "\u8499\u4E1C/\u8499\u897F", cat: "market" },
    "\u7518\u8083\u7701": { value: 0.27, display: "0.27\uFF08\u6CB3\u897F\u5747\u4EF7\uFF09", note: "454\u4E2A\u8282\u70B9", cat: "actual" },
    "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A": { value: 0.32, display: "0.32", note: "\u53EF\u505A\u91D1\u878D\u5957\u5229", cat: "actual" },
    "\u9752\u6D77\u7701": { range: [0.231, 0.455], display: "0.231~0.455", note: "\u897F\u5317", cat: "market" },
    "\u9655\u897F\u7701": { value: 0.4, display: "0.4", note: "\u897F\u5317\uFF1A\u5B9E\u6D4B", cat: "actual" },
    "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A": { range: [0.136, 0.29], display: "0.136~0.290", note: "\u897F\u5317", cat: "market" },
    "\u56DB\u5DDD\u7701": { range: [0.166, 0.332], display: "0.166~0.332", note: "\u897F\u5357", cat: "market" },
    "\u91CD\u5E86\u5E02": { range: [0.262, 0.533], display: "0.262~0.533", note: "\u897F\u5357", cat: "market" },
    "\u5E7F\u4E1C\u7701": { value: 0.18, display: "0.18", note: "\u5357\u7F51\uFF1A\u5B9E\u6D4B", cat: "actual" },
    "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A": { range: [0.205, 0.411], display: "0.205~0.411", note: "\u5357\u7F51", cat: "market" },
    "\u8D35\u5DDE\u7701": { range: [0.231, 0.463], display: "0.231~0.463", note: "\u5357\u7F51", cat: "market" },
    "\u4E91\u5357\u7701": { value: 0.28, display: "0.28", note: "\u5357\u7F51", cat: "market" },
    "\u6D77\u5357\u7701": { range: [0.397, 0.737], display: "0.397~0.737", note: "\u5357\u7F51", cat: "market" }
  };
  const buildEnergyEntries = () => {
    const out = {};
    Object.entries(INIT_ENERGY_RAW).forEach(([n, info]) => {
      const mid = info.value ?? ((info.range?.[0] || 0) + (info.range?.[1] || 0)) / 2;
      out[n] = {
        title: `${n} \u7535\u80FD\u91CF`,
        totalVolume: `${info.display} \u5143/kWh`,
        marketVolumeDisplay: info.note ? `${info.display} \u5143/kWh \uFF5C ${info.note}` : `${info.display} \u5143/kWh`,
        tags: [info.cat === "actual" ? "\u5B9E\u6D4B" : "\u5E02\u573A\u533A\u95F4"],
        details: [{ label: "\u4EF7\u5DEE", value: `${info.display} \u5143/kWh` }, info.note ? { label: "\u5907\u6CE8", value: info.note } : null].filter(Boolean),
        mapValue: mid,
        cat: info.cat,
        color: null
      };
    });
    return out;
  };
  const INIT_SPOT_PROGRESS_RAW = {
    "\u5E7F\u4E1C\u7701": { stage: "\u8FDE\u7EED\u7ED3\u7B97\u8BD5\u8FD0\u884C", note: "\u5DF2\u8FDB\u5165\u8FDE\u7EED\u8FD0\u884C\u9636\u6BB5" },
    "\u5C71\u897F\u7701": { stage: "\u73B0\u8D27\u6B63\u5F0F\u8FD0\u884C", note: "\u73B0\u8D27\u5E02\u573A\u673A\u5236\u76F8\u5BF9\u6210\u719F" },
    "\u5C71\u4E1C\u7701": { stage: "\u8FDE\u7EED\u7ED3\u7B97\u8BD5\u8FD0\u884C", note: "\u6301\u7EED\u4F18\u5316\u89C4\u5219\u4E0E\u7ED3\u7B97" },
    "\u7518\u8083\u7701": { stage: "\u8BD5\u8FD0\u884C", note: "\u6B63\u5728\u63A8\u8FDB\u73B0\u8D27\u8FD0\u884C\u80FD\u529B\u5EFA\u8BBE" }
  };
  const buildSpotProgressEntries = () => {
    const out = {};
    ALL_PROVINCES.forEach((n) => {
      const base = INIT_SPOT_PROGRESS_RAW[n];
      out[n] = {
        title: `${n} \u73B0\u8D27\u8FDB\u7A0B`,
        totalVolume: base?.stage || "\u5F85\u66F4\u65B0",
        marketVolumeDisplay: base?.note || "\u8BF7\u586B\u5199\u73B0\u8D27\u5E02\u573A\u9636\u6BB5\u8FDB\u5C55",
        spotStage: base?.stage || "",
        tags: ["\u73B0\u8D27\u8FDB\u7A0B"],
        details: [{ label: "\u73B0\u8D27\u9636\u6BB5", value: base?.stage || "\u5F85\u586B\u5199" }],
        mapValue: 1,
        color: base ? "#60a5fa" : null
      };
    });
    return out;
  };
  const INIT_CAPACITY = {};
  const capProvinces = { "\u7518\u8083\u7701": 330, "\u5C71\u897F\u7701": 100, "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A": 200, "\u6CB3\u5317\u7701": 150, "\u5C71\u4E1C\u7701": 120, "\u5185\u8499\u53E4\u81EA\u6CBB\u533A": 180, "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A": 160, "\u5E7F\u4E1C\u7701": 280, "\u6CB3\u5357\u7701": 130, "\u6C5F\u82CF\u7701": 200, "\u6D59\u6C5F\u7701": 180, "\u9752\u6D77\u7701": 220, "\u9655\u897F\u7701": 200, "\u6E56\u5317\u7701": 100, "\u6E56\u5357\u7701": 90, "\u56DB\u5DDD\u7701": 80, "\u4E91\u5357\u7701": 70, "\u8FBD\u5B81\u7701": 140, "\u5B89\u5FBD\u7701": 110 };
  Object.entries(capProvinces).forEach(([n, v]) => {
    INIT_CAPACITY[n] = { title: n, totalVolume: `${v} \u5143/kW\xB7\u5E74`, marketVolumeDisplay: `\u5BB9\u91CF\u7535\u4EF7 ${v} \u5143/kW\xB7\u5E74`, tags: [], details: [], mapValue: v, color: null };
  });
  const INIT_RESOURCE = {
    "\u6CB3\u5317\u7701": { wind: 32, solar: 26, hydro: 3, thermal: 45 },
    "\u5C71\u897F\u7701": { wind: 28, solar: 22, hydro: 2, thermal: 58 },
    "\u5E7F\u4E1C\u7701": { wind: 18, solar: 30, hydro: 16, thermal: 38 },
    "\u7518\u8083\u7701": { wind: 40, solar: 35, hydro: 6, thermal: 20 },
    "\u6CB3\u5357\u7701": { wind: 20, solar: 24, hydro: 5, thermal: 50 },
    "\u6C5F\u82CF\u7701": { wind: 26, solar: 34, hydro: 8, thermal: 40 },
    "\u6D59\u6C5F\u7701": { wind: 16, solar: 28, hydro: 12, thermal: 30 },
    "\u9655\u897F\u7701": { wind: 30, solar: 22, hydro: 10, thermal: 35 },
    "\u9752\u6D77\u7701": { wind: 22, solar: 40, hydro: 18, thermal: 12 },
    "\u56DB\u5DDD\u7701": { wind: 14, solar: 18, hydro: 60, thermal: 12 },
    "\u4E91\u5357\u7701": { wind: 20, solar: 22, hydro: 55, thermal: 10 },
    "\u8FBD\u5B81\u7701": { wind: 25, solar: 18, hydro: 8, thermal: 35 },
    "\u5185\u8499\u53E4\u81EA\u6CBB\u533A": { wind: 55, solar: 48, hydro: 5, thermal: 20 },
    "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A": { wind: 50, solar: 52, hydro: 8, thermal: 18 }
  };
  const RES_LABELS = { wind: "\u98CE\u7535(\u4E07\u5343\u74E6)", solar: "\u5149\u4F0F(\u4E07\u5343\u74E6)", hydro: "\u6C34\u7535(\u4E07\u5343\u74E6)", thermal: "\u706B\u7535(\u4E07\u5343\u74E6)" };
  const RES_KEY_ALIAS = { wind: "wind", solar: "solar", hydro: "hydro", thermal: "thermal", "\u98CE": "wind", "\u98CE\u7535": "wind", "\u5149": "solar", "\u5149\u4F0F": "solar", "\u6C34": "hydro", "\u6C34\u7535": "hydro", "\u706B": "thermal", "\u706B\u7535": "thermal" };
  const INIT_STORAGE = {
    "\u6CB3\u5317\u7701": { power: 1200, capacity: 2800, count: 42, filedCount: 35 },
    "\u5C71\u4E1C\u7701": { power: 1600, capacity: 3600, count: 58, filedCount: 48 },
    "\u5E7F\u4E1C\u7701": { power: 2100, capacity: 4600, count: 65, filedCount: 53 },
    "\u6C5F\u82CF\u7701": { power: 1450, capacity: 3200, count: 47, filedCount: 39 },
    "\u7518\u8083\u7701": { power: 980, capacity: 2300, count: 33, filedCount: 27 },
    "\u5185\u8499\u53E4\u81EA\u6CBB\u533A": { power: 1300, capacity: 3e3, count: 44, filedCount: 36 }
  };
  const MARKER_PRESETS = [
    { type: "N", label: "\u65B0\u80FD\u6E90(\u98CE/\u5149)", color: "#22c55e", symbol: "circle" },
    { type: "F", label: "\u706B\u7535/\u7164\u7535", color: "#7e22ce", symbol: "rect" },
    { type: "S", label: "\u8C03\u8282/\u6C34\u7535/\u6838\u7535", color: "#0ea5e9", symbol: "triangle" },
    { type: "L", label: "\u8D1F\u8377\u4E2D\u5FC3", color: "#0057F1", symbol: "diamond" },
    { type: "E", label: "\u50A8\u80FD\u7535\u7AD9", color: "#f59e0b", symbol: "circle" },
    { type: "C", label: "\u81EA\u5B9A\u4E49", color: "#ef4444", symbol: "circle" }
  ];
  const LegendBar = ({ palette, min, max, unit, label, ticks, vertical = true }) => {
    const gradStr = vertical ? `linear-gradient(to top, ${palette[0]}, ${palette[Math.floor(palette.length / 2)]}, ${palette[palette.length - 1]})` : `linear-gradient(to right, ${palette[0]}, ${palette[Math.floor(palette.length / 2)]}, ${palette[palette.length - 1]})`;
    const tickLabels = ticks || [
      { pos: "0%", text: `${min}${unit ?? " "}` },
      { pos: "50%", text: `${((min + max) / 2).toFixed(max >= 100 ? 0 : 2)}${unit ?? ""}` },
      { pos: "100%", text: `${max}${unit ?? ""}` }
    ];
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, label && /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, label), /* @__PURE__ */ React.createElement("div", { className: "flex items-stretch gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "legend-bar w-3 rounded-md", style: { background: gradStr, minHeight: 80 } }), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-between py-0.5", style: { minHeight: 80 } }, [...tickLabels].reverse().map((t, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "text-[10px] text-slate-500 leading-none whitespace-nowrap" }, t.text)))));
  };
  const APP_VERSION = "stable-static-1.0.0";
  const LOCAL_DRAFT_STORAGE_KEY = "__HEATMAP_DRAFT_DATA__";
  const DEFAULT_COLOR_SCALES = {
    frequency: ["#DBEAFE", "#60A5FA", "#2563EB", "#1E40AF", "#1E3A5F"],
    energy: ["#E0E7FF", "#818CF8", "#6366F1", "#4338CA", "#312E81"],
    spotProgress: ["#dbeafe", "#93c5fd", "#60a5fa", "#3b82f6", "#1d4ed8"],
    capacity: ["#FEF3C7", "#FBBF24", "#F59E0B", "#D97706", "#92400E"],
    resource: ["#D1FAE5", "#6EE7B7", "#34D399", "#059669", "#064E3B"],
    storage: ["#CCFBF1", "#5EEAD4", "#2DD4BF", "#0D9488", "#115E59"]
  };
  const cloneData = (value) => JSON.parse(JSON.stringify(value));
  const buildDefaultDataPayload = () => ({
    freqData: cloneData(INIT_FREQ),
    energyEntries: cloneData(buildEnergyEntries()),
    spotProgressData: cloneData(buildSpotProgressEntries()),
    capData: cloneData(INIT_CAPACITY),
    resEndow: cloneData(INIT_RESOURCE),
    storageData: cloneData(INIT_STORAGE),
    annotations: {},
    gridUploads: {},
    colorScales: cloneData(DEFAULT_COLOR_SCALES)
  });
  const normalizePayload = (payload = {}) => {
    const defaults = buildDefaultDataPayload();
    return {
      freqData: cloneData(payload.freqData || defaults.freqData),
      energyEntries: cloneData(payload.energyEntries || defaults.energyEntries),
      spotProgressData: cloneData(payload.spotProgressData || defaults.spotProgressData),
      capData: cloneData(payload.capData || defaults.capData),
      resEndow: cloneData(payload.resEndow || defaults.resEndow),
      storageData: cloneData(payload.storageData || defaults.storageData),
      annotations: cloneData(payload.annotations || defaults.annotations),
      gridUploads: cloneData(payload.gridUploads || defaults.gridUploads),
      colorScales: cloneData({ ...defaults.colorScales, ...payload.colorScales || {} })
    };
  };
  const buildPublishDataFile = (payload) => `window.__HEATMAP_PUBLISHED_DATA__ = ${JSON.stringify(normalizePayload(payload), null, 2)};
`;
  const parseImportedDataText = (text = "") => {
    const trimmed = String(text || "").trim();
    if (!trimmed) throw new Error("\u7A7A\u6587\u4EF6");
    if (/^window\.__HEATMAP_PUBLISHED_DATA__/.test(trimmed)) {
      const cleaned = trimmed.replace(/^window\.__HEATMAP_PUBLISHED_DATA__\s*=\s*/, "").replace(/;\s*$/, "");
      return JSON.parse(cleaned);
    }
    return JSON.parse(trimmed);
  };
  const getPublishedDataPayload = () => normalizePayload(window.__HEATMAP_PUBLISHED_DATA__ || {});
  const hashString = (str = "") => {
    let hash = 2166136261;
    for (let i = 0; i < str.length; i += 1) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
  };
  const getPayloadFingerprint = (payload) => hashString(JSON.stringify(normalizePayload(payload)));
  const loadDraftPayload = (publishedFingerprint) => {
    try {
      const raw = window.localStorage?.getItem(LOCAL_DRAFT_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed?.baseFingerprint !== publishedFingerprint) return null;
      return normalizePayload(parsed.payload || {});
    } catch (err) {
      console.warn("\u8BFB\u53D6\u672C\u5730\u8349\u7A3F\u5931\u8D25:", err?.message || err);
      return null;
    }
  };
  const saveDraftPayload = (payload, publishedFingerprint) => {
    try {
      const savedAt = (/* @__PURE__ */ new Date()).toISOString();
      window.localStorage?.setItem(LOCAL_DRAFT_STORAGE_KEY, JSON.stringify({
        appVersion: APP_VERSION,
        baseFingerprint: publishedFingerprint,
        savedAt,
        payload: normalizePayload(payload)
      }));
      return savedAt;
    } catch (err) {
      console.warn("\u4FDD\u5B58\u672C\u5730\u8349\u7A3F\u5931\u8D25:", err?.message || err);
      return null;
    }
  };
  const clearDraftPayload = () => {
    try {
      window.localStorage?.removeItem(LOCAL_DRAFT_STORAGE_KEY);
    } catch (err) {
      console.warn("\u6E05\u7406\u672C\u5730\u8349\u7A3F\u5931\u8D25:", err?.message || err);
    }
  };
  const formatSavedAt = (iso) => {
    if (!iso) return "\u672A\u4FDD\u5B58";
    try {
      return new Date(iso).toLocaleString("zh-CN", { hour12: false });
    } catch {
      return iso;
    }
  };
  const App = () => {
    const mapRef = useRef(null);
    const chartRef = useRef(null);
    const pieRef = useRef(null);
    const pieInst = useRef(null);
    const [marketType, setMarketType] = useState("frequency");
    const [energyView, setEnergyView] = useState("price");
    const [viewMode, setViewMode] = useState("china");
    const [curProvince, setCurProvince] = useState(null);
    const [selName, setSelName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mapError, setMapError] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarW, setSidebarW] = useState(280);
    const [isResizing, setIsResizing] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [showArchive, setShowArchive] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);
    const resizeRef = useRef({ x: 0, w: 280 });
    const publishedPayload = useMemo(() => getPublishedDataPayload(), []);
    const publishedFingerprint = useMemo(() => getPayloadFingerprint(publishedPayload), [publishedPayload]);
    const initialPayload = useMemo(() => loadDraftPayload(publishedFingerprint) || publishedPayload, [publishedFingerprint, publishedPayload]);
    const [draftSavedAt, setDraftSavedAt] = useState(null);
    const [freqData, setFreqData] = useState(() => cloneData(initialPayload.freqData));
    const [energyEntries, setEnergyEntries] = useState(() => cloneData(initialPayload.energyEntries));
    const [spotProgressData, setSpotProgressData] = useState(() => cloneData(initialPayload.spotProgressData));
    const [capData, setCapData] = useState(() => cloneData(initialPayload.capData));
    const [resEndow, setResEndow] = useState(() => cloneData(initialPayload.resEndow));
    const [resMetric, setResMetric] = useState("wind");
    const [resInput, setResInput] = useState("");
    const [storageData, setStorageData] = useState(() => cloneData(initialPayload.storageData));
    const [storageInput, setStorageInput] = useState("");
    const [annotations, setAnnotations] = useState(() => cloneData(initialPayload.annotations));
    const [gridUploads, setGridUploads] = useState(() => cloneData(initialPayload.gridUploads));
    const [colorScales, setColorScales] = useState(() => cloneData(initialPayload.colorScales));
    const [annoTool, setAnnoTool] = useState(null);
    const [annoColor, setAnnoColor] = useState("#22c55e");
    const [annoLabel, setAnnoLabel] = useState("");
    const [routeStart, setRouteStart] = useState(null);
    const [shapeStart, setShapeStart] = useState(null);
    const [annoOpacity, setAnnoOpacity] = useState(0.25);
    const buildCurrentPayload = useCallback(() => normalizePayload({ freqData, energyEntries, spotProgressData, capData, resEndow, storageData, annotations, gridUploads, colorScales }), [freqData, energyEntries, spotProgressData, capData, resEndow, storageData, annotations, gridUploads, colorScales]);
    const applyDataPayload = useCallback((payload) => {
      const normalized = normalizePayload(payload);
      setFreqData(normalized.freqData);
      setEnergyEntries(normalized.energyEntries);
      setSpotProgressData(normalized.spotProgressData);
      setCapData(normalized.capData);
      setResEndow(normalized.resEndow);
      setStorageData(normalized.storageData);
      setAnnotations(normalized.annotations);
      setGridUploads(normalized.gridUploads);
      setColorScales(normalized.colorScales);
      setSelName(null);
      setCurProvince(null);
      setViewMode("china");
      setShowArchive(false);
    }, []);
    const activeDataKey = useMemo(() => {
      if (marketType === "energy") return energyView === "spot-progress" ? "spotProgress" : "energy";
      return marketType;
    }, [marketType, energyView]);
    const sidebarTitle = useMemo(() => {
      if (viewMode === "province") return editMode ? "\u6807\u6CE8\u5DE5\u5177" : "\u7701\u7EA7\u56FE\u4F8B";
      if (marketType === "frequency") return "\u8C03\u9891\u8F85\u52A9\u670D\u52A1";
      if (marketType === "energy") return energyView === "spot-progress" ? "\u73B0\u8D27\u5E02\u573A\u8FDB\u7A0B" : "\u7535\u80FD\u91CF\u4EF7\u5DEE";
      if (marketType === "capacity") return "\u5BB9\u91CF\u7535\u4EF7";
      if (marketType === "resource") return "\u8D44\u6E90\u7980\u8D4B";
      if (marketType === "storage") return "\u72EC\u7ACB\u50A8\u80FD\u88C5\u673A";
      return "\u56FE\u4F8B";
    }, [viewMode, editMode, marketType, energyView]);
    const getEntry = (name) => {
      const datasets = { frequency: freqData, energy: energyEntries, spotProgress: spotProgressData, capacity: capData, storage: storageData };
      return datasets[activeDataKey]?.[name] || null;
    };
    const getOrDefault = (name) => getEntry(name) || makeDefaultEntry(name);
    const getColor = (value, min, max, palette) => {
      const span = max - min || 1;
      const ratio = Math.min(1, Math.max(0, (value - min) / span));
      return palette[Math.min(palette.length - 1, Math.floor(ratio * (palette.length - 1)))];
    };
    const resMetrics = useMemo(() => {
      const k = /* @__PURE__ */ new Set();
      Object.values(resEndow).forEach((i) => Object.keys(i).forEach((x) => k.add(x)));
      return Array.from(k);
    }, [resEndow]);
    const resRange = useMemo(() => {
      const v = Object.values(resEndow).map((x) => Number(x?.[resMetric]) || 0);
      return v.length ? { min: Math.min(...v), max: Math.max(...v) } : { min: 0, max: 1 };
    }, [resEndow, resMetric]);
    const resData = useMemo(() => {
      const out = {};
      Object.entries(resEndow).forEach(([prov, metrics]) => {
        const val = Number(metrics?.[resMetric]) || 0;
        const total = Object.values(metrics).reduce((s, v) => s + (Number(v) || 0), 0);
        const pieData = Object.entries(metrics).map(([k, v]) => ({ name: RES_LABELS[k] || k, value: Number(v) || 0 })).sort((a, b) => b.value - a.value);
        out[prov] = {
          title: `${prov} \u8D44\u6E90\u7980\u8D4B`,
          totalVolume: `${RES_LABELS[resMetric]}: ${val} \u4E07\u5343\u74E6`,
          marketVolumeDisplay: `\u5408\u8BA1\u88C5\u673A\u7EA6${total.toFixed(1)} \u4E07\u5343\u74E6`,
          tags: ["\u8D44\u6E90\u7980\u8D4B"],
          resourcePieData: pieData,
          details: pieData.map((i) => ({ label: i.name, value: `${i.value} \u4E07\u5343\u74E6` })),
          mapValue: val
        };
      });
      return out;
    }, [resEndow, resMetric]);
    const storageRange = useMemo(() => {
      const vals = Object.values(storageData).map((d) => Number(d?.power) || 0).filter((v) => v > 0);
      return vals.length ? { min: Math.min(...vals), max: Math.max(...vals) } : { min: 0, max: 2e3 };
    }, [storageData]);
    const storageEntries = useMemo(() => {
      const out = {};
      Object.entries(storageData).forEach(([prov, info]) => {
        const power = Number(info?.power) || 0;
        const capacity = Number(info?.capacity) || 0;
        const count = Number(info?.count) || 0;
        const filedCount = Number(info?.filedCount) || 0;
        out[prov] = {
          title: `${prov} \u72EC\u7ACB\u50A8\u80FD\u88C5\u673A`,
          totalVolume: `\u603B\u529F\u7387: ${power} MW`,
          marketVolumeDisplay: `\u603B\u5BB9\u91CF ${capacity} MWh \xB7 \u6570\u91CF ${count} \u5EA7\uFF08\u5907\u6848 ${filedCount} \u5EA7\uFF09`,
          tags: ["\u72EC\u7ACB\u50A8\u80FD"],
          details: [
            { label: "\u72EC\u7ACB\u50A8\u80FD\u603B\u529F\u7387", value: `${power} MW` },
            { label: "\u72EC\u7ACB\u50A8\u80FD\u603B\u5BB9\u91CF", value: `${capacity} MWh` },
            { label: "\u72EC\u7ACB\u50A8\u80FD\u6570\u91CF", value: `${count}` },
            { label: "\u5907\u6848\u6570\u91CF", value: `${filedCount}` }
          ],
          mapValue: power,
          color: info?.color || null
        };
      });
      return out;
    }, [storageData]);
    const freqRange = useMemo(() => {
      const vals = Object.values(freqData).map((d) => d.mapValue || 0).filter((v) => v > 0);
      return vals.length ? { min: Math.min(...vals), max: Math.max(...vals) } : { min: 0, max: 5e3 };
    }, [freqData]);
    const capRange = useMemo(() => {
      const vals = Object.values(capData).map((d) => d.mapValue || 0).filter((v) => v > 0);
      return vals.length ? { min: Math.min(...vals), max: Math.max(...vals) } : { min: 0, max: 330 };
    }, [capData]);
    const energyRange = useMemo(() => {
      const vals = Object.values(energyEntries).map((d) => d.mapValue || 0).filter((v) => v > 0);
      return vals.length ? { min: Math.min(...vals), max: Math.max(...vals) } : { min: 0, max: 1 };
    }, [energyEntries]);
    const currentPalette = colorScales[activeDataKey] || colorScales.frequency;
    const tier1 = ["\u6C5F\u82CF\u7701", "\u6D59\u6C5F\u7701", "\u5B89\u5FBD\u7701", "\u5C71\u4E1C\u7701"];
    const tier2 = ["\u8D35\u5DDE\u7701", "\u4E91\u5357\u7701", "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A", "\u6E56\u5357\u7701", "\u6E56\u5317\u7701", "\u6C5F\u897F\u7701", "\u5185\u8499\u53E4\u81EA\u6CBB\u533A"];
    const tier3 = ["\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A", "\u9ED1\u9F99\u6C5F\u7701", "\u5409\u6797\u7701", "\u8FBD\u5B81\u7701", "\u9752\u6D77\u7701"];
    const generateMapData = () => {
      const data = [];
      if (marketType === "frequency") {
        Object.entries(freqData).forEach(([name, d]) => {
          if (d.mapValue > 0) {
            const color = d.color || getColor(d.mapValue, freqRange.min, freqRange.max, currentPalette);
            data.push({ name, value: d.mapValue, itemStyle: { areaColor: color, borderColor: "#fff", borderWidth: 1.2 }, emphasis: { itemStyle: { areaColor: hoverColor } } });
          }
        });
        tier1.forEach((n) => !freqData[n] && data.push({ name: n, value: -3, itemStyle: { areaColor: "#52525b", borderColor: "#fff", borderWidth: 1 }, emphasis: { itemStyle: { areaColor: hoverColor } } }));
        tier2.forEach((n) => !freqData[n] && data.push({ name: n, value: -2, itemStyle: { areaColor: "#9ca3af", borderColor: "#fff", borderWidth: 1 }, emphasis: { itemStyle: { areaColor: hoverColor } } }));
        tier3.forEach((n) => !freqData[n] && data.push({ name: n, value: -1, itemStyle: { areaColor: "#e5e7eb", borderColor: "#fff", borderWidth: 1 }, emphasis: { itemStyle: { areaColor: hoverColor } } }));
      } else if (marketType === "capacity") {
        Object.entries(capData).forEach(([name, d]) => {
          if (d.mapValue > 0) {
            const color = d.color || getColor(d.mapValue, capRange.min, capRange.max, currentPalette);
            data.push({ name, value: d.mapValue, itemStyle: { areaColor: color, borderColor: "#fff", borderWidth: 1.2 }, emphasis: { itemStyle: { areaColor: hoverColor } } });
          }
        });
      } else if (marketType === "energy") {
        const source = energyView === "spot-progress" ? spotProgressData : energyEntries;
        Object.entries(source).forEach(([name, d]) => {
          if (d.mapValue > 0) {
            const color = energyView === "spot-progress" ? d.color || "#e2e8f0" : d.color || getColor(d.mapValue, energyRange.min, energyRange.max, currentPalette);
            data.push({ name, value: d.mapValue, itemStyle: { areaColor: color, borderColor: "#fff", borderWidth: 1.2 }, emphasis: { itemStyle: { areaColor: hoverColor } } });
          }
        });
      } else if (marketType === "resource") {
        Object.entries(resData).forEach(([name, d]) => {
          if (d.mapValue > 0) {
            const color = getColor(d.mapValue, resRange.min, resRange.max, currentPalette);
            data.push({ name, value: d.mapValue, itemStyle: { areaColor: color, borderColor: "#fff", borderWidth: 1.2 }, emphasis: { itemStyle: { areaColor: hoverColor } } });
          }
        });
      } else if (marketType === "storage") {
        Object.entries(storageEntries).forEach(([name, d]) => {
          if (d.mapValue > 0) {
            const color = d.color || getColor(d.mapValue, storageRange.min, storageRange.max, currentPalette);
            data.push({ name, value: d.mapValue, itemStyle: { areaColor: color, borderColor: "#fff", borderWidth: 1.2 }, emphasis: { itemStyle: { areaColor: hoverColor } } });
          }
        });
      }
      return data;
    };
    const loadMap = async (mode, provinceName = null) => {
      setLoading(true);
      setMapError("");
      try {
        let mapName = "china";
        let geo = null;
        let code = null;
        if (mode === "province" && provinceName) {
          code = ADCODE[provinceName];
          if (!code) {
            setLoading(false);
            return;
          }
          mapName = provinceName;
        }
        try {
          geo = mode === "china" ? await ensureChinaGeoJSON() : await ensureProvinceGeoJSON(code);
        } catch (mapErr) {
          console.warn("Local GeoJSON unavailable, using fallback geometry.", mapErr?.message || mapErr);
          geo = mode === "china" ? buildFallbackChinaGeoJSON() : buildFallbackProvinceGeoJSON(provinceName);
          setMapError(`\u5730\u56FE\u6587\u4EF6\u7F3A\u5931\uFF0C\u5DF2\u5207\u6362\u7B80\u5316\u5E95\u56FE\uFF1A${mode === "china" ? "\u5168\u56FD" : "\u7701\u7EA7"} ${provinceName || ""}`.trim());
        }
        if (!geo) throw new Error(`\u672A\u627E\u5230\u53EF\u7528\u5730\u56FE\u6570\u636E: ${mode === "china" ? "\u5168\u56FD" : "\u7701\u4EFD"} ${provinceName || ""}`.trim());
        if (!window.echarts) return;
        window.echarts.registerMap(mapName, geo);
        if (chartRef.current) chartRef.current.dispose();
        const chart = window.echarts.init(mapRef.current);
        chartRef.current = chart;
        let option = {};
        if (mode === "china") {
          option = {
            backgroundColor: "transparent",
            tooltip: {
              trigger: "item",
              backgroundColor: "rgba(255,255,255,.97)",
              borderColor: "#e2e8f0",
              borderWidth: 1,
              padding: [12, 16],
              textStyle: { color: "#1e293b", fontFamily: "inherit" },
              extraCssText: "border-radius:10px;box-shadow:0 4px 24px rgba(0,0,0,.1);",
              formatter: (params) => {
                if (params.value === void 0 || params.value === null) return `<div style="font-weight:700;font-size:13px">${params.name}</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5 \xB7 \u53CC\u51FB\u8FDB\u5165\u7701\u7EA7</div>`;
                const entry = getEntry(params.name) || (marketType === "resource" ? resData[params.name] : marketType === "storage" ? storageEntries[params.name] : null);
                if (!entry) return `<div style="font-weight:700;font-size:13px">${params.name}</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">\u6682\u65E0\u6570\u636E \xB7 \u70B9\u51FB\u67E5\u770B</div>`;
                return `<div style="font-weight:700;font-size:13px;margin-bottom:4px;">${params.name}</div>` + (entry.totalVolume ? `<div style="font-size:12px;color:#475569;">${entry.totalVolume}</div>` : "") + `<div style="font-size:10px;color:#2563eb;border-top:1px solid #f1f5f9;padding-top:5px;margin-top:5px;">\u5355\u51FB\u67E5\u770B \xB7 \u53CC\u51FB\u8FDB\u5165\u7701\u7EA7</div>`;
              }
            },
            series: [{
              name: "\u5E02\u573A",
              type: "map",
              map: "china",
              roam: true,
              zoom: 1.2,
              center: [104.114, 37.55],
              label: { show: true, fontSize: 10, color: "rgba(0,0,0,.35)", fontFamily: "inherit" },
              itemStyle: { areaColor: "#f1f5f9", borderColor: "#cbd5e1", borderWidth: 1 },
              emphasis: { label: { show: true, color: "#854d0e", fontWeight: "bold" }, itemStyle: { areaColor: hoverColor } },
              data: generateMapData(),
              selectedMode: false
            }]
          };
        } else {
          const annos = annotations[provinceName] || { markers: [], routes: [], notes: [], shapes: [] };
          const markerData = annos.markers?.map((m) => ({
            name: m.label,
            value: [...m.coord, 100],
            symbol: MARKER_PRESETS.find((p) => p.type === m.preset)?.symbol || "circle",
            symbolSize: 16,
            itemStyle: { color: m.color || "#22c55e", borderColor: "#fff", borderWidth: 2, shadowBlur: 4, shadowColor: "rgba(0,0,0,.3)" },
            label: { show: true, formatter: m.label, position: "right", fontSize: 11, color: "#1e293b", fontWeight: 500 },
            tooltipData: m
          })) || [];
          const routeData = annos.routes?.map((r) => ({
            coords: r.coords,
            lineStyle: { color: r.color || "#334155", width: r.width || 2.5, opacity: 0.85, type: r.dashed ? "dashed" : "solid" },
            tooltipData: r
          })) || [];
          const shapeData = (annos.shapes || []).map((s, i) => ({ value: [...s.coord1, i], shapeInfo: s }));
          option = {
            backgroundColor: "transparent",
            tooltip: {
              trigger: "item",
              backgroundColor: "rgba(255,255,255,.97)",
              borderColor: "#e2e8f0",
              borderWidth: 1,
              padding: 12,
              textStyle: { color: "#1e293b" },
              extraCssText: "border-radius:10px;box-shadow:0 4px 24px rgba(0,0,0,.1);",
              formatter: (p) => {
                const d = p.data?.tooltipData;
                if (!d) return p.name;
                return `<div style="font-weight:700;color:${d.color || p.color}">${d.label || d.name || ""}</div>` + (d.desc ? `<div style="font-size:12px;color:#64748b;">${d.desc}</div>` : "") + (d.preset ? `<div style="font-size:10px;color:#94a3b8;">${MARKER_PRESETS.find((x) => x.type === d.preset)?.label || ""}</div>` : "");
              }
            },
            geo: {
              map: mapName,
              roam: true,
              zoom: 1,
              silent: true,
              label: { show: true, color: "#64748b" },
              itemStyle: { areaColor: "#e8ecf1", borderColor: "#94a3b8", borderWidth: 1.5 },
              emphasis: { disabled: true }
            },
            series: [
              {
                name: "\u5F62\u72B6",
                type: "custom",
                coordinateSystem: "geo",
                data: shapeData,
                silent: true,
                zlevel: 1.5,
                renderItem: (params, bindApi) => {
                  const d = shapeData[params.dataIndex];
                  if (!d) return null;
                  const s = d.shapeInfo;
                  const p1 = bindApi.coord(s.coord1);
                  const p2 = bindApi.coord(s.coord2);
                  const hex = s.color || "#3b82f6";
                  const op = s.opacity ?? 0.25;
                  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
                  const fillC = `rgba(${r},${g},${b},${op})`;
                  const strokeC = `rgba(${r},${g},${b},${Math.min(1, op + 0.4)})`;
                  if (s.shapeType === "circle") {
                    const cx = p1[0], cy = p1[1];
                    const rad = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
                    return { type: "circle", shape: { cx, cy, r: rad }, style: { fill: fillC, stroke: strokeC, lineWidth: 2 } };
                  } else {
                    const x = Math.min(p1[0], p2[0]), y = Math.min(p1[1], p2[1]);
                    const w = Math.abs(p2[0] - p1[0]), h = Math.abs(p2[1] - p1[1]);
                    return { type: "rect", shape: { x, y, width: w, height: h, r: 4 }, style: { fill: fillC, stroke: strokeC, lineWidth: 2 } };
                  }
                }
              },
              {
                name: "\u8DEF\u7EBF",
                type: "lines",
                coordinateSystem: "geo",
                data: routeData,
                silent: true,
                lineStyle: { width: 2.5, opacity: 0.85 },
                effect: { show: true, symbol: "arrow", symbolSize: 7, period: 8 },
                zlevel: 1.8
              },
              {
                name: "\u6807\u6CE8",
                type: "effectScatter",
                coordinateSystem: "geo",
                data: markerData,
                silent: true,
                showEffectOn: "render",
                rippleEffect: { brushType: "fill", scale: 2 },
                zlevel: 2
              }
            ]
          };
          if (annos.notes?.length) {
            option.graphic = annos.notes.map((n) => ({
              type: "text",
              left: n.x || 100,
              top: n.y || 100,
              z: 100,
              zlevel: 10,
              style: {
                text: n.text || "",
                fill: n.color || "#1e293b",
                fontSize: 13,
                fontWeight: 500,
                backgroundColor: "rgba(255,255,255,.85)",
                padding: [4, 8],
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#e2e8f0"
              },
              draggable: true
            }));
          }
        }
        chart.setOption(option);
        setLoading(false);
        if (mode === "china") {
          let _cTimer = null, _cName = null;
          chart.on("click", (params) => {
            if (params.componentType !== "series" || params.seriesType !== "map") return;
            const name = resolveProvinceName(params.name) || params.name;
            if (_cTimer && _cName === name) {
              clearTimeout(_cTimer);
              _cTimer = null;
              _cName = null;
              if (ADCODE[name]) {
                setCurProvince(name);
                setSelName(name);
                setViewMode("province");
              }
            } else {
              if (_cTimer) clearTimeout(_cTimer);
              _cName = name;
              _cTimer = setTimeout(() => {
                setSelName(name);
                _cTimer = null;
                _cName = null;
              }, 280);
            }
          });
        }
        if (mode === "province") {
          chart.getZr().on("click", (event) => {
            if (!annoTool || !editMode) return;
            const pixel = [event.offsetX, event.offsetY];
            if (annoTool === "note") {
              addAnnotation(provinceName, null, pixel[0], pixel[1]);
              return;
            }
            const coord = chart.convertFromPixel({ geoIndex: 0 }, pixel);
            if (!coord || !isFinite(coord[0]) || !isFinite(coord[1])) return;
            if (annoTool === "circle" || annoTool === "rect") {
              if (!shapeStart) {
                setShapeStart(coord);
                return;
              }
              addAnnotation(provinceName, coord, pixel[0], pixel[1]);
              return;
            }
            addAnnotation(provinceName, coord, pixel[0], pixel[1]);
          });
        }
      } catch (e) {
        console.error("Map error:", e);
        setMapError("\u5730\u56FE\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF1A\u5185\u7F6E\u5730\u56FE\u7F3A\u5931\u4E14\u5728\u7EBF\u62C9\u53D6\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u5237\u65B0\u9875\u9762\u3002");
        setLoading(false);
      }
    };
    const addAnnotation = (prov, coord, px, py) => {
      let added = false;
      setAnnotations((prev) => {
        const next = { ...prev };
        const a = { ...next[prov] || { markers: [], routes: [], notes: [] } };
        if (annoTool === "marker") {
          if (!coord || !isFinite(coord[0]) || !isFinite(coord[1])) return next;
          a.markers = [...a.markers || [], { id: Date.now(), coord, label: annoLabel || "\u65B0\u6807\u6CE8", color: annoColor, preset: "C", desc: "" }];
          added = true;
        } else if (annoTool === "note") {
          a.notes = [...a.notes || [], { id: Date.now(), x: px, y: py, text: annoLabel || "\u5907\u6CE8", color: annoColor }];
          added = true;
        } else if (annoTool === "route") {
          if (!coord || !isFinite(coord[0]) || !isFinite(coord[1])) return next;
          if (!routeStart) {
            setRouteStart(coord);
            return next;
          }
          a.routes = [...a.routes || [], { id: Date.now(), coords: [routeStart, coord], label: annoLabel || "\u8DEF\u7EBF", color: annoColor, width: 2.5 }];
          setRouteStart(null);
          added = true;
        } else if (annoTool === "circle" || annoTool === "rect") {
          if (!coord || !isFinite(coord[0]) || !isFinite(coord[1])) return next;
          if (!shapeStart) {
            setShapeStart(coord);
            return next;
          }
          a.shapes = [...a.shapes || [], { id: Date.now(), shapeType: annoTool, coord1: shapeStart, coord2: coord, label: annoLabel || (annoTool === "circle" ? "\u5706\u5F62\u533A\u57DF" : "\u77E9\u5F62\u533A\u57DF"), color: annoColor, opacity: annoOpacity }];
          setShapeStart(null);
          added = true;
        }
        next[prov] = a;
        return next;
      });
      if (added) setTimeout(() => loadMap("province", prov), 50);
    };
    const removeAnnotation = (prov, type, id) => {
      setAnnotations((prev) => {
        const next = { ...prev };
        const a = { ...next[prov] || { markers: [], routes: [], notes: [] } };
        a[type] = (a[type] || []).filter((i) => i.id !== id);
        next[prov] = a;
        return next;
      });
      setTimeout(() => loadMap("province", prov), 50);
    };
    useEffect(() => {
      loadMap(viewMode, curProvince);
    }, [viewMode, curProvince, marketType, energyView, resData, storageEntries, freqData, capData, energyEntries, spotProgressData, colorScales, annotations, annoTool, editMode, routeStart, shapeStart]);
    useEffect(() => {
      setViewMode("china");
      setCurProvince(null);
      setSelName(null);
      setAnnoTool(null);
      setRouteStart(null);
      if (marketType !== "energy") setEnergyView("price");
    }, [marketType]);
    useEffect(() => {
      if (marketType === "energy") {
        setViewMode("china");
        setCurProvince(null);
        setSelName(null);
      }
    }, [energyView]);
    useEffect(() => {
      const h = () => chartRef.current?.resize();
      window.addEventListener("resize", h);
      return () => window.removeEventListener("resize", h);
    }, []);
    useEffect(() => {
      const stamp = saveDraftPayload(buildCurrentPayload(), publishedFingerprint);
      if (stamp) setDraftSavedAt(stamp);
    }, [buildCurrentPayload, publishedFingerprint]);
    useEffect(() => () => {
      if (chartRef.current) chartRef.current.dispose();
      if (pieInst.current) pieInst.current.dispose();
    }, []);
    useEffect(() => {
      const entry = selName && marketType === "resource" ? resData[selName] : null;
      if (!pieRef.current || !entry?.resourcePieData?.length) {
        if (pieInst.current) {
          pieInst.current.dispose();
          pieInst.current = null;
        }
        return;
      }
      if (!pieInst.current) pieInst.current = window.echarts.init(pieRef.current);
      pieInst.current.clear();
      pieInst.current.setOption({ tooltip: { trigger: "item", extraCssText: "border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.08);" }, series: [{ type: "pie", radius: ["38%", "68%"], itemStyle: { borderRadius: 5, borderColor: "#fff", borderWidth: 2 }, label: { formatter: "{b}: {d}%", color: "#0f172a", fontSize: 11 }, data: entry.resourcePieData }] });
      pieInst.current.resize();
    }, [selName, resData, marketType]);
    useEffect(() => {
      if (!isResizing) return;
      const move = (e) => setSidebarW(Math.min(Math.max(resizeRef.current.w + e.clientX - resizeRef.current.x, 220), 440));
      const up = () => setIsResizing(false);
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
      return () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
    }, [isResizing]);
    const parseLines = (text) => text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const splitColumns = (line) => line.split(/[\t,，]/).map((i) => i.trim()).filter(Boolean);
    const applyResInput = () => {
      if (!resInput.trim()) return;
      const updates = {};
      parseLines(resInput).forEach((line) => {
        const [provRaw, keyRaw, valRaw] = splitColumns(line);
        const prov = resolveProvinceName(provRaw) || provRaw;
        const key = RES_KEY_ALIAS[(keyRaw || "").toLowerCase()] || RES_KEY_ALIAS[keyRaw];
        const val = Number(valRaw);
        if (prov && key && Number.isFinite(val)) {
          updates[prov] = { ...updates[prov] || {}, [key]: val };
        }
      });
      if (Object.keys(updates).length) {
        setResEndow((prev) => {
          const next = { ...prev };
          Object.entries(updates).forEach(([prov, metricObj]) => {
            next[prov] = { ...next[prov] || {}, ...metricObj };
          });
          return next;
        });
      }
      setResInput("");
    };
    const applyStorageInput = () => {
      if (!storageInput.trim()) return;
      const updates = {};
      parseLines(storageInput).forEach((line) => {
        const [provRaw, powerRaw, capacityRaw, countRaw, filedRaw] = splitColumns(line);
        const prov = resolveProvinceName(provRaw) || provRaw;
        const power = Number(powerRaw), capacity = Number(capacityRaw), count = Number(countRaw), filedCount = Number(filedRaw);
        if (prov && [power, capacity, count, filedCount].every(Number.isFinite)) {
          updates[prov] = { power, capacity, count, filedCount };
        }
      });
      if (Object.keys(updates).length) setStorageData((prev) => ({ ...prev, ...updates }));
      setStorageInput("");
    };
    const handleBack = () => {
      setViewMode("china");
      setCurProvince(null);
      setAnnoTool(null);
      setRouteStart(null);
      setShapeStart(null);
    };
    const closeSidebar = () => setSelName(null);
    const updateEntry = (name, field, value) => {
      const setters = { frequency: setFreqData, energy: setEnergyEntries, spotProgress: setSpotProgressData, capacity: setCapData, storage: setStorageData };
      const setter = setters[activeDataKey];
      if (!setter) return;
      setter((prev) => {
        const entry = { ...prev[name] || makeDefaultEntry(name) };
        if (field === "mapValue") entry.mapValue = Number(value) || 0;
        else if (field === "color") entry.color = value;
        else if (field === "spotStage") {
          entry.spotStage = value;
          entry.totalVolume = value || "\u5F85\u66F4\u65B0";
          entry.details = [...entry.details || []];
          const idx = entry.details.findIndex((i) => i.label === "\u73B0\u8D27\u9636\u6BB5");
          if (idx > -1) entry.details[idx] = { ...entry.details[idx], value: value || "\u5F85\u586B\u5199" };
          else entry.details.unshift({ label: "\u73B0\u8D27\u9636\u6BB5", value: value || "\u5F85\u586B\u5199" });
        } else if (field.startsWith("details.")) {
          const [, idx, f] = field.split(".");
          entry.details = [...entry.details || []];
          entry.details[Number(idx)] = { ...entry.details[Number(idx)] || {}, [f]: value };
        } else entry[field] = value;
        return { ...prev, [name]: entry };
      });
    };
    const addDetail = (name) => {
      const setters = { frequency: setFreqData, energy: setEnergyEntries, spotProgress: setSpotProgressData, capacity: setCapData, storage: setStorageData };
      const setter = setters[activeDataKey];
      if (!setter) return;
      setter((prev) => {
        const entry = { ...prev[name] || makeDefaultEntry(name) };
        entry.details = [...entry.details || [], { label: "\u65B0\u5B57\u6BB5", value: "\u5F85\u586B\u5199" }];
        return { ...prev, [name]: entry };
      });
    };
    const removeDetail = (name, idx) => {
      const setters = { frequency: setFreqData, energy: setEnergyEntries, spotProgress: setSpotProgressData, capacity: setCapData, storage: setStorageData };
      const setter = setters[activeDataKey];
      if (!setter) return;
      setter((prev) => {
        const entry = { ...prev[name] || makeDefaultEntry(name) };
        entry.details = (entry.details || []).filter((_, i) => i !== idx);
        return { ...prev, [name]: entry };
      });
    };
    const addTag = (name, tag) => {
      const setters = { frequency: setFreqData, energy: setEnergyEntries, spotProgress: setSpotProgressData, capacity: setCapData, storage: setStorageData };
      const setter = setters[activeDataKey];
      if (!setter) return;
      setter((prev) => {
        const entry = { ...prev[name] || makeDefaultEntry(name) };
        entry.tags = [...entry.tags || [], tag];
        return { ...prev, [name]: entry };
      });
    };
    const removeTag = (name, tagIdx) => {
      const setters = { frequency: setFreqData, energy: setEnergyEntries, spotProgress: setSpotProgressData, capacity: setCapData, storage: setStorageData };
      const setter = setters[activeDataKey];
      if (!setter) return;
      setter((prev) => {
        const entry = { ...prev[name] || makeDefaultEntry(name) };
        entry.tags = (entry.tags || []).filter((_, i) => i !== tagIdx);
        return { ...prev, [name]: entry };
      });
    };
    const handleExportPublishData = () => {
      const payload = buildCurrentPayload();
      const blob = new Blob([buildPublishDataFile(payload)], { type: "application/javascript;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "site-data.js";
      a.click();
      URL.revokeObjectURL(url);
    };
    const handleExportJSON = () => {
      const payload = buildCurrentPayload();
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "heatmap-data-backup.json";
      a.click();
      URL.revokeObjectURL(url);
    };
    const handleImportData = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const payload = parseImportedDataText(String(ev.target.result || ""));
          applyDataPayload(payload);
          const stamp = saveDraftPayload(payload, publishedFingerprint);
          if (stamp) setDraftSavedAt(stamp);
        } catch (err) {
          console.error("\u5BFC\u5165\u5931\u8D25", err);
          alert("\u5BFC\u5165\u5931\u8D25\uFF1A\u4EC5\u652F\u6301 site-data.js \u6216 JSON \u5907\u4EFD\u6587\u4EF6\u3002");
        }
      };
      reader.readAsText(file);
      e.target.value = "";
    };
    const handleResetToPublished = () => {
      clearDraftPayload();
      applyDataPayload(publishedPayload);
      setDraftSavedAt(null);
    };
    const handleGridUpload = (prov, files) => {
      if (!editMode) return;
      files.forEach((f) => {
        const r = new FileReader();
        r.onload = (e) => {
          setGridUploads((p) => ({ ...p, [prov]: [...p[prov] || [], { id: `${f.name}-${Date.now()}`, src: e.target.result, name: f.name, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }] }));
        };
        r.readAsDataURL(f);
      });
    };
    const tabs = [
      { key: "frequency", label: "\u4E8C\u6B21\u8C03\u9891", icon: /* @__PURE__ */ React.createElement(Activity, { size: 14 }), color: "#2563eb" },
      { key: "energy", label: "\u7535\u80FD\u91CF", icon: /* @__PURE__ */ React.createElement(BatteryC, { size: 14 }), color: "#4f46e5" },
      { key: "capacity", label: "\u5BB9\u91CF\u7535\u4EF7", icon: /* @__PURE__ */ React.createElement(DollarSign, { size: 14 }), color: "#d97706" },
      { key: "resource", label: "\u8D44\u6E90\u7980\u8D4B", icon: /* @__PURE__ */ React.createElement(Layers, { size: 14 }), color: "#059669" },
      { key: "storage", label: "\u72EC\u7ACB\u50A8\u80FD\u88C5\u673A", icon: /* @__PURE__ */ React.createElement(ArchiveIc, { size: 14 }), color: "#0f766e" }
    ];
    const mainTitle = viewMode === "province" ? `${shortName(curProvince)} \u7701\u7EA7\u8BE6\u60C5` : marketType === "frequency" ? "\u4E8C\u6B21\u8C03\u9891\u5E02\u573A\u70ED\u529B\u56FE" : marketType === "capacity" ? "\u5BB9\u91CF\u7535\u4EF7\u70ED\u529B\u56FE" : marketType === "resource" ? "\u8D44\u6E90\u7980\u8D4B\u70ED\u529B\u56FE" : marketType === "storage" ? "\u72EC\u7ACB\u50A8\u80FD\u88C5\u673A\u70ED\u529B\u56FE" : energyView === "price" ? "\u7535\u80FD\u91CF\u4EF7\u5DEE\u70ED\u529B\u56FE" : "\u73B0\u8D27\u5E02\u573A\u8FDB\u7A0B";
    const selEntry = useMemo(() => {
      if (!selName) return null;
      if (marketType === "resource") return resData[selName] || makeDefaultEntry(selName);
      if (marketType === "storage") return storageEntries[selName] || makeDefaultEntry(selName);
      return getOrDefault(selName);
    }, [selName, marketType, energyView, freqData, energyEntries, spotProgressData, capData, resData, storageEntries]);
    const provAnnos = curProvince ? annotations[curProvince] || { markers: [], routes: [], notes: [], shapes: [] } : { markers: [], routes: [], notes: [], shapes: [] };
    const provGrids = (prov) => [...gridUploads[prov] || []];
    const activeTab = tabs.find((t) => t.key === marketType);
    const accentColor = activeTab?.color || "#2563eb";
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-screen overflow-hidden relative", style: { background: "linear-gradient(135deg,#eef1f5 0%,#e4e9f0 50%,#eef1f5 100%)" } }, /* @__PURE__ */ React.createElement("header", { className: "glass border-b px-5 py-2.5 flex items-center justify-between z-20 shrink-0", style: { borderColor: "var(--glass-border)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, viewMode === "province" ? /* @__PURE__ */ React.createElement("button", { onClick: handleBack, className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-all hover:shadow-sm" }, /* @__PURE__ */ React.createElement(ArrowLeft, { size: 15 }), " \u8FD4\u56DE\u5168\u56FD") : /* @__PURE__ */ React.createElement("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg", style: { background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)` } }, /* @__PURE__ */ React.createElement(Activity, { size: 18 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-[15px] font-bold text-slate-900 leading-tight tracking-tight" }, mainTitle), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 mt-0.5 tracking-wide" }, viewMode === "province" ? "\u70B9\u51FB\u5730\u56FE\u6DFB\u52A0\u6807\u6CE8\uFF08\u7F16\u8F91\u6A21\u5F0F\uFF09" : `\u5355\u51FB\u67E5\u770B\u8BE6\u60C5 \xB7 \u53CC\u51FB\u8FDB\u5165\u7701\u7EA7\u5730\u56FE \xB7 \u53D1\u5E03\u6587\u4EF6: data/site-data.js`))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setEditMode(!editMode),
        className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${editMode ? "text-white border-transparent shadow-md" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:shadow-sm"}`,
        style: editMode ? { background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` } : {}
      },
      editMode ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Edit3, { size: 12 }), " \u7F16\u8F91\u4E2D") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Eye, { size: 12 }), " \u67E5\u770B")
    ), editMode && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: handleExportPublishData, className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 shadow-sm transition-all" }, /* @__PURE__ */ React.createElement(Download, { size: 12 }), " \u53D1\u5E03\u6570\u636E"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowArchive(true), className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-300 transition-all" }, /* @__PURE__ */ React.createElement(ArchiveIc, { size: 12 }))))), /* @__PURE__ */ React.createElement("div", { className: "glass border-b px-5 flex items-center gap-1 shrink-0 z-10", style: { borderColor: "var(--glass-border)" } }, tabs.map((t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t.key,
        onClick: () => setMarketType(t.key),
        className: `tab-btn flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold transition-all ${marketType === t.key ? "active" : ""}`,
        style: { color: marketType === t.key ? t.color : "#94a3b8" }
      },
      t.icon,
      " ",
      t.label
    )), marketType === "energy" && /* @__PURE__ */ React.createElement("div", { className: "ml-3 flex items-center gap-0.5 bg-slate-100/80 rounded-lg p-0.5" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setEnergyView("price"), className: `px-3 py-1 rounded-md text-[11px] font-bold transition-all ${energyView === "price" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}` }, "\u4EF7\u5DEE\u5730\u56FE"), /* @__PURE__ */ React.createElement("button", { onClick: () => setEnergyView("spot-progress"), className: `px-3 py-1 rounded-md text-[11px] font-bold transition-all ${energyView === "spot-progress" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}` }, "\u73B0\u8D27\u8FDB\u7A0B"))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 relative w-full h-full overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "w-full h-full flex" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-0 top-0 bottom-0 z-40 glass border-r shadow-lg transition-all duration-300 flex flex-col overflow-hidden", style: { width: sidebarOpen ? sidebarW : 0, transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)", borderColor: "var(--glass-border)" } }, /* @__PURE__ */ React.createElement("div", { className: "p-3 border-b border-slate-100/80 shrink-0 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-4 rounded-full", style: { background: accentColor } }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-bold text-slate-500 uppercase tracking-widest" }, sidebarTitle)), /* @__PURE__ */ React.createElement("div", { className: "p-3 overflow-y-auto flex-1 space-y-4" }, viewMode === "china" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4 fade-in" }, marketType === "frequency" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      LegendBar,
      {
        palette: currentPalette,
        min: freqRange.min,
        max: freqRange.max,
        unit: "\u4E07",
        label: "\u6708\u5EA6\u8C03\u9891\u5E02\u573A\u4EFD\u989D",
        ticks: [
          { pos: "0%", text: `${freqRange.min}\u4E07\u5143` },
          { pos: "33%", text: `${Math.round(freqRange.min + (freqRange.max - freqRange.min) / 3)}\u4E07` },
          { pos: "66%", text: `${Math.round(freqRange.min + 2 * (freqRange.max - freqRange.min) / 3)}\u4E07` },
          { pos: "100%", text: `${freqRange.max}\u4E07\u5143` }
        ]
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "\u6F5C\u5728\u5F00\u653E\u68AF\u961F"), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, [{ color: "#52525b", label: "\u7B2C\u4E00\u68AF\u961F", desc: "\u534E\u4E1C\u6838\u5FC3\u7701\u4EFD" }, { color: "#9ca3af", label: "\u7B2C\u4E8C\u68AF\u961F", desc: "\u4E2D\u897F\u90E8\u91CD\u70B9\u7701" }, { color: "#e5e7eb", label: "\u7B2C\u4E09\u68AF\u961F", desc: "\u8FDC\u671F\u5173\u6CE8" }].map((t) => /* @__PURE__ */ React.createElement("div", { key: t.label, className: "flex items-center gap-2 py-1" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded", style: { backgroundColor: t.color } }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-slate-600 font-medium" }, t.label), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400" }, t.desc))))), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100" }, "\u8986\u76D6 ", Object.keys(freqData).length, " \u7701\u4EFD \xB7 \u6570\u636E\u8D8A\u6DF1\u84DD\u8272\u8868\u793A\u6708\u5EA6\u8C03\u9891\u5E02\u573A\u4EFD\u989D\u8D8A\u5927")), marketType === "energy" && energyView === "price" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      LegendBar,
      {
        palette: currentPalette,
        min: energyRange.min,
        max: energyRange.max,
        label: "\u5CF0\u8C37\u4EF7\u5DEE\uFF08\u5143/kWh\uFF09",
        ticks: [
          { pos: "0%", text: `${energyRange.min.toFixed(2)}` },
          { pos: "50%", text: `${((energyRange.min + energyRange.max) / 2).toFixed(2)}` },
          { pos: "100%", text: `${energyRange.max.toFixed(2)}` }
        ]
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-[11px]" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded bg-indigo-100 border border-indigo-300" }), /* @__PURE__ */ React.createElement("span", { className: "text-slate-600" }, "\u5E02\u573A\u533A\u95F4\uFF08\u6D4B\u7B97\uFF09")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-[11px]" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded bg-indigo-500 border border-indigo-600" }), /* @__PURE__ */ React.createElement("span", { className: "text-slate-600" }, "\u5B9E\u6D4B\u6570\u636E"))), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100" }, "\u8986\u76D6 ", Object.keys(energyEntries).length, " \u7701\u4EFD \xB7 \u989C\u8272\u8D8A\u6DF1\u8868\u793A\u4EF7\u5DEE\u8D8A\u5927\uFF0C\u50A8\u80FD\u5957\u5229\u7A7A\u95F4\u8D8A\u9AD8")), marketType === "energy" && energyView === "spot-progress" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "\u73B0\u8D27\u5E02\u573A\u9636\u6BB5"), [{ color: "#3b82f6", label: "\u6B63\u5F0F\u8FD0\u884C", desc: "\u673A\u5236\u6210\u719F" }, { color: "#60a5fa", label: "\u8FDE\u7EED\u7ED3\u7B97\u8BD5\u8FD0\u884C", desc: "\u6301\u7EED\u4F18\u5316" }, { color: "#93c5fd", label: "\u8BD5\u8FD0\u884C", desc: "\u80FD\u529B\u5EFA\u8BBE" }, { color: "#e2e8f0", label: "\u672A\u5F00\u5C55/\u5F85\u66F4\u65B0", desc: "\u6682\u65E0\u8FDB\u5C55" }].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, className: "flex items-center gap-2 py-1" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded", style: { backgroundColor: s.color } }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-slate-700 font-medium" }, s.label), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400" }, s.desc)))), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100" }, "\u84DD\u8272\u8D8A\u6DF1\u8868\u793A\u73B0\u8D27\u5E02\u573A\u5EFA\u8BBE\u8FDB\u5EA6\u8D8A\u9886\u5148")), marketType === "capacity" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      LegendBar,
      {
        palette: currentPalette,
        min: capRange.min,
        max: capRange.max,
        label: "\u5BB9\u91CF\u8865\u507F\uFF08\u5143/kW\xB7\u5E74\uFF09",
        ticks: [
          { pos: "0%", text: `${capRange.min}` },
          { pos: "33%", text: `${Math.round(capRange.min + (capRange.max - capRange.min) / 3)}` },
          { pos: "66%", text: `${Math.round(capRange.min + 2 * (capRange.max - capRange.min) / 3)}` },
          { pos: "100%", text: `${capRange.max}` }
        ]
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100" }, "\u8986\u76D6 ", Object.keys(capData).length, " \u7701\u4EFD \xB7 \u989C\u8272\u8D8A\u6DF1\uFF08\u68D5\u8272\u7CFB\uFF09\u8868\u793A\u5BB9\u91CF\u8865\u507F\u5355\u4EF7\u8D8A\u9AD8")), marketType === "resource" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "\u9009\u62E9\u6307\u6807"), /* @__PURE__ */ React.createElement("select", { value: resMetric, onChange: (e) => setResMetric(e.target.value), className: "w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs focus:outline-none ef" }, resMetrics.map((k) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, RES_LABELS[k] || k)))), /* @__PURE__ */ React.createElement(
      LegendBar,
      {
        palette: currentPalette,
        min: resRange.min,
        max: resRange.max,
        label: `${RES_LABELS[resMetric] || resMetric} \u88C5\u673A`,
        ticks: [
          { pos: "0%", text: `${resRange.min} \u4E07\u5343\u74E6` },
          { pos: "50%", text: `${((resRange.min + resRange.max) / 2).toFixed(0)} \u4E07\u5343\u74E6` },
          { pos: "100%", text: `${resRange.max} \u4E07\u5343\u74E6` }
        ]
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100" }, "\u8986\u76D6 ", Object.keys(resData).length, " \u7701\u4EFD \xB7 \u7EFF\u8272\u8D8A\u6DF1\u8868\u793A\u8BE5\u7C7B\u7535\u6E90\u88C5\u673A\u89C4\u6A21\u8D8A\u5927"), editMode && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: resInput,
        onChange: (e) => setResInput(e.target.value),
        onPaste: (e) => {
          e.stopPropagation();
          const text = e.clipboardData?.getData("text");
          if (text) {
            e.preventDefault();
            setResInput((prev) => `${prev}${prev ? "\n" : ""}${text}`);
          }
        },
        placeholder: "\u7701\u4EFD,\u6307\u6807,\u6570\u503C\uFF08\u652F\u6301\u9017\u53F7/\u5236\u8868\u7B26\uFF0C\u5982\uFF1A\u6CB3\u5317\u7701,wind,35\uFF09",
        className: "w-full h-16 text-xs rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:outline-none ef",
        rows: 3
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: applyResInput, className: "w-full bg-emerald-600 text-white text-[11px] font-bold py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm" }, "\u5E94\u7528\u6570\u636E"))), marketType === "storage" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      LegendBar,
      {
        palette: currentPalette,
        min: storageRange.min,
        max: storageRange.max,
        label: "\u72EC\u7ACB\u50A8\u80FD\u603B\u529F\u7387\uFF08MW\uFF09",
        ticks: [
          { pos: "0%", text: `${storageRange.min} MW` },
          { pos: "50%", text: `${((storageRange.min + storageRange.max) / 2).toFixed(0)} MW` },
          { pos: "100%", text: `${storageRange.max} MW` }
        ]
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100" }, "\u8986\u76D6 ", Object.keys(storageEntries).length, " \u7701\u4EFD \xB7 \u989C\u8272\u8D8A\u6DF1\u8868\u793A\u72EC\u7ACB\u50A8\u80FD\u603B\u529F\u7387\u8D8A\u9AD8"), editMode && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: storageInput,
        onChange: (e) => setStorageInput(e.target.value),
        onPaste: (e) => {
          e.stopPropagation();
          const text = e.clipboardData?.getData("text");
          if (text) {
            e.preventDefault();
            setStorageInput((prev) => `${prev}${prev ? "\n" : ""}${text}`);
          }
        },
        placeholder: "\u7701\u4EFD,\u603B\u529F\u7387MW,\u603B\u5BB9\u91CFMWh,\u6570\u91CF,\u5907\u6848\u6570\u91CF",
        className: "w-full h-16 text-xs rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:outline-none ef",
        rows: 3
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: applyStorageInput, className: "w-full bg-teal-600 text-white text-[11px] font-bold py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-sm" }, "\u5E94\u7528\u72EC\u7ACB\u50A8\u80FD\u6570\u636E"))), editMode && /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5 bg-slate-50/80 rounded-lg p-2.5 border border-slate-100" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-500 flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Palette, { size: 11 }), "\u81EA\u5B9A\u4E49\u8272\u9636"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 flex-wrap" }, currentPalette.map((c, i) => /* @__PURE__ */ React.createElement("input", { key: i, type: "color", value: c, onChange: (e) => {
      setColorScales((prev) => {
        const next = { ...prev };
        next[activeDataKey] = [...next[activeDataKey]];
        next[activeDataKey][i] = e.target.value;
        return next;
      });
    }, title: `\u8272\u9636 ${i + 1}` }))))), viewMode === "province" && editMode && /* @__PURE__ */ React.createElement("div", { className: "space-y-3 fade-in" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "\u6807\u6CE8\u5DE5\u5177"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-5 gap-1.5" }, [{ key: "marker", icon: /* @__PURE__ */ React.createElement(MapPin, { size: 14 }), label: "\u6807\u6CE8\u70B9" }, { key: "route", icon: /* @__PURE__ */ React.createElement(Route, { size: 14 }), label: "\u8DEF\u7EBF" }, { key: "note", icon: /* @__PURE__ */ React.createElement(StickyNote, { size: 14 }), label: "\u5907\u6CE8" }, { key: "circle", icon: /* @__PURE__ */ React.createElement(CircleIc, { size: 14 }), label: "\u5706\u5F62" }, { key: "rect", icon: /* @__PURE__ */ React.createElement(RectIc, { size: 14 }), label: "\u77E9\u5F62" }].map((t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t.key,
        onClick: () => {
          setAnnoTool(annoTool === t.key ? null : t.key);
          setRouteStart(null);
          setShapeStart(null);
        },
        className: `tool-btn flex flex-col items-center gap-1 py-2.5 rounded-lg text-[10px] font-bold border transition-all ${annoTool === t.key ? "active bg-blue-50 text-blue-700 border-blue-200" : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"}`
      },
      t.icon,
      /* @__PURE__ */ React.createElement("span", null, t.label)
    ))), annoTool && /* @__PURE__ */ React.createElement("div", { className: "space-y-2 bg-blue-50/60 border border-blue-100 rounded-lg p-2.5 fade-in" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-blue-700 font-bold" }, annoTool === "marker" ? "\u70B9\u51FB\u5730\u56FE\u653E\u7F6E\u6807\u6CE8" : annoTool === "route" ? routeStart ? "\u518D\u6B21\u70B9\u51FB\u786E\u5B9A\u8DEF\u7EBF\u7EC8\u70B9" : "\u70B9\u51FB\u5730\u56FE\u9009\u62E9\u8DEF\u7EBF\u8D77\u70B9" : annoTool === "note" ? "\u70B9\u51FB\u5730\u56FE\u653E\u7F6E\u5907\u6CE8" : annoTool === "circle" ? shapeStart ? "\u518D\u6B21\u70B9\u51FB\u786E\u5B9A\u5706\u5F62\u8FB9\u7F18" : "\u70B9\u51FB\u5730\u56FE\u9009\u62E9\u5706\u5FC3" : annoTool === "rect" ? shapeStart ? "\u518D\u6B21\u70B9\u51FB\u786E\u5B9A\u5BF9\u89D2" : "\u70B9\u51FB\u5730\u56FE\u9009\u62E9\u77E9\u5F62\u8D77\u89D2" : ""), /* @__PURE__ */ React.createElement("input", { value: annoLabel, onChange: (e) => setAnnoLabel(e.target.value), placeholder: "\u540D\u79F0/\u63CF\u8FF0", className: "w-full text-xs border border-blue-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none ef" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500" }, "\u989C\u8272:"), /* @__PURE__ */ React.createElement("input", { type: "color", value: annoColor, onChange: (e) => setAnnoColor(e.target.value) }), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 ml-1" }, (annoTool === "marker" ? MARKER_PRESETS : [{ color: "#334155" }, { color: "#16a34a" }, { color: "#7e22ce" }, { color: "#ef4444" }, { color: "#0ea5e9" }]).map((p, i) => /* @__PURE__ */ React.createElement("button", { key: i, onClick: () => {
      setAnnoColor(p.color);
      if (p.type) setAnnoLabel(p.label || "");
    }, className: "w-5 h-5 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform", style: { backgroundColor: p.color }, title: p.label || p.color })))), (annoTool === "circle" || annoTool === "rect") && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500 shrink-0" }, "\u900F\u660E\u5EA6:"), /* @__PURE__ */ React.createElement("input", { type: "range", min: "0.05", max: "0.8", step: "0.05", value: annoOpacity, onChange: (e) => setAnnoOpacity(parseFloat(e.target.value)), className: "flex-1 h-1.5 accent-blue-600" }), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-500 w-8 text-right" }, Math.round(annoOpacity * 100), "%"))), (provAnnos.markers?.length > 0 || provAnnos.routes?.length > 0 || provAnnos.notes?.length > 0 || provAnnos.shapes?.length > 0) && /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase" }, "\u5DF2\u6709\u6807\u6CE8"), provAnnos.markers?.map((m) => /* @__PURE__ */ React.createElement("div", { key: m.id, className: "flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "w-2.5 h-2.5 rounded-full", style: { backgroundColor: m.color } }), /* @__PURE__ */ React.createElement("span", { className: "text-slate-700" }, m.label)), /* @__PURE__ */ React.createElement("button", { onClick: () => removeAnnotation(curProvince, "markers", m.id), className: "text-slate-300 hover:text-red-500 transition-colors" }, /* @__PURE__ */ React.createElement(Trash, { size: 12 })))), provAnnos.routes?.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.id, className: "flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "w-4 h-0.5 rounded", style: { backgroundColor: r.color } }), /* @__PURE__ */ React.createElement("span", { className: "text-slate-700" }, r.label)), /* @__PURE__ */ React.createElement("button", { onClick: () => removeAnnotation(curProvince, "routes", r.id), className: "text-slate-300 hover:text-red-500 transition-colors" }, /* @__PURE__ */ React.createElement(Trash, { size: 12 })))), provAnnos.notes?.map((n) => /* @__PURE__ */ React.createElement("div", { key: n.id, className: "flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(StickyNote, { size: 11, cl: "text-slate-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-slate-700" }, n.text)), /* @__PURE__ */ React.createElement("button", { onClick: () => removeAnnotation(curProvince, "notes", n.id), className: "text-slate-300 hover:text-red-500 transition-colors" }, /* @__PURE__ */ React.createElement(Trash, { size: 12 })))), provAnnos.shapes?.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.id, className: "flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, s.shapeType === "circle" ? /* @__PURE__ */ React.createElement(CircleIc, { size: 11 }) : /* @__PURE__ */ React.createElement(RectIc, { size: 11 }), /* @__PURE__ */ React.createElement("div", { className: "w-2.5 h-2.5 rounded", style: { backgroundColor: s.color, opacity: s.opacity || 0.25 } }), /* @__PURE__ */ React.createElement("span", { className: "text-slate-700" }, s.label)), /* @__PURE__ */ React.createElement("button", { onClick: () => removeAnnotation(curProvince, "shapes", s.id), className: "text-slate-300 hover:text-red-500 transition-colors" }, /* @__PURE__ */ React.createElement(Trash, { size: 12 })))))), viewMode === "province" && !editMode && /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-400 bg-slate-50 rounded-lg p-3 border border-slate-100" }, "\u5207\u6362\u5230\u7F16\u8F91\u6A21\u5F0F\u53EF\u5728\u7701\u7EA7\u5730\u56FE\u4E0A\u6DFB\u52A0\u6807\u6CE8\u70B9\u3001\u8F93\u9001\u8DEF\u7EBF\u548C\u6587\u5B57\u5907\u6CE8\u3002")), sidebarOpen && /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 right-0 h-full w-1.5 cursor-col-resize hover:bg-blue-200/50 transition-colors", onMouseDown: (e) => {
      resizeRef.current = { x: e.clientX, w: sidebarW };
      setIsResizing(true);
    } })), /* @__PURE__ */ React.createElement("button", { onClick: () => setSidebarOpen(!sidebarOpen), className: "absolute top-3 z-30 bg-white/90 backdrop-blur-sm p-1.5 rounded-r-lg shadow-md border border-l-0 border-slate-200 text-slate-500 hover:text-slate-800 transition-all hover:shadow-lg", style: { left: sidebarOpen ? sidebarW : 0 } }, sidebarOpen ? /* @__PURE__ */ React.createElement(ChevronL, { size: 14 }) : /* @__PURE__ */ React.createElement(ChevronR, { size: 14 })), /* @__PURE__ */ React.createElement("div", { className: "flex-1 relative" }, loading && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-3 z-50", style: { background: "rgba(240,242,246,.85)", backdropFilter: "blur(4px)" } }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 rounded-full border-[3px] border-t-transparent animate-spin", style: { borderColor: `${accentColor}40`, borderTopColor: "transparent", borderRightColor: accentColor } }), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-400 tracking-wide" }, "\u52A0\u8F7D\u5730\u56FE\u6570\u636E\u2026")), mapError && !loading && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-x-6 top-4 z-50 rounded-lg border border-red-200 bg-red-50/95 text-red-700 px-4 py-2.5 text-xs shadow-sm" }, mapError), /* @__PURE__ */ React.createElement("div", { ref: mapRef, className: "w-full h-full cursor-pointer" }))), /* @__PURE__ */ React.createElement("div", { className: `detail-panel absolute right-0 top-0 bottom-0 z-30 w-full md:w-[440px] bg-white md:border-l border-slate-200 transform transition-transform duration-300 ease-out flex flex-col ${selName ? "translate-x-0" : "translate-x-full"}` }, selName && selEntry && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "p-4 border-b border-slate-100 flex justify-between items-start shrink-0", style: { background: "linear-gradient(135deg,#f8fafc,#ffffff)" } }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 space-y-2.5" }, editMode ? /* @__PURE__ */ React.createElement("input", { value: selEntry.title || "", onChange: (e) => updateEntry(selName, "title", e.target.value), className: "text-lg font-bold text-slate-900 border border-slate-200 rounded-lg px-2.5 py-1.5 w-full focus:outline-none ef" }) : /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-bold text-slate-800 tracking-tight" }, selEntry.title || selName), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 items-center" }, editMode ? /* @__PURE__ */ React.createElement("input", { value: selEntry.totalVolume || "", onChange: (e) => updateEntry(selName, "totalVolume", e.target.value), className: "text-xs border rounded-lg px-2.5 py-1 font-bold focus:outline-none ef", style: { borderColor: `${accentColor}40`, background: `${accentColor}08`, color: accentColor }, placeholder: "\u603B\u91CF" }) : selEntry.totalVolume && /* @__PURE__ */ React.createElement("span", { className: "px-2.5 py-1 rounded-lg text-[11px] font-bold", style: { background: `${accentColor}10`, color: accentColor, border: `1px solid ${accentColor}25` } }, selEntry.totalVolume), (selEntry.tags || []).map((t, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "tag-chip bg-slate-100 text-slate-600 border border-slate-200" }, t, /* @__PURE__ */ React.createElement("span", { className: "tag-x text-slate-400 hover:text-red-500", onClick: (e) => {
      e.stopPropagation();
      removeTag(selName, i);
    } }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" }, /* @__PURE__ */ React.createElement("path", { d: "M18 6 6 18" }), /* @__PURE__ */ React.createElement("path", { d: "m6 6 12 12" }))))), editMode && /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const t = prompt("\u8F93\u5165\u6807\u7B7E");
      if (t) addTag(selName, t);
    }, className: "tag-chip bg-slate-50 text-slate-400 border border-dashed border-slate-300 hover:border-blue-300 hover:text-blue-500 cursor-pointer" }, "+ \u6807\u7B7E"))), /* @__PURE__ */ React.createElement("button", { onClick: closeSidebar, className: "p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 ml-2 transition-colors" }, /* @__PURE__ */ React.createElement(XIcon, { size: 18 }))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto p-4 space-y-4" }, editMode && marketType !== "resource" && marketType !== "storage" && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100" }, !(marketType === "energy" && energyView === "spot-progress") && /* @__PURE__ */ React.createElement("div", { className: "flex-1 space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase" }, "\u5730\u56FE\u6570\u503C"), /* @__PURE__ */ React.createElement("input", { type: "number", value: selEntry.mapValue || 0, onChange: (e) => updateEntry(selName, "mapValue", e.target.value), className: "w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm font-bold text-slate-900 bg-white focus:outline-none ef" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase" }, marketType === "energy" && energyView === "spot-progress" ? "\u8FDB\u7A0B\u586B\u8272" : "\u81EA\u5B9A\u4E49\u989C\u8272"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("input", { type: "color", value: selEntry.color || currentPalette[Math.floor(currentPalette.length / 2)], onChange: (e) => updateEntry(selName, "color", e.target.value) }), selEntry.color && /* @__PURE__ */ React.createElement("button", { onClick: () => updateEntry(selName, "color", null), className: "text-[10px] text-slate-400 hover:text-red-500 transition-colors" }, "\u91CD\u7F6E")))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl p-4 border border-slate-100 bg-slate-50/50" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5 font-semibold mb-2.5 text-slate-600 text-sm" }, /* @__PURE__ */ React.createElement(Coins, { size: 16 }), "\u6982\u89C8"), marketType === "energy" && energyView === "spot-progress" && /* @__PURE__ */ React.createElement("div", { className: "mb-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase mb-1" }, "\u73B0\u8D27\u5E02\u573A\u9636\u6BB5"), editMode ? /* @__PURE__ */ React.createElement("input", { value: selEntry.spotStage || "", onChange: (e) => updateEntry(selName, "spotStage", e.target.value), placeholder: "\u5982\uFF1A\u8FDE\u7EED\u7ED3\u7B97\u8BD5\u8FD0\u884C / \u6B63\u5F0F\u8FD0\u884C", className: "w-full border border-slate-200 rounded-lg px-2.5 py-2 text-sm font-semibold text-slate-700 focus:outline-none ef bg-white" }) : /* @__PURE__ */ React.createElement("div", { className: "inline-flex px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold" }, selEntry.spotStage || "\u5F85\u66F4\u65B0")), editMode ? /* @__PURE__ */ React.createElement("textarea", { className: "w-full border border-slate-200 rounded-lg px-2.5 py-2 text-sm focus:outline-none ef bg-white", rows: 3, value: selEntry.marketVolumeDisplay || "", onChange: (e) => updateEntry(selName, "marketVolumeDisplay", e.target.value) }) : /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-700 leading-relaxed" }, selEntry.marketVolumeDisplay)), selEntry.resourcePieData && /* @__PURE__ */ React.createElement("div", { ref: pieRef, className: "w-full h-48" }), provGrids(selName).length > 0 && /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Layers, { size: 11 }), "\u7F51\u67B6/\u89C4\u5212"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-2 sm:grid-cols-2" }, provGrids(selName).map((item) => /* @__PURE__ */ React.createElement("div", { key: item.id, className: "bg-slate-50 rounded-lg border border-slate-100 overflow-hidden hover:shadow-md transition-shadow" }, /* @__PURE__ */ React.createElement("img", { src: item.src, alt: "", className: "w-full h-28 object-cover cursor-pointer", onClick: () => setPreviewImg(item) }), /* @__PURE__ */ React.createElement("div", { className: "text-[10px] text-slate-500 px-2 py-1 truncate" }, item.name))))), editMode && /* @__PURE__ */ React.createElement("label", { className: "flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors" }, /* @__PURE__ */ React.createElement(Upload, { size: 13 }), "\u4E0A\u4F20\u7F51\u67B6/\u89C4\u5212\u56FE", /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", multiple: true, onChange: (e) => handleGridUpload(selName, Array.from(e.target.files || [])), className: "hidden" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1" }, /* @__PURE__ */ React.createElement(BarChart3, { size: 11 }), "\u8BE6\u7EC6\u6570\u636E"), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 rounded-xl border border-slate-100 divide-y divide-slate-100" }, (selEntry.details || []).map((item, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "p-3 flex flex-col gap-1" }, editMode ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("input", { value: item.label, onChange: (e) => updateEntry(selName, `details.${idx}.label`, e.target.value), className: "flex-1 border border-slate-200 rounded px-2 py-0.5 text-[11px] text-slate-500 bg-white focus:outline-none ef", placeholder: "\u5B57\u6BB5\u540D" }), /* @__PURE__ */ React.createElement("button", { onClick: () => removeDetail(selName, idx), className: "text-slate-300 hover:text-red-500 transition-colors" }, /* @__PURE__ */ React.createElement(Trash, { size: 12 }))) : /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-slate-400" }, item.label), editMode ? /* @__PURE__ */ React.createElement("input", { value: item.value, onChange: (e) => updateEntry(selName, `details.${idx}.value`, e.target.value), className: "border border-slate-200 rounded px-2 py-1 text-sm bg-white focus:outline-none ef" }) : /* @__PURE__ */ React.createElement("span", { className: "text-sm text-slate-800 pl-2.5 border-l-2 border-slate-200" }, item.value)))), editMode && /* @__PURE__ */ React.createElement("button", { onClick: () => addDetail(selName), className: "flex items-center gap-1 w-full justify-center py-2.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-500 border border-dashed border-slate-300 hover:border-blue-300 hover:text-blue-600 transition-colors" }, /* @__PURE__ */ React.createElement(Plus, { size: 13 }), "\u6DFB\u52A0\u5B57\u6BB5")))))), showArchive && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm", onClick: () => setShowArchive(false) }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-2xl p-6 w-96 space-y-4", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 font-bold text-sm" }, /* @__PURE__ */ React.createElement(ArchiveIc, { size: 16 }), "\u6570\u636E\u5B58\u6863"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowArchive(false), className: "text-slate-400 hover:text-slate-600 transition-colors" }, /* @__PURE__ */ React.createElement(XIcon, { size: 16 }))), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-slate-500 leading-relaxed" }, "\u4EE3\u7801\u4E0E\u5730\u56FE\u6587\u4EF6\u5DF2\u56FA\u5B9A\u3002\u4F60\u540E\u7EED\u53EA\u9700\u8981\u5728\u9875\u9762\u91CC\u7F16\u8F91\uFF0C\u7136\u540E\u5BFC\u51FA ", /* @__PURE__ */ React.createElement("code", { className: "font-mono text-[11px]" }, "site-data.js"), " \u8986\u76D6\u4ED3\u5E93\u91CC\u7684 ", /* @__PURE__ */ React.createElement("code", { className: "font-mono text-[11px]" }, "data/site-data.js"), " \u5373\u53EF\u53D1\u5E03\u3002"), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase" }, "\u5F53\u524D\u6D4F\u89C8\u5668\u8349\u7A3F"), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-600" }, "\u81EA\u52A8\u4FDD\u5B58\u65F6\u95F4\uFF1A", formatSavedAt(draftSavedAt))), /* @__PURE__ */ React.createElement("button", { onClick: handleExportPublishData, className: "w-full text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow-md", style: { background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` } }, /* @__PURE__ */ React.createElement(Download, { size: 13 }), "\u5BFC\u51FA\u53D1\u5E03\u6570\u636E\uFF08site-data.js\uFF09"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: handleExportJSON, className: "bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors shadow-sm" }, /* @__PURE__ */ React.createElement(Download, { size: 13 }), "\u5BFC\u51FA\u5907\u4EFDJSON"), /* @__PURE__ */ React.createElement("label", { className: "bg-white border border-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl cursor-pointer hover:border-slate-300 flex items-center justify-center gap-1.5 transition-colors" }, /* @__PURE__ */ React.createElement(Upload, { size: 13 }), "\u5BFC\u5165\u6570\u636E", /* @__PURE__ */ React.createElement("input", { type: "file", accept: ".json,.js", onChange: handleImportData, className: "hidden" }))), /* @__PURE__ */ React.createElement("button", { onClick: handleResetToPublished, className: "w-full bg-white border border-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:border-slate-300 transition-colors" }, "\u6062\u590D\u5230\u5DF2\u53D1\u5E03\u7248\u672C"))), previewImg && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6", onClick: () => setPreviewImg(null) }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-4 py-3 border-b border-slate-100" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold text-slate-700" }, previewImg.name || "\u9884\u89C8"), /* @__PURE__ */ React.createElement("button", { onClick: () => setPreviewImg(null), className: "text-slate-400 hover:text-slate-700 transition-colors" }, /* @__PURE__ */ React.createElement(XIcon, { size: 16 }))), /* @__PURE__ */ React.createElement("div", { className: "max-h-[80vh] overflow-auto bg-slate-50" }, /* @__PURE__ */ React.createElement("img", { src: previewImg.src, alt: "", className: "w-full object-contain" })))));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
