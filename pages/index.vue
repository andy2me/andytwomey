<template>
  <div>
    <Navigation :navigationContent="navigationContent" />
    <Hero
      :before-text="homepageContent.before_text[0].text"
      :title="homepageContent.hero_title[0].text"
      :content="false"
      :squiggle="true"
      :img-src="homepageContent.hero_image.url"
      :img-alt="homepageContent.hero_image.alt"
      :scroll-down="true"
    />
    <div class="py-12 bg-white" />
    <ContentTwoColumn />
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
import ContentTwoColumn from "~/components/ContentTwoColumn";
import LatestArticle from "~/components/LatestArticle";
import Subscribe from "~/components/Subscribe";

export default {
  components: {
    Navigation,
    Footer,
    Hero,
    ContentTwoColumn,
    LatestArticle,
    Subscribe
  },
  head: {
    title: "Andy Twomey – SaaS Marketing Nerd!"
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
      console.log(homepageContent);

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
