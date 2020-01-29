<template>
  <div>
    <Navigation :navigationContent="navigationContent" />
    <section class="py-12 section-container md:py-24">
      <h1 class="text-5xl font-bold text-center">Get in touch with Andy</h1>

      <hr class="max-w-lg mx-auto my-12 border-t-4 border-gray-800" />

      <p
        class="max-w-md mx-auto text-xl font-semibold text-center text-gray-900"
      >
        Complete the form below to organise a time to chat. I'll be in touch
        soon!
      </p>

      <img
        class="mx-auto my-6"
        src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
        alt="squiggle"
      />

      <form
        class="max-w-md mx-auto"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input
          required
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="First name"
          type="text"
          name="firstname"
        />
        <input
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Last name"
          type="text"
          name="lastname"
        />
        <input
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Mobile phone number"
          type="text"
          name="mobilephone"
        />
        <input
          required
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Company name"
          type="text"
          name="company"
        />
        <input
          required
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Email"
          type="email"
          name="email"
        />
        <button class="mx-auto mt-6 cta" type="submit">Let's chat</button>
      </form>
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

export default {
  components: {
    Navigation,
    Footer
  },
  head: {
    title: "Hire Andy Twomey"
  },
  async asyncData({ context, error, req }) {
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
};
</script>

<style lang="postcss"></style>
