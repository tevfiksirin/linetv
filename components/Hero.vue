<template>

<div class="containerIframe"> 
  <iframe class="object-cover bg-transparent responsive-iframe" src="https://player.socialsmart.tv/linetv/" allowfullscreen="allowfullscreen" ></iframe>
</div>


</template>
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