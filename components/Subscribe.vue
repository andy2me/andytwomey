<template>
  <section class="bg-gray-900 py-12">
    <div class="section-container">
      <h4 class="text-white text-lg font-extrabold text-center max-w-md mx-auto ">
        Receive 1x email per week that includes a problem and solution towards scaling growth.
      </h4>

      <img class="mx-auto my-6" src="https://cdn2.hubspot.net/hubfs/416563/AT/squiggle.svg" alt="squiggle" />

      <form id="subscribe" class="max-w-md mx-auto" @submit="submitSubscribe">
        <input required class="block w-full py-3 px-5" type="email" name="subscribeEmail" placeholder="Email address" />
        <button class="cta block w-full" type="submit">Include me</button>
      </form>

      <div v-if="showStatusMessage" class="mt-4 max-w-md p-3 mx-auto rounded font-semibold text-center" :class="submitStatus == '200' ? 'bg-green-300 text-green-800' : 'bg-red-400 text-red-800'">
        {{ submitMessage }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showStatusMessage: false,
      submitStatus: '',
      submitMessage: ''
    }
  },
  methods: {
    submitSubscribe: function(event) {
      event.preventDefault();
      var subscribeForm = document.forms['subscribe'];
      var subscribeFormData = subscribeForm.querySelector('input[name="subscribeEmail"]').value;
      this.postData(subscribeFormData);
    },
    postData(emailValue) {
      const xhr = new XMLHttpRequest();
      const url = 'https://api.hsforms.com/submissions/v3/integration/submit/416563/b16e9fe7-21ce-4f98-a37b-9efe5c808410'
      let submitData = {
        "fields": [
          {
            "name": "email",
            "value": emailValue
          }
        ],
        "context": {
          "pageUri": "www.andytwomey.com/",
          "pageName": "Home page"
        },
        "legalConsentOptions": {
          "consent": { 
            "consentToProcess": true,
            "text": "I agree to allow Andy Twomey to store and process my personal data.",
            "communications": [
              {
                "value": true,
                "subscriptionTypeId": 999,
                "text": "I agree to receive marketing communications from Andy Twomey."
              }
            ]
          }
        }
      };
      const final_data = JSON.stringify(submitData);

      xhr.open('POST', url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = () => {
         if (xhr.readyState == 4 && xhr.status == 200) {
          this.showStatus(xhr.status, 'Success!');
        } else if (xhr.readyState == 4 && xhr.status == 400) { 
          this.showStatus(
            xhr.status,
            'Please make sure you entered your email correctly.'
          );
        } else if (xhr.readyState == 4 && xhr.status == 403) { 
          this.showStatus(
            xhr.status,
            'There was a problem on our end.'
          );
        } else if (xhr.readyState == 4 && xhr.status == 404){ 
          this.showStatus(
            xhr.status,
            'Error 404, connection not found.'
          );
        }
      }
    
      xhr.send(final_data);
    },
    showStatus(status, message) {
      this.showStatusMessage = true;
      this.submitStatus = status;
      this.submitMessage = message;
      console.log(this.showStatusMessage, this.submitStatus, this.submitMessage)
    }
  }
}
</script>