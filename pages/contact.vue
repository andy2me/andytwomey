<template>
  <SingleColumnPage
      :header="header"
      :description="description"
      :navigationContent="navigationContent"
      :footerContent="footerContent"
  >
    <form
      class="max-w-md mx-auto"
      name="contact"
      method="POST"
      action="/submission/contact"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="relative w-full label-floating">
        <input
          required
          class="block w-full px-5 py-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="First name"
          type="text"
          name="firstname"
          id="firstname"
        />

        <label class="absolute" for="firstname">
          First Name
        </label>
      </div>

      <div class="relative w-full label-floating">
        <input
          class="block w-full px-5 py-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Last name"
          type="text"
          name="lastname"
          id="lastname"
        />

        <label class="absolute" for="lastname">
          Last name
        </label>
      </div>

      <div class="relative w-full label-floating">
        <input
          class="block w-full px-5 py-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Mobile phone number"
          type="text"
          name="mobilephone"
          id="mobilephone"
        />

        <label class="absolute" for="mobilephone">
          Mobile Number
        </label>
      </div>

      <div class="relative w-full label-floating">
        <input
          required
          class="block w-full px-5 py-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Company name"
          type="text"
          name="company"
          id="company"
        />
        <label class="absolute" for="company">
          Company Name
        </label>
      </div>

      <div class="relative w-full label-floating">
        <input
          required
          class="block w-full px-5 py-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Email"
          type="email"
          name="email"
          id="email"
        />
        <label class="absolute" for="email">
          Email
        </label>
      </div>

      <button class="mx-auto mt-6 cta" type="submit">Let's chat</button>
    </form>
  </SingleColumnPage>
</template>

<script>
import SingleColumnPage, { loadAsyncProps } from "~/components/pages/SingleColumn";

export default {
  components: {
    SingleColumnPage
  },
  head: {
    title: "Hire Andy Twomey"
  },
  data() {
    return {
      header: 'Get in touch with Andy',
      description: "Complete the form below to organise a time to chat. I'll be in touch soon!"
    }
  },
  async asyncData({ context, error, req }) {
    try {
      const singleColumnPageProps = await loadAsyncProps({
        context,
        error,
        req
      });
      return { ...singleColumnPageProps };
    } catch (e) {
      error(e);
    }
  }
};
</script>

<style lang="postcss"></style>
