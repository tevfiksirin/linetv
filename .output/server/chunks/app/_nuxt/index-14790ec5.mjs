import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import axios from 'axios';
import { _ as __nuxt_component_1$1, a as _imports_0 } from './FooterNew-ecdc439f.mjs';
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
import './nuxt-link-6bdec6f5.mjs';

const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerIframe" }, _attrs))}><iframe class="object-cover bg-transparent responsive-iframe" src="https://player.socialsmart.tv/linetv/" allowfullscreen="true"></iframe></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "MainPosts",
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: "",
      imgData: [],
      postsUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174",
      postsData: {
        per_page: 4,
        page: 1
      },
      imgUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/media/",
      catUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/categories/"
    };
  },
  methods: {
    getPosts() {
      axios.get(this.postsUrl, { params: this.postsData }).then((response) => {
        this.posts = response.data;
        for (let post in this.posts) {
          let featuredMedia = this.posts[post].featured_media;
          let postId = this.posts[post].id;
          if (featuredMedia && featuredMedia !== "" && postId && postId !== "") {
            axios.get(this.imgUrl + featuredMedia).then((responseImg) => {
              this.imgData[postId] = responseImg.data.source_url;
              console.log(responseImg.data.source_url);
            }).catch((error) => {
              console.log(error);
            });
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[75%] h-full" }, _attrs))}><div class="container h-full"><div class="flex flex-col justify-between h-full post-list"><!--[-->`);
  ssrRenderList($data.posts, (post) => {
    _push(`<article class="post"><div class="post-content"><a${ssrRenderAttr("href", post.link)} target="_blank" class="flex h-24 gap-2 bg-white"><img${ssrRenderAttr("src", $data.imgData[post.id])} class="object-cover"><h2 class="p-2 font-extrabold">${ssrInterpolate(post.title.rendered)}</h2></a></div></article>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Programlar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerIframe" }, _attrs))}><iframe class="object-cover bg-transparent responsive-iframe" src="https://player.socialsmart.tv/linetv/" allowfullscreen="true"></iframe></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroMobil.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "MainPosts",
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: "",
      imgData: [],
      postsUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174",
      postsData: {
        per_page: 2,
        page: 1
      },
      imgUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/media/",
      catUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/categories/"
    };
  },
  methods: {
    getPosts() {
      axios.get(this.postsUrl, { params: this.postsData }).then((response) => {
        this.posts = response.data;
        for (let post in this.posts) {
          let featuredMedia = this.posts[post].featured_media;
          let postId = this.posts[post].id;
          if (featuredMedia && featuredMedia !== "" && postId && postId !== "") {
            axios.get(this.imgUrl + featuredMedia).then((responseImg) => {
              this.imgData[postId] = responseImg.data.source_url;
              console.log(responseImg.data.source_url);
            }).catch((error) => {
              console.log(error);
            });
          }
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8" }, _attrs))}><div class="container"><div class="flex flex-col gap-6 post-list"><!--[-->`);
  ssrRenderList($data.posts, (post) => {
    _push(`<article class="post"><div class="post-content"><a${ssrRenderAttr("href", post.link)} target="_blank" class="flex h-24 gap-2 bg-white"><img${ssrRenderAttr("src", $data.imgData[post.id])} class="object-cover"><h2 class="p-3 font-bold">${ssrInterpolate(post.title.rendered)}</h2></a></div></article>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgramlarMobil.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_1 = "data:image/png;base64,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";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0$1;
  const _component_Programlar = __nuxt_component_1;
  const _component_HeroMobil = __nuxt_component_2;
  const _component_ProgramlarMobil = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="hidden lg:block"><div class="flex flex-col h-screen gap-1 pl-20 pr-20 bg-secondary-500"><div class="flex justify-between gap-4 pt-12"><div class="flex flex-col justify-between w-7/12 h-52"><div><img${ssrRenderAttr("src", _imports_0)} alt=""></div><h1 class="text-xl tracking-wide text-primary-500">CANLI \u0130ZLE</h1></div><div class="flex items-end justify-start w-4/12"><div><img class="relative -top-6"${ssrRenderAttr("src", _imports_1)} alt=""><h1 class="text-xl tracking-wide text-primary-500">HABER S\u0130TEM\u0130Z</h1></div></div></div><div class="flex justify-between gap-4"><div class="w-7/12">`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`</div><div class="w-4/12 h-full">`);
  _push(ssrRenderComponent(_component_Programlar, null, null, _parent));
  _push(`</div></div></div></div><div class="block h-screen p-2 lg:hidden bg-secondary-500"><div class="mb-8 logo"><div class="w-20 mt-4"><img class="object-cover"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="w-full">`);
  _push(ssrRenderComponent(_component_HeroMobil, null, null, _parent));
  _push(`</div><div class="mt-8"><img class="w-40"${ssrRenderAttr("src", _imports_1)} alt=""><h1 class="mt-4 text-base font-bold tracking-wide text-primary-500">HABER S\u0130TEM\u0130Z</h1></div><div>`);
  _push(ssrRenderComponent(_component_ProgramlarMobil, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Home = __nuxt_component_0;
  const _component_FooterNew = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Home, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterNew, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-14790ec5.mjs.map
