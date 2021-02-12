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
    title: "You're subscribed to Andy!"
  },
  data() {
    return {
      header: "You're now subscribed to my emails, thanks!",
      description: "Expect to receive at most 1x email per week, about scaling growth."
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
