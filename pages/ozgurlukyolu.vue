<template>
  <div class="video-playlist">
    <ul>
      <li v-for="item in videoItems" :key="item.snippet.resourceId.videoId">
        <a :href="'https://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId" target="_blank">
          <img :src="item.snippet.thumbnails.medium.url">
          <span>{{ item.snippet.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoItems: [],
    };
  },
  methods: {
    loadPlaylist() {
      const playlistId = 'PLPlQXrMWR4Y7BfnO6dZJNIQHCeXx5itzs';
      const apiKey = 'AIzaSyBRsjyQ1DggqJZhmYRWZLOAAqZyYpVQEBY';
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.videoItems = data.items.reverse(); // en son eklenen videolar en üstte gösterilsin
        })
        .catch(error => console.log(error));
    },
  },
  mounted() {
    this.loadPlaylist();
  },
};
</script>

<style>
  .video-playlist ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
  .video-playlist li {
    width: 33%;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
  }
  .video-playlist li a {
    display: block;
    text-decoration: none;
  }
  .video-playlist li img {
    display: block;
    margin: 0 auto 10px;
    max-width: 100%;
    height: auto;
  }
  .video-playlist li span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    color: #000;
  }
</style>
