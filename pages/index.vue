<template>
  <div>
    <div id="modalHoverArea" @mouseenter="showModal" />
    <Navigation :navigationContent="navigationContent" />
    <Hero
      before-text="Hey, I'm Andy."
      title='I help Software businesses build <span class="highlight">smarter marketing engines</span>.'
      :content="false"
      :squiggle="true"
      img-src="https://cdn2.hubspot.net/hubfs/416563/Andy-the-hero.jpg"
      img-alt="Andy the hero"
      :scroll-down="true"
    />

    <Modal v-show="isModalVisible" @close="closeModal" />
    <div class="py-12 bg-white"></div>
    <ContentTwoColumn :content="homepageContent" />
    <LatestArticle :postsContent="postsContent" :isDark="true" />
    <Subscribe />
    <Footer :footerContent="footerContent" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Modal from "~/components/Modal";
import ContentTwoColumn from "~/components/ContentTwoColumn";
import LatestArticle from "~/components/LatestArticle";
import Subscribe from "~/components/Subscribe";

export default {
  components: {
    Navigation,
    Footer,
    Hero,
    Modal,
    ContentTwoColumn,
    LatestArticle,
    Subscribe
  },
  head: {
    title: "Andy Twomey – SaaS Marketing Nerd!"
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },

  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      const navigation = await api.getSingle("navigation");
      const footer = await api.getSingle("footer");
      const homepage = await api.getSingle("home_page");
      const posts = await api.query(
        Prismic.Predicates.at("document.type", "post")
      );

      let navigationContent = navigation.data;
      let footerContent = footer.data;
      let homepageContent = homepage.data;
      let postsContent = posts;

      // console.log(homepagContent);

      return {
        navigationContent,
        footerContent,
        homepageContent,
        postsContent
      };
    } catch (e) {
      error(e);
    }
  }
};
</script>

<style lang="postcss" scoped>
#modalHoverArea {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}
</style>
