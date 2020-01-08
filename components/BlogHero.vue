<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="section-container z-10 relative flex flex-col sm:pt-8 lg:mt-12 lg:pt-12"
      >
        <div class="w-full py-10 text-center lg:pb-32 xl:mx-auto xl:max-w-4xl">
          <span
            v-if="beforeText"
            class="inline-block px-3 py-2 bg-primary text-sm text-white font-bold tracking-wider xl:text-2xl"
          >
            {{ beforeText }}
          </span>

          <h1
            v-html="title"
            class="mt-6 text-gray-800 text-3xl leading-none tracking-wide font-bold "
          ></h1>

          <p
            v-if="content"
            v-html="content"
            class="font-medium text-gray-700 text-base mt-10 inline-block rounded-lg"
          ></p>

          <img
            v-if="squiggle"
            class="mt-12 xl:w-20 xxl:w-32 xxl:mt-32"
            src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
            alt="squiggle"
          />
        </div>

        <img v-if="imgSrc" class="hero-image" :src="imgSrc" :alt="imgAlt" />
      </div>
      <a
        v-if="scrollDown"
        class="z-10 hero-scroll absolute bottom-0 block w-10 h-10 bg-primary"
        href="#"
      >
        <span
          class="hero-scroll-arrow z-10 absolute block w-3 h-3 border-white border-r-4 border-b-4"
        ></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "beforeText",
    "title",
    "content",
    "squiggle",
    "imgSrc",
    "imgAlt",
    "scrollDown"
  ],
  data() {
    return {
      loaded: false
    };
  }
};
</script>

<style lang="postcss">
.hero-image {
  @apply absolute hidden;
  @screen xs {
    & {
      @apply block;
      z-index: -1;
      top: 1rem;
      right: -5rem;
      max-width: 290px;
    }
  }
  @screen sm {
    & {
      top: 0rem;
      right: -2rem;
    }
  }
  @screen md {
    & {
      @apply max-w-full;
      right: -5rem;
    }
  }
  @screen lg {
    & {
      @apply max-w-full;
    }
  }
  @screen xl {
    & {
      @apply pb-0 mb-0;
      right: -8rem;
      top: -4rem;
    }
  }
  @screen xxl {
    & {
      top: auto;
      bottom: 10rem;
      right: -9rem;
    }
  }
}

.hero-scroll {
  left: 50%;
  transform: translate(-50%, 50%);
}

.hero-scroll-arrow {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg) translate(-2px, -2px);
}
</style>
