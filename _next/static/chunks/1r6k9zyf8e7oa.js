(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return g},useLinkStatus:function(){return y}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(90809),i=e.r(43476),l=a._(e.r(71645)),s=e.r(95057),u=e.r(8372),c=e.r(18581),d=e.r(18967),f=e.r(5550),h=e.r(88540),p=e.r(91949),m=e.r(73668),v=e.r(9396);function g(t){var n;let r,o,a,[g,y]=(0,l.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,l.useRef)(null),{href:x,as:E,children:T,prefetch:S=null,passHref:R,replace:P,shallow:A,scroll:L,onClick:M,onMouseEnter:_,onTouchStart:N,legacyBehavior:j=!1,onNavigate:C,transitionTypes:I,ref:k,unstable_dynamicOnHover:U,...q}=t;r=T,j&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let O=l.default.useContext(u.AppRouterContext),D=!1!==S,F=!1===S?"none":!0===S?"full":"auto",H="none"!==F?"auto"===F?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,z="string"==typeof(n=E||x)?n:(0,s.formatUrl)(n);if(j){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");o=l.default.Children.only(r)}let B=j?o&&"object"==typeof o&&o.ref:k,$,K=l.default.useCallback(e=>(null!==O&&(b.current=(0,p.mountLinkInstance)(e,z,O,H,D,y,$)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[D,z,O,H,y,$]),X={ref:(0,c.useMergedRef)(K,B),onClick(t){j||"function"!=typeof M||M(t),j&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!O||t.defaultPrevented||function(t,n,r,o,a,i,l,s="none"){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{navigate:d}=e.r(32916);d(n,o?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,r.current,l,s)}}(t,z,b,P,L,C,I,F)},onMouseEnter(e){j||"function"!=typeof _||_(e),j&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),O&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===U)},onTouchStart:function(e){j||"function"!=typeof N||N(e),j&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),O&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===U)}};return(0,d.isAbsoluteUrl)(z)?X.href=z:j&&!R&&("a"!==o.type||"href"in o.props)||(X.href=(0,f.addBasePath)(z)),a=j?l.default.cloneElement(o,X):(0,i.jsx)("a",{...q,...X,children:r}),(0,i.jsx)(w.Provider,{value:g,children:a})}let w=(0,l.createContext)(p.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(w);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},95057,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==u?(u="//"+(u||""),o&&"/"!==o[0]&&(o="/"+o)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${u}${o}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(18967),o=e.r(52817);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},18967,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return b},NormalizeError:function(){return w},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return v},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return E}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=["CLS","FCP","INP","LCP","TTFB"];function i(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let m="u">typeof performance,v=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class w extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},18566,(e,t,n)=>{t.exports=e.r(76562)},2576,e=>{"use strict";var t=e.i(43476),n=e.i(22016),r=e.i(18566),o=e.i(71645);e.s(["CloseMenusOnNavigate",0,function(){let e=(0,r.usePathname)();return(0,o.useEffect)(()=>{document.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover()}catch{}})},[e]),null},"MenuLink",0,function({href:e,className:o,children:a,exact:i=!1,marks:l}){let s=(0,r.usePathname)(),u=i?s===e:s===e||s.startsWith(e);return(0,t.jsx)(n.default,{href:e,className:o,"aria-current":u?"page":void 0,...l,children:a})}])},52899,e=>{"use strict";var t=e.i(43476),n=e.i(18566),r=e.i(71645);let o={globe:1,cube:2,stack:3,ring:4,maze:5,star:6,frame:7,stairs:8,arm:9,sun:10,tunnel:11,bars:12},a={shape:0,src:"",meta:[1,1,1,1],cover:0,box:[0,0,1,1],ink:[1,1,1],ink2:[1,1,1]},i=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#define STEPS 40
#define colour gl_FragColor
`,l=`#version 300 es
precision highp float;
#define texture2D texture
uniform int uSteps;
#define STEPS uSteps
out vec4 colour;
`,s=`
uniform float uTime, uMix, uBurst;
// How many of these squares make one of version 3's: distances that were
// counted in its squares are multiplied by this.
uniform float uK;
// Which side of a cut is drawn: 0 for the object that leaves, 1 for the one
// that arrives. uF says whether a picture covers its place or fits inside it.
uniform float uSide, uF;
uniform vec4 uR, uM;
uniform vec3 uI, uJ, uPtr;
uniform vec2 uRot;
uniform sampler2D uT;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// The ordered pattern that turns a brightness into dots.
float b2(vec2 a) { a = floor(a); return fract(a.x / 2. + a.y * a.y * .75); }
float bayer(vec2 a) { return b2(.25 * a) * .0625 + b2(.5 * a) * .25 + b2(a); }

#if SHAPE < 10
float sdBox(vec3 p, vec3 b) { vec3 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.); }
#if SHAPE == 4
float sdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }
#endif
#if SHAPE == 9
float sdCaps(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a, ba = b - a;
  return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)) - r;
}
#endif
#if SHAPE == 7
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b;
  vec3 q = abs(p + e) - e;
  return min(min(
    length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
    length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
    length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
#endif
#if SHAPE == 6
float smin(float a, float b, float k) { float h = clamp(.5 + .5 * (b - a) / k, 0., 1.); return mix(b, a, h) - k * h * (1. - h); }
#endif

// From the screen's space into the turning object's own space.
vec3 spin(vec3 v) {
  float cp = cos(uRot.y), sp = sin(uRot.y), cy = cos(uRot.x), sy = sin(uRot.x);
  v = vec3(v.x, cp * v.y + sp * v.z, cp * v.z - sp * v.y);
  return vec3(cy * v.x - sy * v.z, v.y, sy * v.x + cy * v.z);
}

// How far a point is from the surface of the solid.
float map(vec3 p) {
#if SHAPE == 1
  return length(p) - .9;
#elif SHAPE == 2
  return sdBox(p, vec3(.55)) - .03;
#elif SHAPE == 3
  float d = sdBox(p - vec3(0., -.48, 0.), vec3(.72, .13, .72));
  d = min(d, sdBox(p - vec3(.07, 0., -.05), vec3(.72, .13, .72)));
  d = min(d, sdBox(p - vec3(-.06, .48, .07), vec3(.72, .13, .72)));
  return d - .02;
#elif SHAPE == 4
  return sdTorus(p.xzy, vec2(.64, .24));
#elif SHAPE == 5
  vec2 g = p.xz / .3;
  vec2 f = fract(g) - .5;
  float w = hash(floor(g)) > .5 ? abs(f.x) : abs(f.y);
  float d = max(max((w - .13) * .3, abs(p.y - .05) - .2), max(abs(p.x), abs(p.z)) - .9);
  return min(d, sdBox(p + vec3(0., .22, 0.), vec3(.9, .07, .9)));
#elif SHAPE == 6
  float a = length(p.yz) - .3 * (1. - abs(p.x) / 1.05);
  float b = length(p.xz) - .3 * (1. - abs(p.y) / 1.05);
  // A third spike, front to back, so the star is never seen edge-on as a sliver.
  float c = length(p.xy) - .3 * (1. - abs(p.z) / 1.05);
  return max(smin(smin(a, b, .22), c, .22), length(p) - 1.05) * .8;
#elif SHAPE == 7
  return sdFrame(p, vec3(.6), .085);
#elif SHAPE == 8
  float d = sdBox(p - vec3(-.6, -.5, 0.), vec3(.2, .16, .5));
  d = min(d, sdBox(p - vec3(-.2, -.34, 0.), vec3(.2, .32, .5)));
  d = min(d, sdBox(p - vec3(.2, -.18, 0.), vec3(.2, .48, .5)));
  return min(d, sdBox(p - vec3(.6, -.02, 0.), vec3(.2, .64, .5)));
#else
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
#endif
}

// How bright the solid is where a straight line from this dot meets it.
float solid(vec2 q) {
  if (dot(q, q) > 1.9) return 0.;
  vec3 ro = spin(vec3(q, 3.)), rd = spin(vec3(0., 0., -1.));
  float t = 1.3, hit = 0.;
  for (int i = 0; i < STEPS; i++) {
    float d = map(ro + rd * t);
    if (d < .005) { hit = 1.; break; }
    t += d * .72;
    if (t > 4.8) break;
  }
  if (hit < .5) return 0.;
  vec3 p = ro + rd * t;
  vec2 e = vec2(.01, 0.);
  vec3 n = normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)));
  float dif = max(dot(n, spin(normalize(vec3(-.5, .7, .5)))), 0.);
  float rim = pow(1. - max(dot(n, -rd), 0.), 2.);
