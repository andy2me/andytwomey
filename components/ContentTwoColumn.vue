<template>
  <div>
    <div class="bg-gray-100 py-6 xl:py-24">
      <div class="section-container">
        <div class="flex flex-col justify-start align-start md:flex-row">
          <div class="md:max-w-2/3">
            <h2 class="text-4xl font-bold tracking-wide text-gray-900 xl:text-6xl">
              Who is <span class="highlight">Andy</span>?
            </h2>
            <p
              class="mt-4 text-xl tracking-wide leading-normal font-medium text-gray-700 md:text-2xl xl:text-3xl xl:tracking-wider xl:leading-relaxed"
            >
              You'll find me helping Founders, Marketers and Sales folk of Software Businesses via my roles as Managing Director of <a class="inline-link" href="#">You & Co</a>, <a class="inline-link" href="#">Founder of Bots by Co</a> otherwise building my own SaaS product, <a class="inline-link" href="#">Focus App</a>.
            </p>
            <a class="cta cta-lg mt-10 lg:mt-16" href="#">
              What excites me
            </a>
          </div>

          <div class="flex flex-col justify-center items-center pt-10 md:max-w-1/3 md:w-full">
            <div v-for="logo in logos" :key="logo.id" class="my-4 md:my-10">
              <img :src="logo.src" :alt="logo.alt">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary py-6 xl:py-24">
      <div class="section-container">
        <svg
          class="squiggle"
          width="46"
          height="14"
          viewBox="0 0 46 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 11L10.4 3L18.8 11L27.2 3L35.6 11L44 3" stroke="#fff" stroke-width="4" stroke-miterlimit="50"/>
        </svg>
        <div class="flex flex-col justify-start align-start md:flex-row">
          <div class="md:max-w-2/3">
            <h2 class="text-4xl font-bold tracking-wide text-white xl:text-6xl">
              What excites me
            </h2>
            <p
              class="mt-4 text-xl text-white leading-normal tracking-wide md:text-2xl font-medium xl:text-3xl xl:tracking-wider"
            >
              Sharing stories, challenges, learnings and wins with those motivated to achieve growth. Appreciate that knowledge only equates to expertise when practiced, tested and ultimately validated. Rarely satisfied to accept theory based best practice, and above all, data wins, every time!
            </p>
          </div>

          <div class="mt-8 pt-10 md:max-w-1/3 md:w-full md:mt-0 md:pt-0 md:ml-4 xl:ml-12 xl:pl-16 xl:border-l-2 border-white border-solid">
            <img src="https://www.andytwomey.com/hs-fs/hubfs/testimonial.png?width=60&height=60&name=testimonial.png" alt="Mark Dwyer" />
            <div class="mt-8">
              <p class="text-sm text-white tracking-wide sm:text-base md:text-xl xl:text-2xl xl:tracking-wider">
                “I've worked with Andy on multiple projects and campaigns. Andy's always brought a fresh perspective to my teams and truly understands the forces faced by a SaaS business"
              </p>
              <span class="inline-block mt-8 text-white font-bold">Mark Dwyer</span>
              <span class="inline-block text-white font-medium sm:block">Chief Executive Officer at Medify Technologies</span>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-between items-center w-full lg:justify-between">
          <div class="w-full mt-16 lg:mt-24">
            <h4 class="text-primary font-semibold text-sm tracking-wide px-3 py-1 bg-white inline-block">
              Who I've worked with
            </h4>
          </div>

          <div v-for="company in companies" :key="company.id" class="my-4 sm:w-1/3 md:my-10 lg:w-auto">
            <img class="d-block mx-auto" :src="company.src" :alt="company.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.squiggle { 
  @apply mt-12 mb-6; 
  @screen xxl { & { @apply mt-32 } }
}

.inline-link { 
  &:link, &:visited {
    @apply font-medium;
    box-shadow: inset 0 -0.5em 0 #CBD5E0; border-bottom: 2px solid #718096;
    transition: border 50ms easeInCirc, box-shadow 100ms easeInOutQuint;
  }

  &:hover,
  &:focus { 
    @apply text-gray-800;
    box-shadow: inset 0 -1.2em 0 #CBD5E0;
  }

  @screen md {
    &:link, &:visited { 
      @apply font-bold;
      border-bottom-width: 3px; 
    }
  }

  @screen xl {
    &:link, &:visited { 
      @apply font-bold; 
      border-bottom-width: 4px; 
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      companies: [
        { src: 'https://www.andytwomey.com/hubfs/clinic-to-cloud.svg', alt: 'Clinic to Cloud' },
        { src: 'https://www.andytwomey.com/hubfs/weploy.svg', alt: 'weploy' },
        { src: 'https://www.andytwomey.com/hs-fs/hubfs/zeetings.png?width=116&height=31&name=zeetings.png', alt: 'zeetings' },
        { src: 'https://www.andytwomey.com/hubfs/scrunch.svg', alt: 'scrunch' },
        { src: 'https://www.andytwomey.com/hubfs/flarehr.svg', alt: 'flare' },
        { src: 'https://www.andytwomey.com/hs-fs/hubfs/workflowmax.png?width=139&height=41&name=workflowmax.png', alt: 'Workflow Max' }
      ],
      logos: [
        { src: 'https://www.andytwomey.com/hs-fs/hubfs/you&co-logo.png', alt: 'You and Co' },
        { src: 'https://www.andytwomey.com/hs-fs/hubfs/focus-logo.png', alt: 'Focus' },
        { src: 'https://www.andytwomey.com/hs-fs/hubfs/botsbyco.png', alt: 'Bots by Co' }
      ],
      sections: [
        {
          sectionInverted: true,
          sectionTitle: 'Who is <span class="highlight">Andy</span>?',
          sectionContent: `You'll find me helping Founders, Marketers and Sales folk of Software Businesses via my roles as Managing Director of <a class="inline-link" href="#">You & Co</a>, <a class="inline-link" href="#">Founder of Bots by Co</a> otherwise building my own SaaS product, <a class="inline-link" href="#">Focus App</a>.`
        }
      ]
    }
  }
}
</script>
