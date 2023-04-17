import { _ as __nuxt_component_0 } from './Header-1a9339f7.mjs';
import { _ as __nuxt_component_1 } from './FooterNew-ecdc439f.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-6bdec6f5.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
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
  const _component_Header = __nuxt_component_0;
  const _component_FooterNew = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="container px-4 mx-auto"><article class="max-w-none format lg:format-lg"><h2 class="has-text-color wp-block-heading" style="${ssrRenderStyle({ "color": "#fbae15" })}"><span style="${ssrRenderStyle({ "color": "#000000" })}"><br>Kurulu\u015F Unvan\u0131</span></h2><p>B.E.R.K RADYO TV YAYINCILIK ve REKLAM T\u0130CARET SANAY\u0130 ANON\u0130M \u015E\u0130RKET\u0130</p><h3 class="wp-block-heading"><strong><br>\u0130leti\u015Fim</strong></h3><p> Telefon :\xA0(+90 224) 211 70 90<br>Fax :\xA0(+90 0224) 211 51 53<br>KEP Adresi :\xA0berkradyo@hs03.kep.tr<br>E-posta Adresi : <span style="${ssrRenderStyle({ "color": "#ff9900" })}"><a style="${ssrRenderStyle({ "color": "#ff9900" })}" href="mailto:info@linetv.com.tr">info@linetv.com.tr</a><br></span>Adres: Panay\u0131r Mahallesi \u0130stanbul Caddesi No: 365 16250 Osmangazi / BURSA </p><h4><strong><br>Yay\u0131n Lisans T\xFCr\xFC</strong></h4><p>Genel Yay\u0131n<br>T3<br>K-TV/SD Tek \u0130l \u2013 Bursa<br>U-TV/SD<br>R3</p><h4 class="wp-block-heading"><strong><br>\u0130zleyici Temsilcisi</strong></h4><p><strong>Dilek \u0130lhan</strong><br>Line TV Genel Yay\u0131n Y\xF6netmeni<br><span style="${ssrRenderStyle({ "color": "#ff9900" })}"><a style="${ssrRenderStyle({ "color": "#ff9900" })}" href="mailto:izleyicitemsilcisi@linetv.com.tr">izleyicitemsilcisi@linetv.com.tr</a></span></p><p> \u0130leti\u015Fim Bilgileri:<br>Panay\u0131r Mahallesi \u0130stanbul Caddesi No: 365 16250 Osmangazi / BURSA<br>Telefon: 0224 211 70 90<br>Fax : 0224 211 51 53 </p></article></div>`);
  _push(ssrRenderComponent(_component_FooterNew, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kunye.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kunye = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { kunye as default };
//# sourceMappingURL=kunye-b1640f92.mjs.map
