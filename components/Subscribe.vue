<template>
  <section class="py-12 bg-gray-900">
    <div class="section-container">
      <h4
        class="max-w-md mx-auto text-lg font-extrabold text-center text-white "
      >
        Receive 1x email per week that includes a problem and solution towards
        scaling growth.
      </h4>

      <img
        class="mx-auto my-6"
        src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
        alt="squiggle"
      />

      <form
        class="flex max-w-md mx-auto"
        name="subscribe"
        method="POST"
        action="/submission/subscribe"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <div class="relative w-full label-floating">
          <input
            required
            class="block w-full px-5 py-3 border-4 border-white border-solid"
            type="email"
            name="subscribeEmail"
            id="subscribeEmail"
            placeholder="Email address"
          />
          <label class="absolute" for="subscribeEmail">
            Email
          </label>
        </div>

        <button class="block cta" type="submit">Include me</button>
      </form>
    </div>
  </section>
</template>