#if SHAPE == 1
  // The brain: a net of lines over the ball, brightest where lines meet.
  float u1 = acos(clamp(n.y, -1., 1.)) * 2.546;
  float u2 = acos(clamp(dot(n, vec3(.94, .34, 0.)), -1., 1.)) * 2.546;
  float u3 = acos(clamp(dot(n, vec3(-.47, .34, .81)), -1., 1.)) * 2.546;
  float l1 = 1. - smoothstep(.05, .11, abs(fract(u1) - .5));
  float l2 = 1. - smoothstep(.05, .11, abs(fract(u2) - .5));
  float l3 = 1. - smoothstep(.05, .11, abs(fract(u3) - .5));
  float net = max(l1, max(l2, l3));
  return clamp(.04 + .28 * dif + net * (.3 + .5 * dif) + step(1.4, l1 + l2 + l3) * .6 + .15 * rim, 0., 1.);
#else
  return clamp(.08 + .8 * dif + .22 * rim, 0., 1.);
#endif
}
#endif

// How bright the object is at one point of the screen.
float shade(vec2 c) {
#if SHAPE == 13
  // A picture.
  if (abs(c.x - uR.x) > uR.z || abs(c.y - uR.y) > uR.w) return 0.;
  float k = uF > .5 ? max(uR.z / uM.x, uR.w) : min(uR.z / uM.x, uR.w);
  vec2 uv = vec2((c.x - uR.x) / (k * uM.x), (uR.y - c.y) / k) * .5 + .5;
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) return 0.;
  // A picture with many frames is a short loop: Curl waves.
  float f = mod(floor(uTime * 12.), uM.w);
  vec2 fr = vec2(mod(f, uM.y), floor(f / uM.y));
  return texture2D(uT, (clamp(uv, .004, .996) + fr) / vec2(uM.y, uM.z)).r;
