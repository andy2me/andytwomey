<template>
  <div>
    <Navigation :navigationContent="navigationContent" darkMode="true" />
    <BlogHero
      before-text="Blog"
      :title="$prismic.richTextAsPlain(blogContent.headline)"
      :content="$prismic.richTextAsPlain(blogContent.description)"
    />

    <LatestArticles :postsContent="postsContent" />

    <Footer :footerContent="footerContent" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BlogHero from "~/components/BlogHero";
import LatestArticles from "~/components/LatestArticles";

export default {
  components: {
    Navigation,
    Footer,
    BlogHero,
    LatestArticles
  },
  head: {
    title: "Blog"
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      const navigation = await api.getSingle("navigation");
      const footer = await api.getSingle("footer");
      const document = await api.getSingle("blog_home");
      const posts = await api.query(
        Prismic.Predicates.at("document.type", "post")
      );

      let navigationContent = navigation.data;
      let footerContent = footer.data;
      let blogContent = document.data;
      let postsContent = posts;

      return {
        navigationContent,
        footerContent,
        blogContent,
        postsContent
      };
    } catch (e) {
      error(e);
    }
  }
};
</script>

<style lang="postcss"></style>
