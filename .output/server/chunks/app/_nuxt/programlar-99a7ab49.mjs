import axios from 'axios';
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
  name: "MainPosts",
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: "",
      imgData: [],
      postsUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/posts",
      postsData: {
        per_page: 3,
        page: 1
      },
      imgUrl: "https://www.linehaber.com.tr/wp-json/wp/v2/media/"
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="post-list"><!--[-->`);
  ssrRenderList($data.posts, (post) => {
    _push(`<article class="post"><div class="post-content"><a${ssrRenderAttr("href", post.link)}>${ssrInterpolate(post.title.rendered)} <img${ssrRenderAttr("src", $data.imgData[post.id])} width="150" height="150"></a></div></article>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/programlar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const programlar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { programlar as default };
//# sourceMappingURL=programlar-99a7ab49.mjs.map