#elif SHAPE == 10
  // A half sun.
  vec2 o = c - vec2(uR.x, uR.y - uR.w);
  float r = length(o) / min(uR.z, 2. * uR.w);
  return o.y > 0. ? pow(clamp(1. - r, 0., 1.), 1.25) : 0.;
#elif SHAPE == 11
  // A tunnel.
  vec2 o = (c - uR.xy) / min(uR.z, uR.w);
  float r = length(o);
  float ring = smoothstep(.2, .45, abs(fract(.8 / (r + .1) + uTime * 1.4) - .5));
  return ring * smoothstep(.08, .6, r) * (1. - smoothstep(.85, 1.3, r)) * .85;
#elif SHAPE == 12
  // A row of buildings.
  vec2 o = c - vec2(uR.x - uR.z, uR.y - uR.w);
  if (o.x < 0. || o.x > 2. * uR.z || o.y < 0.) return 0.;
  float wide = max(3., floor(uR.z / 9.));
  if (mod(o.x, wide) < uK) return 0.;
  float i = floor(o.x / wide);
  if (o.y > (.2 + .8 * hash(vec2(i, 7.))) * 2. * uR.w) return 0.;
  float lit = mod(floor(o.x / (2. * uK)) + floor(o.y / (2. * uK)), 2.) > .5 ? 1. : .5;
  return (.3 + .6 * hash(vec2(i, 3.))) * lit;
#else
  // A solid. The wide ones (the maze, the stack, the star) are drawn a little
  // smaller, so they stay inside their place whichever way they are turned.
#if SHAPE == 5
  float fit = 1.32;
#elif SHAPE == 3 || SHAPE == 6
  float fit = 1.12;
#else
  float fit = 1.;
#endif
  return solid((c - uR.xy) / min(uR.z, uR.w) * fit);
#endif
}

