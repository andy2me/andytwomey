<template>
  <div>
    <Navigation :navigationContent="navigationContent" />
    <section class="py-12 section-container md:py-24">
      <h1 class="text-5xl font-bold text-center">Get in touch with Andy</h1>

      <hr class="max-w-lg mx-auto my-12 border-t-4 border-gray-800" />

      <p
        class="max-w-md mx-auto text-xl font-semibold text-center text-gray-900"
      >
        Complete the form below to organise a time to chat. I'll be in touch
        soon!
      </p>

      <img
        class="mx-auto my-6"
        src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg"
        alt="squiggle"
      />

      <form id="contact" class="max-w-md mx-auto" @submit="submitSubscribe">
        <input
          required
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="First name"
          type="text"
          name="firstname"
        />
        <input
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Last name"
          type="text"
          name="lastname"
        />
        <input
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Mobile phone number"
          type="text"
          name="mobilephone"
        />
        <input
          required
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Company name"
          type="text"
          name="company"
        />
        <input
          required
          class="block w-full p-3 mt-4 font-medium placeholder-gray-600 border-4 border-gray-900"
          placeholder="Email"
          type="email"
          name="email"
        />
        <button class="mx-auto mt-6 cta" type="submit">Lets chat</button>
      </form>

      <div
        v-if="showStatusMessage"
        class="max-w-md p-3 mx-auto mt-4 font-semibold text-center rounded"
        :class="
          submitStatus == '200'
            ? 'bg-green-300 text-green-800'
            : 'bg-red-400 text-red-800'
        "
      >
        {{ submitMessage }}
      </div>
    </section>
    <Footer :footerContent="footerContent" />
  </div>
</template>

<style lang="postcss" scoped>
.cta {
  @apply block px-6 py-3 text-lg bg-gray-900;
}
</style>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default {
  components: {
    Navigation,
    Footer
  },
  head: {
    title: "Hire Andy Twomey"
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });
      const navigation = await api.getSingle("navigation");
      const footer = await api.getSingle("footer");

      let navigationContent = navigation.data;
      let footerContent = footer.data;

      return {
        navigationContent,
        footerContent
      };
    } catch (e) {
      error(e);
    }
  },
  data() {
    return {
      showStatusMessage: false,
      submitStatus: "",
      submitMessage: ""
    };
  },
  methods: {
    submitSubscribe: function(event) {
      event.preventDefault();
      const contactForm = document.forms["contact"];
      let contactFormData = {
        firstname: contactForm.querySelector('input[name="firstname"]').value,
        lastname: contactForm.querySelector('input[name="lastname"]').value,
        mobilephone: contactForm.querySelector('input[name="mobilephone"]')
          .value,
        company: contactForm.querySelector('input[name="company"]').value,
        email: contactForm.querySelector('input[name="email"]').value
      };
      this.postData(contactFormData);
    },
    // prettier-ignore
    postData(contactFormData) {
      const xhr = new XMLHttpRequest();
      const url =
        "https://api.hsforms.com/submissions/v3/integration/submit/416563/8d791780-b3ba-4109-b471-80fcb17320d5";
      let submitData = {
        "fields": [
          {
            "name": "firstname",
            "value": contactFormData.firstname
          },
          {
            "name": "lastname",
            "value": contactFormData.lastname
          },
          {
            "name": "mobilephone",
            "value": contactFormData.mobilephone
          },
          {
            "name": "companyname",
            "value": contactFormData.company
          },
          {
            "name": "email",
            "value": contactFormData.email
          }
        ],
        "context": {
          "pageUri": "www.andytwomey.com/contact",
          "pageName": "Hire Me"
        },
        "legalConsentOptions": {
          "consent": {
            "consentToProcess": true,
            "text":
              "I agree to allow Andy Twomey to store and process my personal data.",
            "communications": [
              {
                "value": true,
                "subscriptionTypeId": 999,
                "text":
                  "I agree to receive marketing communications from Andy Twomey."
              }
            ]
          }
        }
      };
      const final_data = JSON.stringify(submitData);
console.log(final_data)
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.showStatus(xhr.status, "Success!");
        } else if (xhr.readyState == 4 && xhr.status == 400) {
          this.showStatus(
            xhr.status,
            "Please make sure you entered your email correctly."
          );
        } else if (xhr.readyState == 4 && xhr.status == 403) {
          this.showStatus(xhr.status, "There was a problem on our end.");
        } else if (xhr.readyState == 4 && xhr.status == 404) {
          this.showStatus(xhr.status, "Error 404, connection not found.");
        }
      };

      xhr.send(final_data);
    },
    showStatus(status, message) {
      this.showStatusMessage = true;
      this.submitStatus = status;
      this.submitMessage = message;
      console.log(
        this.showStatusMessage,
        this.submitStatus,
        this.submitMessage
      );
    }
  }
};
</script>

<style lang="postcss"></style>
