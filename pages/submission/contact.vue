<template>
  <SingleColumnPage
      :header="header"
      :description="description"
      :navigationContent="navigationContent"
      :footerContent="footerContent"
  >
  </SingleColumnPage>
</template>

<script>
import SingleColumnPage, { loadAsyncProps } from "~/components/pages/SingleColumn";

export default {
  components: {
    SingleColumnPage
  },
  head: {
    title: "You've sent Andy a message!"
  },
  data() {
    return {
      header: "Got in touch with Andy",
      description: "Alrighty - you'll hear back from me soon!"
    }
  },
  async asyncData({ context, error, req }) {
    try {
      const singleColumnPageProps = await loadAsyncProps({
        context,
        error,
        req
      });
      return { ...singleColumnPageProps };
    } catch (e) {
      error(e);
    }
  }
};
</script>

<style lang="postcss"></style>
