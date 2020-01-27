<template>
  <div class="relative">
    <div class="relative section-container sm:pt-8 lg:mt-12 lg:pt-12 ">
      <img v-if="imgSrc" class="z-0 hero-image" :src="imgSrc" :alt="imgAlt" />
      <div class="relative w-full py-10 lg:pb-32">
        <span
          class="inline-block px-3 py-2 text-sm font-bold tracking-wider text-white courier-new bg-primary"
        >
          {{ beforeText }}
        </span>

        <h1
          v-html="title"
          class="mt-6 text-3xl font-bold leading-none tracking-wide text-gray-800 xs:max-w-xs sm:max-w-md md:mt-12 md:text-5xl lg:max-w-3xl lg:text-6xl"
        ></h1>

        <p
          v-if="content"
          v-html="content"
          class="inline-block mt-10 text-base font-medium text-gray-700 rounded-lg md:text-lg"
        ></p>

        <img
          v-if="squiggle"
          class="mt-12"
          src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
          alt="squiggle"
        />
      </div>
    </div>
    <a
      v-if="scrollDown"
      class="absolute bottom-0 z-10 block w-10 h-10 hero-scroll bg-primary"
      href="#"
    >
      <span
        class="absolute z-10 block w-3 h-3 border-b-4 border-r-4 border-white hero-scroll-arrow"
      ></span>
    </a>
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

<style lang="postcss" scoped>
.hero-image {
  @screen xs {
    & {
      @apply block;
      max-width: 290px;
    }
  }
  @screen sm {
    & {
    }
  }
  @screen md {
    & {
      @apply max-w-full absolute;
      top: 0;
      right: 0;
    }
  }
  @screen lg {
    & {
      @apply max-w-full;
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
