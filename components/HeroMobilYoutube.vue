<template>
  <div class="containerIframe">
    <iframe
      id="youtube-mobil"
      class="object-cover bg-transparent responsive-iframe"
      allowfullscreen="true"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';

onMounted(() => {
  if (process.client) {
    nextTick(() => {
      const videoId = 'EKSYnFvR2lM'; // YouTube video ID'si
      const youtubeIframe = document.getElementById('youtube-mobil') as HTMLIFrameElement;

      if (youtubeIframe) {
        youtubeIframe.setAttribute(
          'src',
          `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&showinfo=0&autoplay=1`
        );
      }
    });
  }
});
</script>

<style scoped>
.containerIframe {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 oranı */
  @apply border-primary-500 border-[1px];
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.03, 1.03);
  border: none;
}
</style>
