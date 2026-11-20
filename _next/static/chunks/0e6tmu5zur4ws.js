(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return g},useLinkStatus:function(){return y}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(90809),i=e.r(43476),l=a._(e.r(71645)),s=e.r(95057),u=e.r(8372),c=e.r(18581),f=e.r(18967),d=e.r(5550),m=e.r(88540),h=e.r(91949),p=e.r(73668),v=e.r(9396);function g(t){var n;let r,o,a,[g,y]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),b=(0,l.useRef)(null),{href:x,as:E,children:T,prefetch:R=null,passHref:M,replace:A,shallow:L,scroll:S,onClick:_,onMouseEnter:P,onTouchStart:N,legacyBehavior:j=!1,onNavigate:I,transitionTypes:B,ref:C,unstable_dynamicOnHover:k,...U}=t;r=T,j&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let q=l.default.useContext(u.AppRouterContext),F=!1!==R,D=!1===R?"none":!0===R?"full":"auto",O="none"!==D?"auto"===D?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,z="string"==typeof(n=E||x)?n:(0,s.formatUrl)(n);if(j){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");o=l.default.Children.only(r)}let X=j?o&&"object"==typeof o&&o.ref:C,$,K=l.default.useCallback(e=>(null!==q&&(b.current=(0,h.mountLinkInstance)(e,z,q,O,F,y,$)),()=>{b.current&&((0,h.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,h.unmountPrefetchableInstance)(e)}),[F,z,q,O,y,$]),H={ref:(0,c.useMergedRef)(K,X),onClick(t){j||"function"!=typeof _||_(t),j&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!q||t.defaultPrevented||function(t,n,r,o,a,i,l,s="none"){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{navigate:f}=e.r(32916);f(n,o?"replace":"push",!1===a?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,r.current,l,s)}}(t,z,b,A,S,I,B,D)},onMouseEnter(e){j||"function"!=typeof P||P(e),j&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),q&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===k)},onTouchStart:function(e){j||"function"!=typeof N||N(e),j&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),q&&F&&(0,h.onNavigationIntent)(e.currentTarget,!0===k)}};return(0,f.isAbsoluteUrl)(z)?H.href=z:j&&!M&&("a"!==o.type||"href"in o.props)||(H.href=(0,d.addBasePath)(z)),a=j?l.default.cloneElement(o,H):(0,i.jsx)("a",{...U,...H,children:r}),(0,i.jsx)(w.Provider,{value:g,children:a})}let w=(0,l.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(w);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},95057,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==u?(u="//"+(u||""),o&&"/"!==o[0]&&(o="/"+o)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${u}${o}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(18967),o=e.r(52817);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},18967,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return b},NormalizeError:function(){return w},PageNotFoundError:function(){return y},SP:function(){return p},ST:function(){return v},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return E}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=["CLS","FCP","INP","LCP","TTFB"];function i(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let p="u">typeof performance,v=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class w extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},18566,(e,t,n)=>{t.exports=e.r(76562)},2576,e=>{"use strict";var t=e.i(43476),n=e.i(22016),r=e.i(18566),o=e.i(71645);e.s(["CloseMenusOnNavigate",0,function(){let e=(0,r.usePathname)();return(0,o.useEffect)(()=>{document.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover()}catch{}})},[e]),null},"MenuLink",0,function({href:e,className:o,children:a,exact:i=!1,marks:l}){let s=(0,r.usePathname)(),u=i?s===e:s===e||s.startsWith(e);return(0,t.jsx)(n.default,{href:e,className:o,"aria-current":u?"page":void 0,...l,children:a})}])},52899,e=>{"use strict";var t=e.i(43476),n=e.i(18566),r=e.i(71645);let o={globe:1,cube:2,stack:3,ring:4,maze:5,star:6,frame:7,stairs:8,arm:9,sun:10,tunnel:11,bars:12},a={shape:0,src:"",meta:[1,1,1,1],cover:0,box:[0,0,1,1],ink:[1,1,1],ink2:[1,1,1]},i=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float uTime, uMix, uBurst;
// How many of these squares make one of version 3's: distances that were
// counted in its squares are multiplied by this.
uniform float uK;
uniform float uSA, uSB, uFA, uFB;
uniform vec4 uRA, uRB, uMA, uMB;
uniform vec3 uIA, uIB, uJA, uJB, uPtr;
uniform vec2 uRot;
uniform sampler2D uTA, uTB;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// The ordered pattern that turns a brightness into dots.
float b2(vec2 a) { a = floor(a); return fract(a.x / 2. + a.y * a.y * .75); }
float bayer(vec2 a) { return b2(.25 * a) * .0625 + b2(.5 * a) * .25 + b2(a); }

float sdBox(vec3 p, vec3 b) { vec3 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.); }
float sdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }
float sdCaps(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a, ba = b - a;
  return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)) - r;
}
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b;
  vec3 q = abs(p + e) - e;
  return min(min(
    length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
    length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
    length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
float smin(float a, float b, float k) { float h = clamp(.5 + .5 * (b - a) / k, 0., 1.); return mix(b, a, h) - k * h * (1. - h); }

// From the screen's space into the turning object's own space.
vec3 spin(vec3 v) {
  float cp = cos(uRot.y), sp = sin(uRot.y), cy = cos(uRot.x), sy = sin(uRot.x);
  v = vec3(v.x, cp * v.y + sp * v.z, cp * v.z - sp * v.y);
  return vec3(cy * v.x - sy * v.z, v.y, sy * v.x + cy * v.z);
}

// How far a point is from the surface of each solid.
float map(vec3 p, float s) {
  if (s < 1.5) return length(p) - .9;
  if (s < 2.5) return sdBox(p, vec3(.55)) - .03;
  if (s < 3.5) {
    float d = sdBox(p - vec3(0., -.48, 0.), vec3(.72, .13, .72));
    d = min(d, sdBox(p - vec3(.07, 0., -.05), vec3(.72, .13, .72)));
    d = min(d, sdBox(p - vec3(-.06, .48, .07), vec3(.72, .13, .72)));
    return d - .02;
  }
  if (s < 4.5) return sdTorus(p.xzy, vec2(.64, .24));
  if (s < 5.5) {
    vec2 g = p.xz / .3;
    vec2 f = fract(g) - .5;
    float w = hash(floor(g)) > .5 ? abs(f.x) : abs(f.y);
    float d = max(max((w - .13) * .3, abs(p.y - .05) - .2), max(abs(p.x), abs(p.z)) - .9);
    return min(d, sdBox(p + vec3(0., .22, 0.), vec3(.9, .07, .9)));
  }
  if (s < 6.5) {
    float a = length(p.yz) - .3 * (1. - abs(p.x) / 1.05);
    float b = length(p.xz) - .3 * (1. - abs(p.y) / 1.05);
    // A third spike, front to back, so the star is never seen edge-on as a sliver.
    float c = length(p.xy) - .3 * (1. - abs(p.z) / 1.05);
    return max(smin(smin(a, b, .22), c, .22), length(p) - 1.05) * .8;
  }
  if (s < 7.5) return sdFrame(p, vec3(.6), .085);
  if (s < 8.5) {
    float d = 9.;
    for (int i = 0; i < 4; i++) {
      float f = float(i);
      d = min(d, sdBox(p - vec3(-.6 + .4 * f, -.66 + .16 * (f + 1.), 0.), vec3(.2, .16 * (f + 1.), .5)));
    }
    return d;
  }
  // A robot arm on its plate. Its two joints move a little.
  float t = uTime * .9;
  float a1 = .3 + .22 * sin(t), a2 = a1 + 1.25 + .3 * sin(t + 1.2);
  vec3 j1 = vec3(0., -.42, 0.);
  vec3 j2 = j1 + .64 * vec3(sin(a1), cos(a1), 0.);
  vec3 j3 = j2 + .58 * vec3(sin(a2), cos(a2), 0.);
  float d = sdBox(p + vec3(0., .84, 0.), vec3(.48, .05, .48));
  d = min(d, sdCaps(p, vec3(0., -.78, 0.), j1, .17));
  d = min(d, sdCaps(p, j1, j2, .1));
  d = min(d, sdCaps(p, j2, j3, .08));
  d = min(d, length(p - j2) - .14);
  return min(d, sdBox(p - j3, vec3(.13, .05, .13)));
}

// How bright a solid is where a straight line from this dot meets it.
float solid(vec2 q, float s) {
  if (dot(q, q) > 1.9) return 0.;
  vec3 ro = spin(vec3(q, 3.)), rd = spin(vec3(0., 0., -1.));
  float t = 1.3, hit = 0.;
  for (int i = 0; i < 40; i++) {
    float d = map(ro + rd * t, s);
    if (d < .005) { hit = 1.; break; }
    t += d * .72;
    if (t > 4.8) break;
  }
  if (hit < .5) return 0.;
  vec3 p = ro + rd * t;
  vec2 e = vec2(.01, 0.);
  vec3 n = normalize(vec3(
    map(p + e.xyy, s) - map(p - e.xyy, s),
    map(p + e.yxy, s) - map(p - e.yxy, s),
    map(p + e.yyx, s) - map(p - e.yyx, s)));
  float dif = max(dot(n, spin(normalize(vec3(-.5, .7, .5)))), 0.);
  float rim = pow(1. - max(dot(n, -rd), 0.), 2.);
  if (s < 1.5) {
    // The brain: a net of lines over the ball, brightest where lines meet.
    float u1 = acos(clamp(n.y, -1., 1.)) * 2.546;
    float u2 = acos(clamp(dot(n, vec3(.94, .34, 0.)), -1., 1.)) * 2.546;
    float u3 = acos(clamp(dot(n, vec3(-.47, .34, .81)), -1., 1.)) * 2.546;
    float l1 = 1. - smoothstep(.05, .11, abs(fract(u1) - .5));
    float l2 = 1. - smoothstep(.05, .11, abs(fract(u2) - .5));
    float l3 = 1. - smoothstep(.05, .11, abs(fract(u3) - .5));
    float net = max(l1, max(l2, l3));
    return clamp(.04 + .28 * dif + net * (.3 + .5 * dif) + step(1.4, l1 + l2 + l3) * .6 + .15 * rim, 0., 1.);
  }
  return clamp(.08 + .8 * dif + .22 * rim, 0., 1.);
}

// The three flat drawings: a half sun, a tunnel and a row of buildings.
float flat2(vec2 c, float s, vec4 R) {
  if (s < 10.5) {
    vec2 o = c - vec2(R.x, R.y - R.w);
    float r = length(o) / min(R.z, 2. * R.w);
    return o.y > 0. ? pow(clamp(1. - r, 0., 1.), 1.25) : 0.;
  }
  if (s < 11.5) {
    vec2 o = (c - R.xy) / min(R.z, R.w);
    float r = length(o);
    float ring = smoothstep(.2, .45, abs(fract(.8 / (r + .1) + uTime * 1.4) - .5));
    return ring * smoothstep(.08, .6, r) * (1. - smoothstep(.85, 1.3, r)) * .85;
  }
  vec2 o = c - vec2(R.x - R.z, R.y - R.w);
  if (o.x < 0. || o.x > 2. * R.z || o.y < 0.) return 0.;
  float wide = max(3., floor(R.z / 9.));
  if (mod(o.x, wide) < uK) return 0.;
  float i = floor(o.x / wide);
  if (o.y > (.2 + .8 * hash(vec2(i, 7.))) * 2. * R.w) return 0.;
  float lit = mod(floor(o.x / (2. * uK)) + floor(o.y / (2. * uK)), 2.) > .5 ? 1. : .5;
  return (.3 + .6 * hash(vec2(i, 3.))) * lit;
}

float shade(vec2 c, float s, vec4 R, sampler2D tex, vec4 M, float F) {
  if (s > 12.5) {
    if (abs(c.x - R.x) > R.z || abs(c.y - R.y) > R.w) return 0.;
    float k = F > .5 ? max(R.z / M.x, R.w) : min(R.z / M.x, R.w);
    vec2 uv = vec2((c.x - R.x) / (k * M.x), (R.y - c.y) / k) * .5 + .5;
    if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) return 0.;
    // A picture with many frames is a short loop: Curl waves.
    float f = mod(floor(uTime * 12.), M.w);
    vec2 fr = vec2(mod(f, M.y), floor(f / M.y));
    return texture2D(tex, (clamp(uv, .004, .996) + fr) / vec2(M.y, M.z)).r;
  }
  if (s > 9.5) return flat2(c, s, R);
  // The wide solids (the maze, the stack, the star) are drawn a little
  // smaller, so they stay inside their place whichever way they are turned.
  float fit = s > 4.5 && s < 5.5 ? 1.32 : (s > 2.5 && s < 3.5) || (s > 5.5 && s < 6.5) ? 1.12 : 1.;
  return solid((c - R.xy) / min(R.z, R.w) * fit, s);
}

void main() {
  vec2 c = floor(gl_FragCoord.xy) + .5;
  float n1 = hash(c), n2 = hash(c + 31.7);
  vec2 jit = vec2(n1, n2) - .5;
  // Dots near the pointer are pushed away from it.
  vec2 dp = c - uPtr.xy;
  float pw = uPtr.z * exp(-dot(dp, dp) / (320. * uK * uK));
  vec2 at = c - (normalize(dp + .001) * pw * 10. - jit * (pw * 8. + uBurst * 46.)) * uK;
  // Each dot changes from the old object to the new one at its own moment.
  float m = uMix;
  float b = 0.;
  // The dots shade from one colour at the head of the object to another at its foot.
  vec3 ink = mix(uJA, uIA, clamp((c.y - uRA.y + uRA.w) / (2. * uRA.w), 0., 1.));
  if (m < .25 + .5 * n2) {
    if (uSA > .5) b = shade(at + jit * 90. * uK * m * m, uSA, uRA, uTA, uMA, uFA) * (1. - smoothstep(.3, .8, m));
  } else {
    float w = 1. - m;
    if (uSB > .5) b = shade(at + jit * 90. * uK * w * w, uSB, uRB, uTB, uMB, uFB) * smoothstep(.15, .7, m);
    ink = mix(uJB, uIB, clamp((c.y - uRB.y + uRB.w) / (2. * uRB.w), 0., 1.));
  }
  b *= 1. - .55 * uBurst * n1;
  // The brightness is lifted, so more squares are lit and they lie closer.
  float lift = b > .02 ? pow(b, .68) : 0.;
  float on = step(bayer(c) + .03, lift);
  // Between two lit squares the object is not empty: a dim square fills the room.
  float a = max(on, lift * .46);
  gl_FragColor = vec4(ink * a, a);
}
`,l={time:"uTime",k:"uK",mix:"uMix",burst:"uBurst",sa:"uSA",sb:"uSB",fa:"uFA",fb:"uFB",ra:"uRA",rb:"uRB",ma:"uMA",mb:"uMB",ia:"uIA",ib:"uIB",ja:"uJA",jb:"uJB",ptr:"uPtr",rot:"uRot"},s="anita-coarse";function u(e){let t=e.trim().match(/^#([0-9a-f]{6})$/i)?.[1];if(t)return[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)/255);let n=e.match(/[\d.]+/g)?.map(Number)??[];return n.length<3?[1,1,1]:[n[0]/255,n[1]/255,n[2]/255]}let c=e=>String(e).padStart(2,"0");e.s(["Stage",0,function(){let e=(0,n.usePathname)(),f=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useRef)(null),[h,p]=(0,r.useState)({shots:[],at:-1,beat:0,tone:""});(0,r.useEffect)(()=>{if(!f.current||!d.current)return;let e=function(e,t,n){let r=document.documentElement;if(!r.classList.contains("film"))return null;let c=window.matchMedia("(prefers-reduced-motion: reduce)"),f=function(e,t,n){let r=e.getContext("webgl",{alpha:!0,antialias:!1,powerPreference:"low-power"});if(!r)return null;let o=r.getExtension("KHR_parallel_shader_compile"),u=(e,t)=>{let n=r.createShader(e);return n?(r.shaderSource(n,t),r.compileShader(n),n):null},c=u(r.VERTEX_SHADER,"attribute vec2 p; void main() { gl_Position = vec4(p, 0., 1.); }"),f=u(r.FRAGMENT_SHADER,i),d=r.createProgram();if(!c||!f||!d)return null;r.attachShader(d,c),r.attachShader(d,f),r.linkProgram(d);let m=!1,h={};function p(){!o||r.getProgramParameter(d,o.COMPLETION_STATUS_KHR)?function(){if(r.isContextLost()||!r.getProgramParameter(d,r.LINK_STATUS)){console.warn("The stage could not be drawn:",r.getShaderInfoLog(f)),n();return}r.useProgram(d),r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW);let e=r.getAttribLocation(d,"p");r.enableVertexAttribArray(e),r.vertexAttribPointer(e,2,r.FLOAT,!1,0,0),r.disable(r.DEPTH_TEST),r.disable(r.BLEND),r.clearColor(0,0,0,0);let t=e=>r.getUniformLocation(d,e);for(let[e,n]of Object.entries(l))h[e]=t(n);r.uniform1i(t("uTA"),0),r.uniform1i(t("uTB"),1),m=!0,k()}():setTimeout(p,40)}requestAnimationFrame(()=>setTimeout(p,0)),e.addEventListener("webglcontextlost",e=>{e.preventDefault(),m=!1,n()});let v=new Map,g=r.createTexture();function w(e){if(!e)return g;let t=v.get(e);if(t)return t;let n=r.createTexture();if(!n)return g;v.set(e,n),r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,1,1,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([0]));let o=new Image;return o.onload=()=>{r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,r.LUMINANCE,r.UNSIGNED_BYTE,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),x.src===e&&E>=1&&(b=a,E=0,T=performance.now()),k()},o.src=e,n}r.bindTexture(r.TEXTURE_2D,g),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,1,1,0,r.LUMINANCE,r.UNSIGNED_BYTE,new Uint8Array([0]));let y=2,b=a,x=a,E=1,T=0,R=0,M=0,A=0,L=function(){try{return Math.min(2,Number(window.sessionStorage.getItem(s))||0)}catch{return 0}}(),S=0,_=16,P=performance.now(),N=0,j=0,I={x:-999,y:-999,power:0,want:0,yaw:0,pitch:0},B=t=>[t[0]/y,e.height-t[1]/y,t[2]/y,t[3]/y];function C(n){if(R=0,document.hidden||!m)return;if(S&&n-S<250&&(_+=(n-S-_)*.05),S=n,_>30&&y<4&&n-P>3e3){L+=1;try{window.sessionStorage.setItem(s,String(L))}catch{}U()}let o=E<1||N>0||Math.abs(I.want-I.power)>.01||n-A<300;if(n-M<(o?14:30)){R=requestAnimationFrame(C);return}let a=M?Math.min(3,(n-M)/33):1;M=n;let i=t();E<1&&(E=i?1:Math.min(1,(n-T)/900)),N=i||N<.02?0:N*Math.pow(.9,a),I.power+=((i?0:I.want)-I.power)*(1-Math.pow(.85,a)),function(t){let n=E*E*(3-2*E);r.disable(r.SCISSOR_TEST),r.clear(r.COLOR_BUFFER_BIT);let o=4/y,a=(E<1?50:N>0?28:16)*o,i=1/0,l=1/0,s=-1/0,u=-1/0;for(let e of E<1?[b,x]:[x]){if(!e.shape)continue;let[t,n,r,o]=B(e.box),a=13===e.shape?0:1.4*Math.min(r,o);i=Math.min(i,t-Math.max(r,a)),s=Math.max(s,t+Math.max(r,a)),l=Math.min(l,n-Math.max(o,a)),u=Math.max(u,n+Math.max(o,a))}i=Math.max(0,Math.floor(i-a)),l=Math.max(0,Math.floor(l-a)),s=Math.min(e.width,Math.ceil(s+a)),u=Math.min(e.height,Math.ceil(u+a)),s>i&&u>l&&(r.enable(r.SCISSOR_TEST),r.scissor(i,l,s-i,u-l),r.uniform1f(h.time,t),r.uniform1f(h.k,o),r.uniform1f(h.mix,n),r.uniform1f(h.burst,N),r.uniform1f(h.sa,b.shape),r.uniform1f(h.sb,x.shape),r.uniform1f(h.fa,b.cover),r.uniform1f(h.fb,x.cover),r.uniform4fv(h.ra,B(b.box)),r.uniform4fv(h.rb,B(x.box)),r.uniform4fv(h.ma,b.meta),r.uniform4fv(h.mb,x.meta),r.uniform3fv(h.ia,b.ink),r.uniform3fv(h.ib,x.ink),r.uniform3fv(h.ja,b.ink2),r.uniform3fv(h.jb,x.ink2),r.uniform3f(h.ptr,I.x/y,e.height-I.y/y,I.power),r.uniform2f(h.rot,.45*t+j+I.yaw+(I.x>-900?(I.x/window.innerWidth-.5)*.7:0),.5+I.pitch+(I.x>-900?(I.y/window.innerHeight-.5)*.35:0)),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,13===b.shape?w(b.src):g),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,13===x.shape?w(x.src):g),r.drawArrays(r.TRIANGLES,0,3))}(i?0:n/1e3);let l=0===x.shape&&E>=1;i||l||(R=requestAnimationFrame(C))}function k(){!R&&m&&(R=requestAnimationFrame(C))}function U(){y=Math.min(4,(window.innerWidth*window.innerHeight>28e5?3:2)+L),_=16,S=0,P=performance.now();let t=Math.ceil(window.innerWidth/y),n=Math.ceil(window.innerHeight/y);(e.width!==t||e.height!==n)&&(e.width=t,e.height=n,r.viewport(0,0,t,n)),e.style.width=`${t*y}px`,e.style.height=`${n*y}px`,k()}return{resize:U,show(e){e.shape===x.shape&&e.src===x.src?x=e:(b=E>.5?x:b,x=e,E=0,T=performance.now(),13===e.shape&&w(e.src)),k()},point(e,t){I.x=e,I.y=t,I.want=1,A=performance.now()},rest(){I.want=0},turn(e,t){I.yaw+=.012*e,I.pitch=Math.max(-.9,Math.min(.9,I.pitch+.008*t)),A=performance.now(),k()},scatter(){t()||(N=1,k())},scroll(e){t()||(j!==.0032*e&&(A=performance.now()),j=.0032*e)},wake:k,stop(){cancelAnimationFrame(R),R=0}}}(e,()=>c.matches,()=>r.classList.add("nogl"));f||r.classList.add("nogl");let d=[],m=-2,h=-1,p=null,v=null,g=!1,w=!1,y=null,b=document.getElementById("menu");function x(){let e=window.innerHeight,t=Math.round(.62*e),n=[...document.querySelectorAll(".paper")];for(let e of d){let t=e.el.firstElementChild;e.flow=!t||"fixed"!==getComputedStyle(t).position,e.el.classList.toggle("flow",e.flow),e.flow&&(e.el.style.height="")}for(let r of(d.forEach((r,o)=>{var a,i;if(r.flow)return;let l=d.slice(o+1).find(e=>!e.flow),s=!l||(a=r.el,i=l.el,n.some(e=>a.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING&&(!i||e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)))||d.slice(o+1,d.indexOf(l)).length>0;r.step=t,r.el.style.height=`${(r.beats.length-1)*t+(s?e:t)}px`}),d)){let e=r.el.getBoundingClientRect();r.top=e.top+window.scrollY,r.height=e.height}}function E(){let e=m>=0?d[m]:null,n=null,r=null;if(g&&b)n=(p&&b.contains(p)?p:b.querySelector("[aria-current='page'][data-set]"))??b,r=b.querySelector("[data-obj]"),t.dataset.g="black",t.dataset.tone=n?.dataset.tone??"";else if(e){let o=e.beats[h]?.[0],a=o?.dataset.g??e.g,i=o?.dataset.tone??e.tone;e.el.dataset.g=a,i?e.el.dataset.tone=i:delete e.el.dataset.tone,t.dataset.g=a,t.dataset.tone=i||(e.el.parentElement?.closest("[data-tone]")?.dataset.tone??"");let l=(p&&e.el.contains(p)?p:null)??e.el.querySelector("input[data-set]:checked"),s=o&&(o.dataset.shape||o.dataset.pic)?o:e.el;n=l??s,r=o?.querySelector("[data-obj]")??[...e.el.querySelectorAll("[data-obj]")].find(e=>!e.closest("[data-beat]"))??null}else t.dataset.g="black";for(let e of document.querySelectorAll(".picked"))e.classList.remove("picked");p&&p.classList.add("picked");let i=n?.hasAttribute("data-set")?n.dataset.tone:void 0;for(let e of document.querySelectorAll("[data-obj][data-tone]"))e===r&&i||delete e.dataset.tone;r&&i&&(r.dataset.tone=i),v=null;let l=n&&r&&(n.dataset.shape||n.dataset.pic)?r.getBoundingClientRect():null,s=l&&l.width>=2&&l.height>=2?l:null,c=Math.min(window.innerWidth,window.innerHeight),w=s?Math.max(.42*c,Math.min(.95*c,.9*Math.max(s.width,s.height))):.7*c;if(t.style.setProperty("--ox",`${Math.round(s?s.left+s.width/2:window.innerWidth/2)}px`),t.style.setProperty("--oy",`${Math.round(s?s.top+s.height/2:.45*window.innerHeight)}px`),t.style.setProperty("--or",`${Math.round(w)}px`),!f)return;if(!n||!r||!s)return void f.show(a);v=r;let y=getComputedStyle(r),x=u(y.color),E=y.getPropertyValue("--obj-2");f.show({shape:n.dataset.pic?13:o[n.dataset.shape??""]??0,src:n.dataset.pic??"",meta:n.dataset.meta?.split(" ").map(Number)??[1,1,1,1],cover:+("cover"===n.dataset.fit),box:[s.left+s.width/2,s.top+s.height/2,s.width/2,s.height/2],ink:x,ink2:E?u(E):x})}function T(){w=!1;let e=window.scrollY,r=window.innerHeight,o=-1;for(let t=0;t<d.length;t++){let n=d[t];if(!n.flow&&!(n.top+n.height<=e+1)){n.top<e+r&&(o=t);break}}let a=0;if(o>=0){let t=d[o];a=Math.max(0,Math.min(t.beats.length-1,Math.floor((e-t.top)/t.step)))}y?.isConnected||(y=document.querySelector(".hud"));let i=o>=0?(e-d[o].top)/Math.max(1,d[o].height):0;y?.style.setProperty("--through",Math.max(.04,Math.min(1,i)).toFixed(3)),f?.scroll(e),(o!==m||a!==h)&&(o!==m&&(p=null),m=o,h=a,d.forEach((e,t)=>{let n=e.flow||t===m;for(let t of(e.el.classList.toggle("on",n),e.beats.forEach((t,r)=>{for(let o of t)o.classList.toggle("on",e.flow||n&&r===h)}),e.stays))t.el.classList.toggle("in",e.flow||n&&h>=t.from&&h<t.until);n||e.flow||(e.el.dataset.g=e.g,e.tone?e.el.dataset.tone=e.tone:delete e.el.dataset.tone)}),E(),n({shots:d.filter(e=>!e.flow).map(e=>({title:e.title,beats:e.beats.length})),at:m<0?-1:d.slice(0,m).filter(e=>!e.flow).length,beat:h,tone:t.dataset.tone??""}))}let R=()=>{w||(w=!0,requestAnimationFrame(T))},M={w:window.innerWidth,h:window.innerHeight},A=()=>{f?.resize();let e=window.innerWidth,t=window.innerHeight;(e!==M.w||Math.abs(t-M.h)>130)&&(M={w:e,h:t},x()),m=-2,T()},L=()=>E(),S=e=>{if(e.altKey||e.ctrlKey||e.metaKey||g)return;let t=e.target instanceof HTMLElement?e.target:null;if(t?.closest("input, textarea, select, [contenteditable], dialog"))return;let n=["ArrowDown","PageDown"," "].includes(e.key)&&!e.shiftKey,r=["ArrowUp","PageUp"].includes(e.key)||" "===e.key&&e.shiftKey;(n||r)&&!(" "===e.key&&t?.closest("a, button, summary, label"))&&function(e){if(m<0)return!1;let t=window.scrollY,n=d.filter(e=>!e.flow).flatMap(e=>e.beats.map((t,n)=>e.top+n*e.step)),r=e>0?n.find(e=>e>t+2):[...n].reverse().find(e=>e<t-2);return!(void 0===r||Math.abs(r-t)>window.innerHeight+2)&&(window.scrollTo({top:r,behavior:"instant"}),!0)}(n?1:-1)&&e.preventDefault()},_=e=>{let t=e.target instanceof HTMLElement?e.target:null;if(!t||!t.matches(":focus-visible"))return;let n=d.findIndex(e=>e.el.contains(t));if(n<0||d[n].flow)return;let r=Number(t.closest("[data-beat]")?.dataset.beat??(n===m?h:0));(n!==m||r!==h)&&window.scrollTo({top:d[n].top+r*d[n].step+1,behavior:"instant"})},P=e=>{let t=e.target instanceof Element?e.target.closest("[data-set]"):null;!t||t===p||t instanceof HTMLInputElement&&!t.checked||(p=t,E())},N=null,j=e=>{let t=e.target instanceof Element?e.target:null;if(!t||!v||!v.closest("[data-shot], #menu")?.contains(t)||t.closest("a, button, input, select, textarea, summary, label, [data-set]"))return;let n=v.getBoundingClientRect();!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)||((e,t)=>{let n=document,r=n.caretPositionFromPoint?.(e,t)?.offsetNode??n.caretRangeFromPoint?.(e,t)?.startContainer;if(!r||r.nodeType!==Node.TEXT_NODE)return!1;let o=document.createRange();return o.selectNodeContents(r),[...o.getClientRects()].some(n=>e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom)})(e.clientX,e.clientY)||(N={x:e.clientX,y:e.clientY,moved:0})},I=e=>{N&&e.preventDefault()},B=e=>{if("mouse"===e.pointerType&&f?.point(e.clientX,e.clientY),!N)return;let t=e.clientX-N.x,n=e.clientY-N.y;N={x:e.clientX,y:e.clientY,moved:N.moved+Math.abs(t)+Math.abs(n)},f?.turn(t,n)},C=()=>{N&&N.moved<5&&f?.scatter(),N=null},k=()=>{N=null},U=()=>f?.rest(),q=()=>{document.hidden||f?.wake()},F=e=>{g="open"===e.newState,p=null,E()},D=()=>f?.wake();return f?.resize(),window.addEventListener("scroll",R,{passive:!0}),window.addEventListener("resize",A),window.addEventListener("keydown",S),window.addEventListener("pointermove",B,{passive:!0}),window.addEventListener("pointerup",C),window.addEventListener("pointercancel",k),document.addEventListener("pointerdown",j),document.addEventListener("selectstart",I),document.addEventListener("pointerover",P),document.addEventListener("focusin",P),document.addEventListener("change",P),document.addEventListener("focusin",_),document.addEventListener("mouseleave",U),document.addEventListener("visibilitychange",q),document.addEventListener("toggle",L,!0),b?.addEventListener("toggle",F),c.addEventListener("change",D),{scan:function(){for(let e of(d=[...document.querySelectorAll("[data-shot]")].map(e=>{let t=[];for(let n of e.querySelectorAll("[data-beat]")){let e=Number(n.dataset.beat);(t[e]??=[]).push(n)}let n=[...e.querySelectorAll("[data-from]")].map(e=>{let n=Number(e.dataset.from),r=e.dataset.until?Number(e.dataset.until):1/0;return t[n]??=[],Number.isFinite(r)&&(t[r]??=[]),{el:e,from:n,until:r}});for(let e=0;e<t.length;e++)t[e]??=[];let r=e.dataset.g0??=e.dataset.g??"black",o=e.dataset.tone0??=e.dataset.tone??"";return{el:e,title:e.dataset.title??"",beats:t.length?t:[[]],stays:n,g:r,tone:o,top:0,height:0,step:0,flow:!1}}),document.querySelectorAll("details.fold[open]")))e.open=!1;m=-2,h=-1,p=null,x(),r.classList.add("live"),T(),window.location.hash.length>1&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()},jump(e){let t=d.filter(e=>!e.flow)[e];t&&window.scrollTo({top:t.top+1,behavior:"instant"})},destroy(){f?.stop(),window.removeEventListener("scroll",R),window.removeEventListener("resize",A),window.removeEventListener("keydown",S),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",C),window.removeEventListener("pointercancel",k),document.removeEventListener("pointerdown",j),document.removeEventListener("selectstart",I),document.removeEventListener("pointerover",P),document.removeEventListener("focusin",P),document.removeEventListener("change",P),document.removeEventListener("focusin",_),document.removeEventListener("mouseleave",U),document.removeEventListener("visibilitychange",q),document.removeEventListener("toggle",L,!0),b?.removeEventListener("toggle",F),c.removeEventListener("change",D)}}}(f.current,d.current,p);return m.current=e,()=>{e?.destroy(),m.current=null}},[]),(0,r.useEffect)(()=>{m.current?.scan();let e=requestAnimationFrame(()=>m.current?.scan());return()=>cancelAnimationFrame(e)},[e]);let v=h.at>=0?h.shots[h.at]:void 0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:d,className:"ground","data-g":"black","aria-hidden":"true"}),(0,t.jsx)("canvas",{ref:f,className:"stage","aria-hidden":"true"}),h.shots.length>0?(0,t.jsxs)("nav",{className:"hud","aria-label":"The shots on this page","data-tone":h.tone||void 0,children:[(0,t.jsxs)("p",{className:"hud-count","aria-hidden":"true",children:[h.at>=0?c(h.at+1):"--"," / ",c(h.shots.length)]}),(0,t.jsx)("ol",{className:"hud-ticks",children:h.shots.map((e,n)=>(0,t.jsx)("li",{style:{flexGrow:e.beats},children:(0,t.jsx)("button",{type:"button","aria-label":`${n+1}. ${e.title}`,"aria-current":n===h.at?"true":void 0,onClick:()=>m.current?.jump(n),children:(0,t.jsx)("i",{style:{width:n<h.at?"100%":n===h.at?`calc(var(--through, ${(h.beat+1)/e.beats}) * 100%)`:"0%"}})})},n))}),(0,t.jsx)("p",{className:"hud-title",children:0===h.at&&0===h.beat?"Scroll · Drag · Press":v?.title},v?.title)]}):null]})}],52899)}]);