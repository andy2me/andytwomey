<template>
  <section :class="isDark ? 'bg-gray-900 py-12' : 'py-12'">
    <div class="section-container">
      <div class=" xl:mx-auto xl:max-w-4xl">
        <img
          class="mb-6 mt-12 xl:w-20 xxl:w-32 xxl:mt-32"
          src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
          alt="squiggle"
        />

        <h3
          class="text-3xl font-bold"
          :class="isDark ? 'text-white' : 'text-gray-800'"
        >
          Latest articles
        </h3>

        <div class="flex flex-col items-center mb-5 mt-12 md:items-start">
          <div
            v-for="article in postsContent.results"
            :key="article.id"
            class="flex flex-col justify-center items-stretch bg-contain bg-no-repeat w-full mb-12 md:flex-row"
          >
            <img
              class="w-full object-cover md:w-1/2"
              :src="article.data.header_image.url"
              :alt="article.data.header_image.alt"
            />
            <div class="bg-white p-4 w-full md:w-1/2">
              <nuxt-link :to="'/post/' + article.uid">
                <h4
                  class="text-xl text-gray-800 font-bold xs:text-2xl md:text-xl"
                >
                  {{ article.data.title[0].text }}
                </h4>
              </nuxt-link>

              <p
                class="text-base text-gray-700 leading-relaxed tracking-wide font-medium my-4"
              >
                {{ article.data.foreword[0].text }}
              </p>

              <div class="relative">
                <nuxt-link class="cta" :to="'/post/' + article.uid">
                  Read more
                </nuxt-link>
              </div>
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
