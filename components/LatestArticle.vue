<template>
  <section :class="isDark ? 'bg-gray-900 py-12' : 'py-12'">
    <div class="section-container">
      <img
        class="mx-auto mt-12 mb-6"
        src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
        alt="squiggle"
      />

      <h3
        class="text-3xl font-bold text-center"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        Latest article
      </h3>
      <div class="flex flex-col items-center mt-12 mb-5">
        <div
          class="flex flex-col items-start justify-center pt-48 bg-no-repeat bg-contain sm:max-w-sm md:pt-56"
          :style="
            'background-image: url(' +
              postsContent.results[0].data.header_image.url +
              ')'
          "
        >
          <div class="p-4 bg-white md:w-full">
            <nuxt-link :to="'/post/' + postsContent.results[0].uid">
              <h4
                class="text-xl font-bold text-gray-800 xs:text-2xl md:text-xl"
              >
                {{ postsContent.results[0].data.title[0].text }}
              </h4>
            </nuxt-link>

            <p
              class="my-4 text-base font-medium leading-relaxed tracking-wide text-gray-700"
            >
              {{ postsContent.results[0].data.foreword[0].text }}
            </p>

            <div class="relative">
              <nuxt-link
                class="cta"
                :to="'/post/' + postsContent.results[0].uid"
              >
                Read more
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["postsContent", "isDark"]
};
</script>

<style lang="postcss" scoped>
.cta {
  @apply w-full absolute left-0 text-center;
}
</style>
