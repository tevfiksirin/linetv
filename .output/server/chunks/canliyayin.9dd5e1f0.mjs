import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center w-full max-h-screen p-0 bg-slate-500" }, _attrs))}><div class="relative w-full" style="${ssrRenderStyle({ "padding-bottom": "56.25%", "overflow": "hidden" })}"><iframe style="${ssrRenderStyle({ "position": "absolute" })}" src="https://player.socialsmart.tv/linetv/" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen>
            </iframe></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/canliyayin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const canliyayin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { canliyayin as default };
//# sourceMappingURL=canliyayin.9dd5e1f0.mjs.map
