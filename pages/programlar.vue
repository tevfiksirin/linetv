<template>
    <div class="">
      <div class="post-list">
        <article v-for="post in posts" :key="post.id" class="post">
          <div class="post-content">
            
            <a :href="post.link">{{ post.title.rendered }}
            
                <img :src="imgData[post.id]" width="150" height="150"/>
            </a>

          </div>
        </article>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
    name: 'MainPosts',
    mounted () {
      this.getPosts()
    },
    data () {
      return {
        posts: '',
        imgData: [],
        postsUrl: 'https://www.linehaber.com.tr/wp-json/wp/v2/posts',
        postsData: {
          per_page: 3,
          page: 1
        },
        imgUrl: 'https://www.linehaber.com.tr/wp-json/wp/v2/media/'
      }
    },
    methods: {
      getPosts () {
        axios.get(this.postsUrl, {params: this.postsData})
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
