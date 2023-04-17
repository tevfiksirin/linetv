<template>
  <div class="max-w-[75%] h-full">

    <div class="container h-full">
      <div class="flex flex-col justify-between h-full post-list">
        <article v-for="post in posts" :key="post.id" class="post">
          <div class="post-content">
            <a :href="post.link" target="_blank" class="flex h-24 gap-2 bg-white">
              <img :src="imgData[post.id]" class="object-cover" />
              <h2 class="p-2 font-extrabold">{{ post.title.rendered }}</h2>
            </a>

          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MainPosts',
  mounted() {
    this.getPosts()
  },
  data() {
    return {
      posts: '',
      imgData: [],
      postsUrl: 'https://www.linehaber.com.tr/wp-json/wp/v2/posts?tags=174',
      postsData: {
        per_page: 4,
        page: 1
      },
      imgUrl: 'https://www.linehaber.com.tr/wp-json/wp/v2/media/',
      catUrl: 'https://www.linehaber.com.tr/wp-json/wp/v2/categories/'
    }
  },
  methods: {
    getPosts() {
      axios.get(this.postsUrl, { params: this.postsData })
        .then((response) => {
          this.posts = response.data

          for (let post in this.posts) {
            let featuredMedia = this.posts[post].featured_media
            let postId = this.posts[post].id
            //this.imgData[postId] = 'https://widgetsdataifx.blob.core.windows.net/widgetsdataifx/Content/themes/Davivienda/images/loading_spinner.gif'

            if (featuredMedia && featuredMedia !== '' && postId && postId !== '') {
              axios.get(this.imgUrl + featuredMedia)
                .then((responseImg) => {
                  this.imgData[postId] = responseImg.data.source_url
                  console.log(responseImg.data.source_url)
                })
                .catch((error) => {
                  console.log(error)
                })
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
