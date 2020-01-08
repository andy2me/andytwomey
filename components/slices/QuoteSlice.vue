<template>
  <div class='post-part single container'>
    <blockquote class="block-quotation">
      {{ $prismic.richTextAsPlain(slice.primary.quote) }}
    </blockquote>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'quote-slice'
}
</script>
