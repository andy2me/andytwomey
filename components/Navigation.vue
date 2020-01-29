<template>
  <div :class="darkMode ? 'navigation-dark' : ''">
    <nav class="section-container navigation">
      <div class="text-center xs:mr-auto">
        <nuxt-link to="/" class="stagger-1">
          <img
            class="logo"
            :src="
              darkMode
                ? navigationContent.logo_dark.url
                : navigationContent.logo.url
            "
            :alt="
              darkMode
                ? navigationContent.logo_dark.alt
                : navigationContent.logo.alt
            "
          />
        </nuxt-link>
      </div>

      <ul class="flex items-center justify-around w-full xs:w-auto">
        <li
          v-for="(link, index) in navigationContent.links"
          :key="link.id"
          :class="'xs:ml-5 sm:ml-10 stagger-' + (index + 2)"
        >
          <nuxt-link
            v-if="link.type === 'Link'"
            :to="link.href[0].text"
            class="link"
            >{{ link.text[0].text }}
          </nuxt-link>
          <nuxt-link
            v-if="link.type === 'Button'"
            :to="link.href[0].text"
            class="cta"
          >
            {{ link.text[0].text }}
          </nuxt-link>
        </li>
        <!-- <li v-for="menuLink in menuLinks" :key="menuLink.id">
        <prismic-link :field="menuLink.link">{{ $prismic.richTextAsPlain(menuLink.label) }}</prismic-link>
      </li> -->
        <!-- {{ navigationContent }} -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: ["navigationContent", "darkMode"]

  // data () {
  //   return {
  //     logo: { href: '/', text: 'Andy Twomey' },
  //     links: [
  //       { href: '/', text: 'Home', type: 'link' },
  //       { href: '/blog', text: 'Blog', type: 'link' },
  //       { href: '/contact', text: 'Hire me', type: 'cta' }
  //     ]
  //   }
  // },
};
</script>

<style lang="postcss" scoped>
.navigation {
  @apply flex flex-col justify-between items-center pt-5 mx-auto;
  @screen xs {
    & {
      @apply flex-row;
    }
  }
  @screen md {
    & {
      @apply pt-10;
    }
  }

  nav {
    @apply mt-2;
    @screen xs {
      & {
        @apply mt-0;
      }
    }
  }

  &-dark {
    @apply bg-gray-900;
    .link {
      @apply text-white;
    }
  }
}

.logo {
  @apply w-full mb-4;
  max-width: 150px;
  @screen xs {
    & {
      @apply mb-0;
    }
  }
}

.link {
  @apply inline-block py-2 border-b-2 border-transparent border-solid text-gray-700 font-semibold;
  transition: 200ms easeInOutQuint all;
  &:hover {
    @apply border-primary;
  }
}

@for $x from 1 to 4 {
  .stagger-$(x) {
    animation-name: stagger-$(x);
    animation-duration: 600ms;
    animation-iteration-count: 1;
    animation-timing-function: easeInSine;
  }
  @keyframes stagger-$(x) {
    0% {
      opacity: 0;
      /* prettier-ignore */
      transform: translateY(calc(10 * $(x)px));
    }
    50% {
      opacity: 0;

      /* prettier-ignore */
      transform: translateY(calc(10 * $(x)px));
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
