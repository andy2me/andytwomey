<template>
  <section :class="isDark ? 'bg-gray-900 py-12' : 'py-12'">
    <div class="section-container">
      <img
        class="mx-auto mb-6 mt-12 xl:w-20 xxl:w-32 xxl:mt-32"
        src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
        alt="squiggle"
      />

      <h3
        class="text-3xl font-bold text-center"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        Latest article
      </h3>
      <div class="flex flex-col items-center mb-5 mt-12">
        <div
          class="flex flex-col justify-center items-start pt-48 bg-contain bg-no-repeat sm:max-w-sm md:pt-56"
          :style="
            'background-image: url(' +
              postsContent.results[0].data.header_image.url +
              ')'
          "
        >
          <div class="bg-white p-4 md:w-full">
            <nuxt-link :to="'/post/' + postsContent.results[0].uid">
              <h4
                class="text-xl text-gray-800 font-bold xs:text-2xl md:text-xl"
              >
                {{ postsContent.results[0].data.title[0].text }}
              </h4>
            </nuxt-link>

            <p
              class="text-base text-gray-700 leading-relaxed tracking-wide font-medium my-4"
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
