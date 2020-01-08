<template>
  <div>
    <template v-if="size === 'image-full-width'">
      <div class='blog-header single' :style="{ 'background-image': 'url(' + img.url + ')'}">
        <template v-if="$prismic.richTextAsPlain(caption) != ''">
          <div class="wrapper">
            <h1>{{ $prismic.richTextAsPlain(caption) }}</h1>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class='post-part single container'>
        <p class="block-img" :class="size">
          <prismic-image :field="img"/>
        </p>
        <template v-if="$prismic.richTextAsPlain(caption) != ''">
          <p>
            <span class="image-label">{{ $prismic.richTextAsPlain(caption) }}</span>
          </p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-caption-slice',
  data: function() {
    return {
      img: '',
      caption: '',
      size: '',
    }
  },
  created () {
    this.img = this.slice.primary.image
    this.caption = this.slice.primary.caption
    this.size = this.slice.slice_label
  }
}
</script>
