<template>
  <div>
    <Navigation :navigationContent="navigationContent" />
    <div class="section-container mt-24">
      <div class="max-w-2xl mx-auto flex flex-col-reverse items-start md:flex-row">
        <div class="w-full">
          <h1 class="text-xl font-bold leading-tight text-gray-800 mt-6 sm:text-2xl md:mt-0 md:text-3xl lg:text-4xl">{{ $prismic.richTextAsPlain(document.title) }}</h1>
          
          <p class="text-sm text-gray-700 leading-relaxed tracking-wide mt-6">
            {{ post.data.foreword[0].text }}            
          </p>

          <a class="text-primary tracking-wider uppercase text-sm font-bold mt-4" href="#readon">
            Read on
          </a>

          <div class="mt-4">
            <p class="font-extrabold text-sm tracking-wider text-gray-600 uppercase">
              {{ formattedDate }}
            </p>
          </div>
        </div>
        <img class="w-full md:w-1/2 md:ml-2" :src="image.url" :alt="image.alt" />
      </div>

      <div class="mx-auto max-w-2xl mt-12 md:mt-24">
        <div class="post-body my-6" id="readon">
          <slices-block :slices="slices"/>
        </div>
      </div>
    </div>
    <Footer :footerContent="footerContent" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import SlicesBlock from '~/components/SlicesBlock'

export default {
  name: 'post',
  components: {
    Navigation,
    Footer,
    SlicesBlock
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  },
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})  
      const post = await api.getByUID("post", params.uid)
      const navigation = await api.getSingle('navigation')
      const footer = await api.getSingle('footer')

      let navigationContent = navigation.data
      let footerContent = footer.data
      let image = post.data.header_image
      return {
        post,
        image,
        navigationContent,
        footerContent,
        document: post.data,
        documentId: post.id,
        headerImg: post.header_img,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(post.data.date)),
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="postcss">
  .post-body { @apply tracking-wide leading-relaxed }
  .post-body section section .textslice { @apply mb-5 }
  .post-body section section .textslice h3 { @apply mb-5 font-medium text-gray-900 tracking-normal leading-snug text-2xl }
  .post-body section section .textslice p { @apply mb-5 }
  .post-body section section .textslice ul { @apply border-primary border-l-4 pl-6 font-semibold text-gray-800 text-lg tracking-wider }
  .post-body section section .textslice ul li { @apply py-1 }
  .post-body section section:first-of-type .textslice { @apply font-medium text-xl leading-normal mb-5 }
  .post-body section section:first-of-type .textslice:first-letter { @apply mr-2 text-primary text-6xl font-semibold block relative leading-none float-left }
</style>
