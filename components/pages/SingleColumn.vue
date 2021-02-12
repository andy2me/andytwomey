<template>
  <div>
    <Navigation :navigationContent="navigationContent" />
    <section class="py-12 section-container md:py-24">
      <h1 class="text-5xl font-bold text-center">{{ header }}</h1>

      <hr class="max-w-lg mx-auto my-12 border-t-4 border-gray-800" />

      <p
          class="max-w-md mx-auto text-xl font-semibold text-center text-gray-900"
      >
        {{ description }}
      </p>

      <img
          class="mx-auto my-6"
          src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
          alt="squiggle"
      />

      <slot></slot>
    </section>
    <Footer :footerContent="footerContent" />
  </div>
</template>

<style lang="postcss" scoped>
.cta {
  @apply block px-6 py-3 text-lg bg-gray-900;
}
</style>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export async function loadAsyncProps ({ context, error, req }) {
  try {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
    const navigation = await api.getSingle("navigation");
    const footer = await api.getSingle("footer");
    let navigationContent = navigation.data;
    let footerContent = footer.data;
    return {
      navigationContent,
      footerContent
    };
  } catch (e) {
    error(e);
  }
}

export default {
  components: {
    Navigation,
    Footer
  },
  props: [
    'header',
    'description',
    'navigationContent',
    'footerContent',
  ]
};
</script>

<style lang="postcss"></style>
