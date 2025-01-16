<script setuo>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    campaign: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    subjects: {
      type: Array,
      required: true,
    },
  },

  methods: {
    serialize(obj) {
      let str = []
      for (let p in obj) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
      return str.join('&')
    },

    getMailToHref() {
      return (
        'mailto:' +
        this.destination +
        '?' +
        this.serialize({
          subject: this.campaign + ' - ' + this.data.subject,
          body: this.data.body,
        })
      )
    },

    send() {
      const href = document.createElement('a')
      href.setAttribute('href', this.getMailToHref())
      href.setAttribute('target', '_blank')
      document.body.append(href)
      href.click()
      href.remove()
    },

    handleSubjectChange(event) {
      this.data.subject = event.target.value
    },
    handleBodyChange(event) {
      this.data.body = event.target.value
    },
  },

  setup: (props) => {
    return {
      ...props,
      data: {
        subject: props.subjects[0].label,
        body: 'Enter Your Message Here...',
      },
    }
  },
})
</script>

<template>
  <div class="vue-mailto">
    <div class="form">
      <div class="form-input">
        <label>Subject</label>
        <select @change="handleSubjectChange" class="subject">
          <option>Please Select a Subject</option>
          <option :key="subject.value" v-value="subject.label" v-for="subject in subjects">
            {{ subject.label }}
          </option>
        </select>
      </div>
      <div class="form-input">
        <label>Message</label>
        <textarea
          @change="handleBodyChange"
          placeholder="Enter Your Message Here..."
          class="textarea"
        ></textarea>
      </div>
      <div class="form-input">
        <button @click="send()">Send Email</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vue-mailto .form .form-input {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
</style>