void main() {
  vec2 c = floor(gl_FragCoord.xy) + .5;
  float n1 = hash(c), n2 = hash(c + 31.7);
  // At a cut each dot changes from the old object to the new one at its own
  // moment. One drawing keeps only the dots on its own side of the cut.
  float m = uMix;
  bool old = m < .25 + .5 * n2;
  if (old == (uSide > .5)) discard;
  vec2 jit = vec2(n1, n2) - .5;
  // Dots near the pointer are pushed away from it.
  vec2 dp = c - uPtr.xy;
  float pw = uPtr.z * exp(-dot(dp, dp) / (320. * uK * uK));
  vec2 at = c - (normalize(dp + .001) * pw * 10. - jit * (pw * 8. + uBurst * 46.)) * uK;
  // The leaving object scatters as it goes. The arriving one gathers.
  float w = old ? m : 1. - m;
  float b = shade(at + jit * 90. * uK * w * w) * (old ? 1. - smoothstep(.3, .8, m) : smoothstep(.15, .7, m));
  b *= 1. - .55 * uBurst * n1;
  // The brightness is lifted, so more squares are lit and they lie closer.
  float lift = b > .02 ? pow(b, .68) : 0.;
  float on = step(bayer(c) + .03, lift);
  // Between two lit squares the object is not empty: a dim square fills the room.
  float a = max(on, lift * .46);
  // The dots shade from one colour at the head of the object to another at its foot.
  vec3 ink = mix(uJ, uI, clamp((c.y - uR.y + uR.w) / (2. * uR.w), 0., 1.));
  colour = vec4(ink * a, a);
}
`,u={time:"uTime",k:"uK",mix:"uMix",burst:"uBurst",side:"uSide",f:"uF",r:"uR",m:"uM",i:"uI",j:"uJ",ptr:"uPtr",rot:"uRot",steps:"uSteps"},c="anita-coarse";function d(e){let t=e.trim().match(/^#([0-9a-f]{6})$/i)?.[1];if(t)return[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)/255);let n=e.match(/[\d.]+/g)?.map(Number)??[];return n.length<3?[1,1,1]:[n[0]/255,n[1]/255,n[2]/255]}let f=e=>String(e).padStart(2,"0");e.s(["Stage",0,function(){let e=(0,n.usePathname)(),h=(0,r.useRef)(null),p=(0,r.useRef)(null),m=(0,r.useRef)(null),[v,g]=(0,r.useState)({shots:[],at:-1,beat:0,tone:""});(0,r.useEffect)(()=>{if(!h.current||!p.current)return;let e=function(e,t,n){let r=document.documentElement;if(!r.classList.contains("film"))return null;let f=window.matchMedia("(prefers-reduced-motion: reduce)"),h=function(e,t,n){let r={alpha:!0,antialias:!1,powerPreference:"low-power"},o=e.getContext("webgl2",r),d=o??e.getContext("webgl",r);if(!d)return null;let f=d.getExtension("KHR_parallel_shader_compile"),h=(e,t)=>{let n=d.createShader(e);return n?(d.shaderSource(n,t),d.compileShader(n),n):null},p=h(d.VERTEX_SHADER,o?"#version 300 es\nin vec2 p; void main() { gl_Position = vec4(p, 0., 1.); }":"attribute vec2 p; void main() { gl_Position = vec4(p, 0., 1.); }");if(!p)return null;d.bindBuffer(d.ARRAY_BUFFER,d.createBuffer()),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),d.STATIC_DRAW),d.enableVertexAttribArray(0),d.vertexAttribPointer(0,2,d.FLOAT,!1,0,0),d.disable(d.DEPTH_TEST),d.disable(d.BLEND),d.clearColor(0,0,0,0);let m=new Map,v=[],g=[],w=0,y=!1,b=!1;function x(e){b||console.warn("The stage could not be drawn:",e),b=!0,n()}function E(e,t){if(!e||b||m.has(e)||w===e)return;let n=g.indexOf(e);if(n>=0){if(!t)return;g.splice(n,1)}t?g.unshift(e):g.push(e),T()}function T(){if(!y||w||b)return;let e=g.shift();if(!e)return;let t=h(d.FRAGMENT_SHADER,`${o?l:i}#define SHAPE ${e}
${s}`),n=d.createProgram();if(!t||!n)return void x("no room for a program");w=e,d.attachShader(n,p),d.attachShader(n,t),d.bindAttribLocation(n,0,"p"),d.linkProgram(n);let r=()=>{var o;if(b)return;if(f&&!d.getProgramParameter(n,f.COMPLETION_STATUS_KHR))return void setTimeout(r,30);if(!d.getProgramParameter(n,d.LINK_STATUS))return void x(d.getShaderInfoLog(t)||d.getProgramInfoLog(n));let i={};for(let[e,t]of Object.entries(u))i[e]=d.getUniformLocation(n,t);d.useProgram(n),d.uniform1i(i.steps,40);let l={program:n,loc:i};m.set(e,l),v.push(l),w=0,o=e,U=0,q=16,O=performance.now(),M.shape===o&&_>.3&&(L=a,_=0,N=performance.now()),$(),setTimeout(T,200)};setTimeout(r,0)}requestAnimationFrame(()=>setTimeout(()=>{y=!0,T()},0)),e.addEventListener("webglcontextlost",e=>{e.preventDefault(),x("the graphics chip took the stage away")});let S=new Map,R=d.createTexture();function P(e){if(!e)return R;let t=S.get(e);if(t)return t;let n=d.createTexture();if(!n)return R;S.set(e,n),d.bindTexture(d.TEXTURE_2D,n),d.texImage2D(d.TEXTURE_2D,0,d.LUMINANCE,1,1,0,d.LUMINANCE,d.UNSIGNED_BYTE,new Uint8Array([0]));let r=new Image;return r.onload=()=>{d.bindTexture(d.TEXTURE_2D,n),d.texImage2D(d.TEXTURE_2D,0,d.LUMINANCE,d.LUMINANCE,d.UNSIGNED_BYTE,r),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.LINEAR),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),M.src===e&&_>=1&&(L=a,_=0,N=performance.now()),$()},r.src=e,n}d.bindTexture(d.TEXTURE_2D,R),d.texImage2D(d.TEXTURE_2D,0,d.LUMINANCE,1,1,0,d.LUMINANCE,d.UNSIGNED_BYTE,new Uint8Array([0]));let A=2,L=a,M=a,_=1,N=0,j=0,C=0,I=0,k=function(){try{return Math.min(2,Number(window.sessionStorage.getItem(c))||0)}catch{return 0}}(),U=0,q=16,O=performance.now(),D=0,F=0,H={x:-999,y:-999,power:0,want:0,yaw:0,pitch:0};function z(t,n,r,o){let a,i=m.get(t.shape);if(!i)return;let l=4/A,[s,u,c,f]=[(a=t.box)[0]/A,e.height-a[1]/A,a[2]/A,a[3]/A],h=(_<1?50:D>0?28:16)*l,p=13===t.shape?0:1.4*Math.min(c,f),v=Math.max(0,Math.floor(s-Math.max(c,p)-h)),g=Math.max(0,Math.floor(u-Math.max(f,p)-h)),w=Math.min(e.width,Math.ceil(s+Math.max(c,p)+h)),y=Math.min(e.height,Math.ceil(u+Math.max(f,p)+h));if(!(w>v&&y>g))return;let{loc:b}=i;d.useProgram(i.program),d.scissor(v,g,w-v,y-g),d.uniform1f(b.time,r),d.uniform1f(b.k,l),d.uniform1f(b.mix,o),d.uniform1f(b.burst,D),d.uniform1f(b.side,n),d.uniform1f(b.f,t.cover),d.uniform4fv(b.r,[s,u,c,f]),d.uniform4fv(b.m,t.meta),d.uniform3fv(b.i,t.ink),d.uniform3fv(b.j,t.ink2),d.uniform3f(b.ptr,H.x/A,e.height-H.y/A,H.power),d.uniform2f(b.rot,.45*r+F+H.yaw+(H.x>-900?(H.x/window.innerWidth-.5)*.7:0),.5+H.pitch+(H.x>-900?(H.y/window.innerHeight-.5)*.35:0)),d.bindTexture(d.TEXTURE_2D,13===t.shape?P(t.src):R),d.drawArrays(d.TRIANGLES,0,3)}function B(e){if(j=0,document.hidden)return;if(U&&e-U<250&&(q+=(e-U-q)*.05),U=e,q>40&&A<4&&e-O>4e3&&!w&&!g.length){k+=1;try{window.sessionStorage.setItem(c,String(k))}catch{}K()}let n=_<1||D>0||Math.abs(H.want-H.power)>.01||e-I<300;if(e-C<(n?14:30)){j=requestAnimationFrame(B);return}let r=C?Math.min(3,(e-C)/33):1;C=e;let o=t();_<1&&(_=o?1:Math.min(1,(e-N)/900)),D=o||D<.02?0:D*Math.pow(.9,r),H.power+=((o?0:H.want)-H.power)*(1-Math.pow(.85,r));var a=o?0:e/1e3;let i=_*_*(3-2*_);for(let e of(d.enable(d.SCISSOR_TEST),v.splice(0)))d.useProgram(e.program),d.uniform1f(e.loc.mix,1),d.uniform1f(e.loc.side,0),d.scissor(0,0,1,1),d.drawArrays(d.TRIANGLES,0,3);d.disable(d.SCISSOR_TEST),d.clear(d.COLOR_BUFFER_BIT),d.enable(d.SCISSOR_TEST),_<1&&z(L,0,a,i),z(M,1,a,i);let l=0===M.shape&&_>=1;o||l||(j=requestAnimationFrame(B))}function $(){j||(j=requestAnimationFrame(B))}function K(){A=Math.min(4,(window.innerWidth*window.innerHeight>28e5?3:2)+k),q=16,U=0,O=performance.now();let t=Math.ceil(window.innerWidth/A),n=Math.ceil(window.innerHeight/A);(e.width!==t||e.height!==n)&&(e.width=t,e.height=n,d.viewport(0,0,t,n)),e.style.width=`${t*A}px`,e.style.height=`${n*A}px`,$()}return{resize:K,show(e){e.shape===M.shape&&e.src===M.src?M=e:(L=_>.5?M:L,M=e,_=0,N=performance.now(),13===e.shape&&P(e.src)),E(e.shape,!0),$()},warm(e){for(let t of e)E(t,!1)},point(e,t){H.x=e,H.y=t,H.want=1,I=performance.now()},rest(){H.want=0},turn(e,t){H.yaw+=.012*e,H.pitch=Math.max(-.9,Math.min(.9,H.pitch+.008*t)),I=performance.now(),$()},scatter(){t()||(D=1,$())},scroll(e){t()||(F!==.0032*e&&(I=performance.now()),F=.0032*e)},wake:$,stop(){cancelAnimationFrame(j),j=0}}}(e,()=>f.matches,()=>r.classList.add("nogl"));h||r.classList.add("nogl");let p=[],m=-2,v=-1,g=null,w=null,y=!1,b=!1,x=null,E=document.getElementById("menu");function T(){let e=window.innerHeight,t=Math.round(.62*e),n=[...document.querySelectorAll(".paper")];for(let e of p){let t=e.el.firstElementChild;e.flow=!t||"fixed"!==getComputedStyle(t).position,e.el.classList.toggle("flow",e.flow),e.flow&&(e.el.style.height="")}for(let r of(p.forEach((r,o)=>{var a,i;if(r.flow)return;let l=p.slice(o+1).find(e=>!e.flow),s=!l||(a=r.el,i=l.el,n.some(e=>a.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING&&(!i||e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)))||p.slice(o+1,p.indexOf(l)).length>0;r.step=t,r.el.style.height=`${(r.beats.length-1)*t+(s?e:t)}px`}),p)){let e=r.el.getBoundingClientRect();r.top=e.top+window.scrollY,r.height=e.height}}function S(){let e=m>=0?p[m]:null,n=null,r=null;if(y&&E)n=(g&&E.contains(g)?g:E.querySelector("[aria-current='page'][data-set]"))??E,r=E.querySelector("[data-obj]"),t.dataset.g="black",t.dataset.tone=n?.dataset.tone??"";else if(e){let o=e.beats[v]?.[0],a=o?.dataset.g??e.g,i=o?.dataset.tone??e.tone;e.el.dataset.g=a,i?e.el.dataset.tone=i:delete e.el.dataset.tone,t.dataset.g=a,t.dataset.tone=i||(e.el.parentElement?.closest("[data-tone]")?.dataset.tone??"");let l=(g&&e.el.contains(g)?g:null)??e.el.querySelector("input[data-set]:checked"),s=o&&(o.dataset.shape||o.dataset.pic)?o:e.el;n=l??s,r=o?.querySelector("[data-obj]")??[...e.el.querySelectorAll("[data-obj]")].find(e=>!e.closest("[data-beat]"))??null}else t.dataset.g="black";for(let e of document.querySelectorAll(".picked"))e.classList.remove("picked");g&&g.classList.add("picked");let i=n?.hasAttribute("data-set")?n.dataset.tone:void 0;for(let e of document.querySelectorAll("[data-obj][data-tone]"))e===r&&i||delete e.dataset.tone;r&&i&&(r.dataset.tone=i),w=null;let l=n&&r&&(n.dataset.shape||n.dataset.pic)?r.getBoundingClientRect():null,s=l&&l.width>=2&&l.height>=2?l:null,u=Math.min(window.innerWidth,window.innerHeight),c=s?Math.max(.42*u,Math.min(.95*u,.9*Math.max(s.width,s.height))):.7*u;if(t.style.setProperty("--ox",`${Math.round(s?s.left+s.width/2:window.innerWidth/2)}px`),t.style.setProperty("--oy",`${Math.round(s?s.top+s.height/2:.45*window.innerHeight)}px`),t.style.setProperty("--or",`${Math.round(c)}px`),!h)return;if(!n||!r||!s)return void h.show(a);w=r;let f=getComputedStyle(r),b=d(f.color),x=f.getPropertyValue("--obj-2");h.show({shape:n.dataset.pic?13:o[n.dataset.shape??""]??0,src:n.dataset.pic??"",meta:n.dataset.meta?.split(" ").map(Number)??[1,1,1,1],cover:+("cover"===n.dataset.fit),box:[s.left+s.width/2,s.top+s.height/2,s.width/2,s.height/2],ink:b,ink2:x?d(x):b})}function R(){b=!1;let e=window.scrollY,r=window.innerHeight,o=-1;for(let t=0;t<p.length;t++){let n=p[t];if(!n.flow&&!(n.top+n.height<=e+1)){n.top<e+r&&(o=t);break}}let a=0;if(o>=0){let t=p[o];a=Math.max(0,Math.min(t.beats.length-1,Math.floor((e-t.top)/t.step)))}x?.isConnected||(x=document.querySelector(".hud"));let i=o>=0?(e-p[o].top)/Math.max(1,p[o].height):0;x?.style.setProperty("--through",Math.max(.04,Math.min(1,i)).toFixed(3)),h?.scroll(e),(o!==m||a!==v)&&(o!==m&&(g=null),m=o,v=a,p.forEach((e,t)=>{let n=e.flow||t===m;for(let t of(e.el.classList.toggle("on",n),e.beats.forEach((t,r)=>{for(let o of t)o.classList.toggle("on",e.flow||n&&r===v)}),e.stays))t.el.classList.toggle("in",e.flow||n&&v>=t.from&&v<t.until);n||e.flow||(e.el.dataset.g=e.g,e.tone?e.el.dataset.tone=e.tone:delete e.el.dataset.tone)}),S(),n({shots:p.filter(e=>!e.flow).map(e=>({title:e.title,beats:e.beats.length})),at:m<0?-1:p.slice(0,m).filter(e=>!e.flow).length,beat:v,tone:t.dataset.tone??""}))}let P=()=>{b||(b=!0,requestAnimationFrame(R))},A={w:window.innerWidth,h:window.innerHeight},L=()=>{h?.resize();let e=window.innerWidth,t=window.innerHeight;(e!==A.w||Math.abs(t-A.h)>130)&&(A={w:e,h:t},T()),m=-2,R()},M=()=>S(),_=e=>{if(e.altKey||e.ctrlKey||e.metaKey||y)return;let t=e.target instanceof HTMLElement?e.target:null;if(t?.closest("input, textarea, select, [contenteditable], dialog"))return;let n=["ArrowDown","PageDown"," "].includes(e.key)&&!e.shiftKey,r=["ArrowUp","PageUp"].includes(e.key)||" "===e.key&&e.shiftKey;(n||r)&&!(" "===e.key&&t?.closest("a, button, summary, label"))&&function(e){if(m<0)return!1;let t=window.scrollY,n=p.filter(e=>!e.flow).flatMap(e=>e.beats.map((t,n)=>e.top+n*e.step)),r=e>0?n.find(e=>e>t+2):[...n].reverse().find(e=>e<t-2);return!(void 0===r||Math.abs(r-t)>window.innerHeight+2)&&(window.scrollTo({top:r,behavior:"instant"}),!0)}(n?1:-1)&&e.preventDefault()},N=e=>{let t=e.target instanceof HTMLElement?e.target:null;if(!t||!t.matches(":focus-visible"))return;let n=p.findIndex(e=>e.el.contains(t));if(n<0||p[n].flow)return;let r=Number(t.closest("[data-beat]")?.dataset.beat??(n===m?v:0));(n!==m||r!==v)&&window.scrollTo({top:p[n].top+r*p[n].step+1,behavior:"instant"})},j=e=>{let t=e.target instanceof Element?e.target.closest("[data-set]"):null;!t||t===g||t instanceof HTMLInputElement&&!t.checked||(g=t,S())},C=null,I=e=>{let t=e.target instanceof Element?e.target:null;if(!t||!w||!w.closest("[data-shot], #menu")?.contains(t)||t.closest("a, button, input, select, textarea, summary, label, [data-set]"))return;let n=w.getBoundingClientRect();!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)||((e,t)=>{let n=document,r=n.caretPositionFromPoint?.(e,t)?.offsetNode??n.caretRangeFromPoint?.(e,t)?.startContainer;if(!r||r.nodeType!==Node.TEXT_NODE)return!1;let o=document.createRange();return o.selectNodeContents(r),[...o.getClientRects()].some(n=>e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom)})(e.clientX,e.clientY)||(C={x:e.clientX,y:e.clientY,moved:0})},k=e=>{C&&e.preventDefault()},U=e=>{if("mouse"===e.pointerType&&h?.point(e.clientX,e.clientY),!C)return;let t=e.clientX-C.x,n=e.clientY-C.y;C={x:e.clientX,y:e.clientY,moved:C.moved+Math.abs(t)+Math.abs(n)},h?.turn(t,n)},q=()=>{C&&C.moved<5&&h?.scatter(),C=null},O=()=>{C=null},D=()=>h?.rest(),F=()=>{document.hidden||h?.wake()},H=e=>{y="open"===e.newState,g=null,S()},z=()=>h?.wake();return h?.resize(),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",L),window.addEventListener("keydown",_),window.addEventListener("pointermove",U,{passive:!0}),window.addEventListener("pointerup",q),window.addEventListener("pointercancel",O),document.addEventListener("pointerdown",I),document.addEventListener("selectstart",k),document.addEventListener("pointerover",j),document.addEventListener("focusin",j),document.addEventListener("change",j),document.addEventListener("focusin",N),document.addEventListener("mouseleave",D),document.addEventListener("visibilitychange",F),document.addEventListener("toggle",M,!0),E?.addEventListener("toggle",H),f.addEventListener("change",z),{scan:function(){for(let e of(p=[...document.querySelectorAll("[data-shot]")].map(e=>{let t=[];for(let n of e.querySelectorAll("[data-beat]")){let e=Number(n.dataset.beat);(t[e]??=[]).push(n)}let n=[...e.querySelectorAll("[data-from]")].map(e=>{let n=Number(e.dataset.from),r=e.dataset.until?Number(e.dataset.until):1/0;return t[n]??=[],Number.isFinite(r)&&(t[r]??=[]),{el:e,from:n,until:r}});for(let e=0;e<t.length;e++)t[e]??=[];let r=e.dataset.g0??=e.dataset.g??"black",o=e.dataset.tone0??=e.dataset.tone??"";return{el:e,title:e.dataset.title??"",beats:t.length?t:[[]],stays:n,g:r,tone:o,top:0,height:0,step:0,flow:!1}}),document.querySelectorAll("details.fold[open]")))e.open=!1;m=-2,v=-1,g=null,T(),r.classList.add("live"),R(),h?.warm([...document.querySelectorAll("[data-shot][data-shape], [data-shot] [data-shape], [data-shot][data-pic], [data-shot] [data-pic]")].map(e=>e.dataset.pic?13:o[e.dataset.shape??""]??0)),window.location.hash.length>1&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()},jump(e){let t=p.filter(e=>!e.flow)[e];t&&window.scrollTo({top:t.top+1,behavior:"instant"})},destroy(){h?.stop(),window.removeEventListener("scroll",P),window.removeEventListener("resize",L),window.removeEventListener("keydown",_),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",q),window.removeEventListener("pointercancel",O),document.removeEventListener("pointerdown",I),document.removeEventListener("selectstart",k),document.removeEventListener("pointerover",j),document.removeEventListener("focusin",j),document.removeEventListener("change",j),document.removeEventListener("focusin",N),document.removeEventListener("mouseleave",D),document.removeEventListener("visibilitychange",F),document.removeEventListener("toggle",M,!0),E?.removeEventListener("toggle",H),f.removeEventListener("change",z)}}}(h.current,p.current,g);return m.current=e,()=>{e?.destroy(),m.current=null}},[]),(0,r.useEffect)(()=>{m.current?.scan();let e=requestAnimationFrame(()=>m.current?.scan());return()=>cancelAnimationFrame(e)},[e]);let w=v.at>=0?v.shots[v.at]:void 0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:p,className:"ground","data-g":"black","aria-hidden":"true"}),(0,t.jsx)("canvas",{ref:h,className:"stage","aria-hidden":"true"}),v.shots.length>0?(0,t.jsxs)("nav",{className:"hud","aria-label":"The shots on this page","data-tone":v.tone||void 0,children:[(0,t.jsxs)("p",{className:"hud-count","aria-hidden":"true",children:[v.at>=0?f(v.at+1):"--"," / ",f(v.shots.length)]}),(0,t.jsx)("ol",{className:"hud-ticks",children:v.shots.map((e,n)=>(0,t.jsx)("li",{style:{flexGrow:e.beats},children:(0,t.jsx)("button",{type:"button","aria-label":`${n+1}. ${e.title}`,"aria-current":n===v.at?"true":void 0,onClick:()=>m.current?.jump(n),children:(0,t.jsx)("i",{style:{width:n<v.at?"100%":n===v.at?`calc(var(--through, ${(v.beat+1)/e.beats}) * 100%)`:"0%"}})})},n))}),(0,t.jsx)("p",{className:"hud-title",children:0===v.at&&0===v.beat?"Scroll · Drag · Press":w?.title},w?.title)]}):null]})}],52899)}]);