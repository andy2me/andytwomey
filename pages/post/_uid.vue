<template>
  <div>
    <Navigation :navigationContent="navigationContent" />
    <div
      class="flex flex-col-reverse items-start max-w-4xl pt-24 mx-auto md:flex-row md:justify-between"
    >
      <div class="w-full md:max-w-sm">
        <h1
          class="mt-6 text-xl font-bold leading-tight text-gray-800 sm:text-2xl md:mt-0 md:text-3xl lg:text-4xl"
        >
          {{ $prismic.richTextAsPlain(document.title) }}
        </h1>

        <p class="mt-6 text-sm leading-relaxed tracking-wide text-gray-700">
          {{ post.data.foreword[0].text }}
        </p>

        <a
          class="mt-4 text-sm font-bold tracking-wider uppercase text-primary"
          href="#readon"
        >
          Read on
        </a>

        <div class="flex items-center mt-4">
          <img
            class="md:w-16"
            src="https://cdn2.hubspot.net/hubfs/416563/Andy-Author-1.png"
            alt="andy twomey"
          />
          <div>
            <span class="font-bold text-gray-800">Andy Twomey</span>
            <p
              class="text-sm font-extrabold tracking-wider text-gray-600 uppercase"
            >
              {{ formattedDate }}
            </p>
          </div>
        </div>
      </div>
      <img class="w-full md:w-1/2 md:ml-2" :src="image.url" :alt="image.alt" />
    </div>
    <div class="mt-24 section-container">
      <div class="max-w-2xl mx-auto mt-12 md:mt-24">
        <div class="my-6 post-body" id="readon">
          <slices-block :slices="slices" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-start max-w-2xl pt-12 mx-auto mt-24 border-t-2 border-gray-500 border-solid md:flex-row"
    >
      <img
        class="md:w-24"
        src="https://cdn2.hubspot.net/hubfs/416563/Andy-Author-1.png"
        alt="andy twomey"
      />
      <div class="pb-24 md:ml-12">
        <span class="block text-xl font-bold text-gray-800">Andy</span>
        <span class="block leading-relaxed tracking-wide">
          Andy enjoys helping businesses create meaningful marketing. From
          strategy to technology, it's all in the detail. When not rambling
          about marketing funnels, you'll find Andy running proudly after his
          two boys.
        </span>
      </div>
    </div>

    <Subscribe />
    <Footer :footerContent="footerContent" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import SlicesBlock from "~/components/SlicesBlock";
import Subscribe from "~/components/Subscribe";

export default {
  name: "post",
  components: {
    Navigation,
    Footer,
    SlicesBlock,
    Subscribe
  },
  head() {
    return {
      title: "Andy Twomey Blog"
    };
  },
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      const post = await api.getByUID("post", params.uid);
      const navigation = await api.getSingle("navigation");
      const footer = await api.getSingle("footer");

      let navigationContent = navigation.data;
      let footerContent = footer.data;
      let image = post.data.header_image;
      return {
        post,
        image,
        navigationContent,
        footerContent,
        document: post.data,
        documentId: post.id,
        headerImg: post.header_img,
        slices: post.data.body,
        formattedDate: Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(post.data.date))
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="postcss">
.post-body {
  @apply tracking-wide leading-relaxed;
}
.post-body section section .textslice {
  @apply mb-5;
}
.post-body section section .textslice h3 {
  @apply mb-5 font-medium text-gray-900 tracking-normal leading-snug text-2xl;
}
.post-body section section .textslice p {
  @apply mb-5;
}
.post-body section section .textslice ul {
  @apply border-primary border-l-4 pl-6 font-semibold text-gray-800 text-lg tracking-wider;
}
.post-body section section .textslice ul li {
  @apply py-1;
}
.post-body section section:first-of-type .textslice {
  @apply font-medium text-xl leading-normal mb-5;
}
.post-body section section:first-of-type .textslice:first-letter {
  @apply mr-2 text-primary text-6xl font-semibold block relative leading-none float-left;
}
</style>
