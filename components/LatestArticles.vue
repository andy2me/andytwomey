<template>
  <section :class="isDark ? 'bg-gray-900 py-12' : 'py-12'">
    <div class="section-container">
      <div class="">
        <img
          class="mt-12 mb-6"
          src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
          alt="squiggle"
        />

        <h3
          class="text-3xl font-bold"
          :class="isDark ? 'text-white' : 'text-gray-800'"
        >
          Latest articles
        </h3>

        <div class="flex flex-col items-center mt-12 mb-5 md:items-start">
          <div
            v-for="article in postsContent.results"
            :key="article.id"
            class="flex flex-col items-stretch justify-center w-full mb-12 bg-no-repeat bg-contain md:flex-row"
          >
            <img
              class="object-cover w-full md:w-1/2"
              :src="article.data.header_image.url"
              :alt="article.data.header_image.alt"
            />
            <div class="flex flex-col w-full p-8 md:w-1/2">
              <nuxt-link :to="'/post/' + article.uid">
                <h4
                  class="text-xl font-bold text-gray-800 xs:text-2xl md:text-xl"
                >
                  {{ article.data.title[0].text }}
                </h4>
              </nuxt-link>

              <p
                class="my-4 text-base font-medium leading-relaxed tracking-wide text-gray-700"
              >
                {{ article.data.foreword[0].text }}
              </p>

              <div class="relative mt-auto">
                <nuxt-link class="mt-5 cta" :to="'/post/' + article.uid">
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
