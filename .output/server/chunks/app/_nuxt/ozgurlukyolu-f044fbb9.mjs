import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
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

const _sfc_main = {
  data() {
    return {
      videoItems: []
    };
  },
  methods: {
    loadPlaylist() {
      const playlistId = "PLPlQXrMWR4Y7BfnO6dZJNIQHCeXx5itzs";
      const apiKey = "AIzaSyBRsjyQ1DggqJZhmYRWZLOAAqZyYpVQEBY";
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
      fetch(url).then((response) => response.json()).then((data) => {
        this.videoItems = data.items.reverse();
      }).catch((error) => console.log(error));
    }
  },
  mounted() {
    this.loadPlaylist();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-playlist" }, _attrs))}><ul><!--[-->`);
  ssrRenderList($data.videoItems, (item) => {
    _push(`<li><a${ssrRenderAttr("href", "https://www.youtube.com/watch?v=" + item.snippet.resourceId.videoId)} target="_blank"><img${ssrRenderAttr("src", item.snippet.thumbnails.medium.url)}><span>${ssrInterpolate(item.snippet.title)}</span></a></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ozgurlukyolu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ozgurlukyolu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ozgurlukyolu as default };
//# sourceMappingURL=ozgurlukyolu-f044fbb9.mjs.map
