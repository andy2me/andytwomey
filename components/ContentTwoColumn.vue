<template>
  <div>
    <div class="py-6 bg-white">
      <div class="relative section-container border-up">
        <div class="flex flex-col justify-start align-start md:flex-row">
          <div class="md:max-w-2/3">
            <h2 class="text-4xl font-bold tracking-wide text-gray-900">
              Who is <span class="highlight">Andy</span>?
            </h2>
            <p
              class="mt-4 text-xl font-medium leading-normal tracking-wide text-gray-700 md:text-2xl"
            >
              You'll find me helping Founders, Marketers and Sales folk of
              Software Businesses via my roles as Managing Director of
              <a class="inline-link" href="#">You & Co</a>,
              <a class="inline-link" href="#">Founder of Bots by Co</a>
              otherwise building my own SaaS product,
              <a class="inline-link" href="#">Focus App</a>.
            </p>
            <a class="mt-10 cta cta-lg lg:mt-16" href="#">
              What excites me
            </a>
          </div>

          <div
            class="flex flex-col items-center justify-center pt-10 md:max-w-1/3 md:w-full"
          >
            <div v-for="logo in logos" :key="logo.id" class="my-4 md:my-10">
              <img :src="logo.src" :alt="logo.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-6 bg-primary">
      <div class="section-container">
        <svg
          class="squiggle"
          width="46"
          height="14"
          viewBox="0 0 46 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11L10.4 3L18.8 11L27.2 3L35.6 11L44 3"
            stroke="#fff"
            stroke-width="4"
            stroke-miterlimit="50"
          />
        </svg>
        <div class="flex flex-col justify-start align-start md:flex-row">
          <div class="md:max-w-2/3">
            <h2 class="text-4xl font-bold tracking-wide text-white">
              What excites me
            </h2>
            <p
              class="mt-4 text-xl font-medium leading-normal tracking-wide text-white md:text-2xl"
            >
              Sharing stories, challenges, learnings and wins with those
              motivated to achieve growth. Appreciate that knowledge only
              equates to expertise when practiced, tested and ultimately
              validated. Rarely satisfied to accept theory based best practice,
              and above all, data wins, every time!
            </p>
          </div>

          <div
            class="pt-10 mt-8 border-white border-solid md:max-w-1/3 md:w-full md:mt-0 md:pt-0 md:ml-4 md:pl-16"
          >
            <img
              src="https://cdn2.hubspot.net/hubfs/416563/testimonial.png?width=60&height=60&name=testimonial.png"
              alt="Mark Dwyer"
            />
            <div class="mt-8">
              <p class="text-sm tracking-wide text-white">
                “I've worked with Andy on multiple projects and campaigns.
                Andy's always brought a fresh perspective to my teams and truly
                understands the forces faced by a SaaS business"
              </p>
              <span class="inline-block mt-8 font-bold text-white"
                >Mark Dwyer</span
              >
              <span class="inline-block font-medium text-white sm:block"
                >Chief Executive Officer at Medify Technologies</span
              >
            </div>
          </div>
        </div>

        <div
          class="flex flex-wrap items-center justify-between w-full lg:justify-between"
        >
          <div class="w-full mt-16 lg:mt-24">
            <h4
              class="inline-block px-3 py-1 text-sm font-semibold tracking-wide bg-white text-primary"
            >
              Who I've worked with
            </h4>
          </div>

          <div
            v-for="company in companies"
            :key="company.id"
            class="my-4 sm:w-1/3 md:my-10 lg:w-auto"
          >
            <img
              class="mx-auto d-block"
              :src="company.src"
              :alt="company.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.border-up::before {
  right: 360px;
  height: 200%;
  top: -75%;
  width: 1px;
  content: " ";
  @apply bg-primary absolute;
}
.squiggle {
  @apply mt-12 mb-6;
}

.inline-link {
  &:link,
  &:visited {
    @apply font-medium;
    box-shadow: inset 0 -0.5em 0 #cbd5e0;
    border-bottom: 2px solid #718096;
    transition: border 50ms easeInCirc, box-shadow 100ms easeInOutQuint;
  }

  &:hover,
  &:focus {
    @apply text-gray-800;
    box-shadow: inset 0 -1.2em 0 #cbd5e0;
  }

  @screen md {
    &:link,
    &:visited {
      @apply font-bold;
      border-bottom-width: 3px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      companies: [
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/clinic-to-cloud.svg",
          alt: "Clinic to Cloud"
        },
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/weploy.svg",
          alt: "weploy"
        },
        {
          src:
            "https://cdn2.hubspot.net/hubfs/416563/zeetings.png?width=116&height=31&name=zeetings.png",
          alt: "zeetings"
        },
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/scrunch.svg",
          alt: "scrunch"
        },
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/flarehr.svg",
          alt: "flare"
        },
        {
          src:
            "https://cdn2.hubspot.net/hubfs/416563/workflowmax.png?width=139&height=41&name=workflowmax.png",
          alt: "Workflow Max"
        }
      ],
      logos: [
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/you&co-logo.png",
          alt: "You and Co"
        },
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/focus-logo.png",
          alt: "Focus"
        },
        {
          src: "https://cdn2.hubspot.net/hubfs/416563/botsbyco.png",
          alt: "Bots by Co"
        }
      ],
      sections: [
        {
          sectionInverted: true,
          sectionTitle: 'Who is <span class="highlight">Andy</span>?',
          sectionContent: `You'll find me helping Founders, Marketers and Sales folk of Software Businesses via my roles as Managing Director of <a class="inline-link" href="#">You & Co</a>, <a class="inline-link" href="#">Founder of Bots by Co</a> otherwise building my own SaaS product, <a class="inline-link" href="#">Focus App</a>.`
        }
      ]
    };
  }
};
</script>
