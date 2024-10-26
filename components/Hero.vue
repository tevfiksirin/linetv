<template>

<div class="containerIframe">
    <iframe
      id="youtube"
      class="object-cover bg-transparent responsive-iframe"
      src="https://player.socialsmart.tv/linetv/"
      allowfullscreen="true"
    ></iframe>
  </div>


</template>
<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const videoId = 'EKSYnFvR2lM'; // YouTube video ID'si
  const youtubeIframe = document.getElementById('youtube') as HTMLIFrameElement;

  if (youtubeIframe) {
    youtubeIframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
  }
});
</script>
<style>
.containerIframe {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
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

}
</style>